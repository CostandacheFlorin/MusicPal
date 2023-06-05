import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import ArtistInfo from "../ArtistInfo";

interface BasicArtist {
  artistName: string;
  image: string;
  id: string;
}

const AddArtists = () => {
  const [artists, setArtists] = useState<BasicArtist[]>([]);
  const [artistName, setArtistName] = useState<string>("");
  const [errors, setErrors] = useState({ artistName: false });

  const addArtistHandler = () => {
    if (artistName.trim() === "") {
      setErrors({ ...errors, artistName: true });
      return;
    }
    setArtists([
      ...artists,
      {
        id: `asd- ${Math.floor(Math.random() * 1000) + 1}`,
        artistName,
        image:
          "https://i.scdn.co/image/ab67616d0000b2736f8adbba8e95f3cc81209183",
      },
    ]);
    setArtistName("");
    setErrors({ ...errors, artistName: false });
  };

  return (
    <div>
      <p className="mb-2 text-textPrimary pl-3 font-bold text-center text-lg">
        Artists
      </p>

      {artists.map((artist) => (
        <ArtistInfo
          key={artist.id}
          artist={artist.artistName}
          image={artist.image}
        />
      ))}

      <Input
        placeholder="Artist name"
        labelPosition="center"
        label="Artist name"
        error={errors.artistName}
        errorMessage="Please provide an artist name"
        value={artistName}
        onChange={setArtistName}
      />
      <Button
        className="bg-tertiary rounded-md py-2  w-full text-center"
        text="Add artist"
        onClick={addArtistHandler}
      />
    </div>
  );
};

export default AddArtists;
