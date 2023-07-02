import Input from "../Input";
import Button from "../Button";
import ArtistInfo from "../ArtistInfo";
import { BasicArtist } from "@/hooks/useRecommendationsConfig";

interface AddArtistProps {
  removeHandler: (artistId: string) => void;
  artists: BasicArtist[];
  fetchingErrors: any;
  artistSeedName: string;
  setArtistSeedName: (artistName: string) => void;
  addArtistHandler: () => void;
}

const AddArtists = ({
  removeHandler,
  artists,
  fetchingErrors,
  artistSeedName,
  setArtistSeedName,
  addArtistHandler,
}: AddArtistProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-2 text-textPrimary pl-3 font-bold text-center text-lg">
        Artists
      </p>
      <div className="flex gap-4 flex-wrap items-stretch justify-center">
        {artists.map((artist: any) => (
          <ArtistInfo
            key={artist.id}
            artist={artist.artistName}
            image={artist.image}
            onRemove={() => removeHandler(artist.id)}
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
