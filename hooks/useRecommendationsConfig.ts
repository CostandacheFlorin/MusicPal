import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useQuery } from "react-query";
import { getGenresList } from "@/actions/utils.action";
import { convertToDropdownOptions } from "@/helpers";
import { getArtistInfo, getTrackInfo } from "@/actions/search.action";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import { getTracksRecommendations } from "@/actions/recommendations.action";
import { toast } from "react-toastify";

export interface BasicTrack {
  id: string;
  trackName: string;
  artistName: string;
  image: string;
}
export interface BasicArtist {
  artistName: string;
  image: string;
  id: string;
}

export const useRecommendationsConfig = () => {
  const {
    recommendationSettings,
    setRecommendationSettings,
    setRecommendedTracks,
    setCurrentRecommendedTrack,
  } = useRecommendationContext();

  const [tracks, setTracks] = useState<BasicTrack[]>(
    recommendationSettings?.tracks || []
  );
  const [artists, setArtists] = useState<BasicArtist[]>(
    recommendationSettings?.artists || []
  );
  const [trackName, setTrackName] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [artistSeedName, setArtistSeedName] = useState<string>("");
  const [addTrackErrors, setAddTrackErrors] = useState({
    trackName: false,
    artistName: false,
  });

  const [fetchingErrors, setFetchingErrors] = useState({
    getTrack: { hasError: false, errorMessage: "" },
    getArtist: { hasError: false, errorMessage: "" },
    setRecommendationsSettings: { hasError: false, errorMessage: "" },
  });
  const [genresOptions, setGenresOptions] = useState<DefaultOptionType[]>([]);
  const [genres, setGenres] = useState<string[]>(
    recommendationSettings?.genres || []
  );
  const [popularity, setPopularity] = useState(
    recommendationSettings?.popularity || "high"
  );

  const { error: genresFetchingError, refetch: refetchGenres } = useQuery(
    "getGenresList",
    async () => await getGenresList(),
    {
      refetchOnWindowFocus: false,
      onSuccess: (genresData) => {
        setGenresOptions(convertToDropdownOptions(genresData));
      },
    }
  );

  const { error: fetchTrackInfoError, refetch: fetchTrackinfo } = useQuery(
    "getTrackInfo",
    async () => await getTrackInfo(trackName, artistName),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (track) => {
        if (
          tracks.map((trackItem) => trackItem.trackName).includes(track.name)
        ) {
          setFetchingErrors({
            ...fetchingErrors,
            getTrack: {
              hasError: true,
              errorMessage: "You already added this track!",
            },
          });
          return;
        }

        setTracks([
          ...tracks,
          {
            id: track.id,
            trackName: track.name,
            artistName: track.artists,
            image: track.image,
          },
        ]);
        setTrackName("");
        setArtistName("");
        setAddTrackErrors({ trackName: false, artistName: false });
        setFetchingErrors({
          ...fetchingErrors,
          getTrack: {
            hasError: false,
            errorMessage: "",
          },
        });
        toast.success("Added a new track");
      },
      onError: (error) => {
        toast.error("Failed getting the track, try again!");

        setFetchingErrors({
          ...fetchingErrors,
          getTrack: {
            hasError: true,
            errorMessage:
              "Something went wrong, try looking for a different track, or try again later!",
          },
        });
      },
    }
  );

  const { refetch: fetchArtistInfo } = useQuery(
    "getArtistInfo",
    async () => await getArtistInfo(artistSeedName),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (artistData) => {
        if (
          artists
            .map((artistItem) => artistItem.artistName)
            .includes(artistData.name)
        ) {
          setFetchingErrors({
            ...fetchingErrors,
            getArtist: {
              hasError: true,
              errorMessage: "You already added this artist!",
            },
          });
          return;
        }
        setArtists([
          ...artists,
          {
            id: artistData.id,
            artistName: artistData.name,
            image: artistData.image,
          },
        ]);
        setArtistSeedName("");
        setFetchingErrors({
          ...fetchingErrors,
          getArtist: {
            hasError: false,
            errorMessage: "",
          },
        });
        toast.success("Added a new artist");
      },
      onError: (error) => {
        toast.error("Failed getting the artist, try again!");

        setFetchingErrors({
          ...fetchingErrors,
          getArtist: {
            hasError: true,
            errorMessage:
              "Something went wrong, try searching again, or try again later!",
          },
        });
      },
    }
  );

  const { refetch: refetchRecommendedTracks } = useQuery(
    "getRecommendedTracks",
    async () =>
      await getTracksRecommendations(
        tracks.map((trackItem) => trackItem.id),
        artists.map((artistItem) => artistItem.id),
        genres,
        popularity
      ),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: (tracksData) => {
        setRecommendedTracks(tracksData);
        setCurrentRecommendedTrack(tracksData[0]);
        localStorage.setItem("recommendedTracks", JSON.stringify(tracksData));
        localStorage.setItem(
          "currentRecommendedTrack",
          JSON.stringify(tracksData[0])
        );
      },
    }
  );

  const addTrackHandler = () => {
    if (trackName.trim() === "") {
      setAddTrackErrors({ ...addTrackErrors, trackName: true });
      return;
    }
    if (artistName.trim() === "") {
      setAddTrackErrors({ ...addTrackErrors, artistName: true });
      return;
    }

    fetchTrackinfo();
  };
  const removeTrackHandler = (id: string) => {
    const filteredTracks = tracks.filter((trackItem) => trackItem.id !== id);
    setTracks(filteredTracks);
  };

  const handleTagsChange = (value: any) => {
    if (value && value.length > 5) {
      const newArray = value.slice(0, 5);
      setGenres([...newArray]);
    } else {
      setGenres(value);
    }
  };

  const addArtistHandler = () => {
    if (artistSeedName.trim() === "") {
      setFetchingErrors({
        ...fetchingErrors,
        getArtist: {
          hasError: true,
          errorMessage: "Please provide an artist name!",
        },
      });
      return;
    }

    fetchArtistInfo();
  };
  const removeArtistHandler = (id: string) => {
    const filteredArtists = artists.filter(
      (artistItem) => artistItem.id !== id
    );
    setArtists(filteredArtists);
  };
  const onChangeRadio = (e: RadioChangeEvent) => {
    setPopularity(e.target.value);
  };

  const submitRecommendation = () => {
    if (tracks.length + artists.length + genres.length > 5) {
      setFetchingErrors({
        ...fetchingErrors,
        setRecommendationsSettings: {
          hasError: true,
          errorMessage:
            "You can only provide 5 seed values! Please remove the extra seeds",
        },
      });
      toast.error(
        "You can only provide 5 seed values! Please remove the extra seeds"
      );

      window.scrollTo(0, document.body.scrollHeight);

      return;
    }

    if (tracks.length + artists.length + genres.length === 0) {
      toast.error("You need to choose at least one track, artist or genre!");
      return;
    }
    const newSettings = {
      tracks,
      artists,
      genres,
      popularity,
    };
    setRecommendationSettings(newSettings);
    localStorage.setItem("recommendationSettings", JSON.stringify(newSettings));

    refetchRecommendedTracks();
    setFetchingErrors({
      ...fetchingErrors,
      setRecommendationsSettings: {
        hasError: false,
        errorMessage: "",
      },
    });
    toast.success(
      "Created a new discovery queue! Go to the discovery page to check them out!"
    );
  };

  return {
    submitRecommendation,
    handleTagsChange,
    onChangeRadio,
    genresOptions,
    genres,
    popularity,
    genresFetchingError,
    refetchGenres,
    tracks,
    trackName,
    artistName,
    fetchTrackInfoError,
    addTrackErrors,
    setTrackName,
    setArtistName,
    addTrackHandler,
    removeTrackHandler,
    artists,
    removeArtistHandler,
    artistSeedName,
    setArtistSeedName,
    addArtistHandler,
    fetchingErrors,
    refetchRecommendedTracks,
  };
};
