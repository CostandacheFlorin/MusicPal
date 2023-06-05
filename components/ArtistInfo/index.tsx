interface ArtistInfoProps {
  artist: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
}

const ArtistInfo: React.FC<ArtistInfoProps> = ({
  artist,
  image,
  imageWidth = 150,
  imageHeight = 150,
}) => {
  return (
    <div className="flex justify-center gap-3 items-center">
      <img src={image} width={imageWidth} height={imageHeight} />
      <div className="flex flex-col w-[150px]">
        <p className="text-textPrimary font-bold text-center py-2">{artist}</p>
      </div>
    </div>
  );
};

export default ArtistInfo;
