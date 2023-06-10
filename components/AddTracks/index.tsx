import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import TrackInfo from "../TrackInfo";
import { useRecommendationsConfig } from "@/hooks/useRecommendationsConfig";

const AddTracks = () => {
  const {
    tracks,
    trackName,
    setTrackName,
    setArtistName,
    artistName,
    addTrackErrors,
    addTrackHandler,
    fetchingErrors,
    removeTrackHandler,
  } = useRecommendationsConfig();
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-2 text-textPrimary text-lg font-bold pl-3 text-center">
        Tracks
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {tracks.map((track) => (
          <TrackInfo
            key={track.id}
            track={track.trackName}
            artist={track.artistName}
            image={track.image}
            footerContent={
              <Button
                className="bg-[#FF0000]  rounded-md p-3  mt-2  text-center"
                text="Remove track"
                onClick={() => removeTrackHandler(track.id)}
              />
            }
          />
        ))}
      </div>

      <div className="flex gap-5 justify-center">
        <Input
          placeholder="Track name"
          labelPosition="center"
          label="Track name"
          value={trackName}
          onChange={setTrackName}
          error={addTrackErrors.trackName}
          errorMessage="Please provide a track name"
        />
        <Input
          placeholder="Artist name"
          labelPosition="center"
          label="Artist name"
          error={addTrackErrors.artistName}
          errorMessage="Please provide an artist name"
          value={artistName}
          onChange={setArtistName}
        />
      </div>
      {fetchingErrors.getTrack.hasError ? (
        <p className="text-red-500 text-center py-2">
          {fetchingErrors.getTrack.errorMessage}
        </p>
      ) : null}
      <Button
        className="bg-tertiary w-[200px] rounded-md py-2  w-full text-center"
        text="Add track"
        onClick={addTrackHandler}
      />
    </div>
  );
};

export default AddTracks;
