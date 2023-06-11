import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import ArtistInfo from "../ArtistInfo";
import { useQuery } from "react-query";
import { getArtistInfo } from "@/actions/search.action";
import { useRecommendationsConfig } from "@/hooks/useRecommendationsConfig";

const AddArtists = () => {
  const {
    artists,
    removeArtistHandler,
    fetchingErrors,
    artistSeedName,
    setArtistSeedName,
    addArtistHandler,
  } = useRecommendationsConfig();

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-2 text-textPrimary pl-3 font-bold text-center text-lg">
        Artists
      </p>
      <div className="flex gap-4 flex-wrap items-stretch justify-center">
        {artists.map((artist) => (
          <ArtistInfo
            key={artist.id}
            artist={artist.artistName}
            image={artist.image}
            onRemove={() => removeArtistHandler(artist.id)}
            showRemoveButton
          />
        ))}
      </div>

      <Input
        placeholder="Artist name"
        labelPosition="center"
        label="Artist name"
        error={fetchingErrors.getArtist.hasError}
        errorMessage={fetchingErrors.getArtist.errorMessage}
        value={artistSeedName}
        onChange={setArtistSeedName}
      />
      <Button
        className="bg-tertiary !w-[200px] rounded-md py-2  w-full text-center"
        text="Add artist"
        onClick={addArtistHandler}
      />
    </div>
  );
};

export default AddArtists;
