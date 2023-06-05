import { useEffect, useState } from "react";
import type { SelectProps } from "antd";
import type { RadioChangeEvent } from "antd";

export const useRecommendations = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [popularity, setPopularity] = useState("");
  const [track, setTrack] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState("");
  const [numberOfSeedsLeft, setNumberOfSeedsLeft] = useState(5);
  const [seedsNumber, setSeedsNumber] = useState(0);

  // TODO: de sters useEffect
  useEffect(() => {
    let number = 0;
    if (track) {
      number++;
    }
    if (artist) {
      number++;
    }
    number += genres.length;

    if (number > 5) {
      setError(
        "Too many seed values, you can provide up to 5 values! Please remove some of them."
      );
    } else {
      setError("");
    }
    console.log(number);
  }, [genres, track, artist]);
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleArtistChange = (artistName: string) => {
    setArtist(artistName);
  };
  const handleTrackChange = (trackName: string) => {
    setTrack(trackName);
  };

  const handleTagsChange = (value: any) => {
    if (value && value.length > 5) {
      const newArray = value.slice(0, 5);
      setGenres([...newArray]);
    } else {
      setGenres(value);
    }
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setPopularity(e.target.value);
  };

  const submitRecommendation = () => {
    console.log("track", track);
    console.log("artist", artist);
    console.log("genres", genres);
    console.log("popularity", popularity);
  };

  return {
    submitRecommendation,
    options,
    handleArtistChange,
    handleTrackChange,
    handleTagsChange,
    onChangeRadio,
    genres,
    popularity,
    track,
    artist,
    error,
  };
};
