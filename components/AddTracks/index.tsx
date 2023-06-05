import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import TrackInfo from "../TrackInfo";
import { useAddRecommendationTracks } from "@/hooks/useAddRecommendationTracks";

const AddTracks = () => {
  const {
    tracks,
    trackName,
    setTrackName,
    setArtistName,
    artistName,
    errors,
    addTrackHandler,
    getTrackError,
  } = useAddRecommendationTracks();
  return (
    <div>
      <p className="mb-2 text-textPrimary text-lg font-bold pl-3 text-center">
        Tracks
      </p>

      {tracks.map((track, index) => (
        <TrackInfo
          key={track.id}
          track={track.trackName}
          artist={track.artistName}
          image={track.image}
        />
      ))}

      <div className="flex gap-5 justify-center">
        <Input
          placeholder="Track name"
          labelPosition="center"
          label="Track name"
          value={trackName}
          onChange={setTrackName}
          error={errors.trackName}
          errorMessage="Please provide a track name"
        />
        <Input
          placeholder="Artist name"
          labelPosition="center"
          label="Artist name"
          error={errors.artistName}
          errorMessage="Please provide an artist name"
          value={artistName}
          onChange={setArtistName}
        />
      </div>
      {getTrackError.hasError ? (
        <p className="text-red-500 text-center py-2">
          {getTrackError.errorMessage}
        </p>
      ) : null}
      <Button
        className="bg-tertiary rounded-md py-2  w-full text-center"
        text="Add track"
        onClick={addTrackHandler}
      />
    </div>
  );
};

export default AddTracks;
