import { getTrackInfo } from "@/actions/tracks.action";
import { useState } from "react";
import { useQuery } from "react-query";

interface BasicTrack {
  id: string;
  trackName: string;
  artistName: string;
  image: string;
}

export const useAddRecommendationTracks = () => {
  const [tracks, setTracks] = useState<BasicTrack[]>([]);
  const [trackName, setTrackName] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [errors, setErrors] = useState({ trackName: false, artistName: false });
  const [getTrackError, setGetTrackError] = useState({
    hasError: false,
    errorMessage: "",
  });
  const {
    isLoading,
    isError,
    data,
    error,
    refetch: fetchTrackinfo,
  } = useQuery(
    "getTrackInfo",
    async () => await getTrackInfo(trackName, artistName),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (track) => {
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
        setErrors({ trackName: false, artistName: false });
        setGetTrackError({ hasError: false, errorMessage: "" });
      },
      onError: (error) => {
        setGetTrackError({
          hasError: true,
          errorMessage:
            "No track found, double check the track and artist names.",
        });
      },
    }
  );

  console.log(data);

  const addTrackHandler = () => {
    if (trackName.trim() === "") {
      setErrors({ ...errors, trackName: true });
      return;
    }
    if (artistName.trim() === "") {
      setErrors({ ...errors, artistName: true });
      return;
    }

    fetchTrackinfo();
  };

  return {
    tracks,
    trackName,
    artistName,
    errors,
    setTrackName,
    setArtistName,
    addTrackHandler,
    isLoading,
    isError,
    getTrackError,
  };
};
