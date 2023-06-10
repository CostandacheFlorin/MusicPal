import Button from "../Button";

interface TrackInfoProps {
  track: string;
  artist: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  footerContent?: React.ReactNode;
}

const TrackInfo: React.FC<TrackInfoProps> = ({
  track,
  artist,
  image,
  imageWidth = 150,
  imageHeight = 150,
  footerContent,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-3 items-center">
        <img
          className="rounded-full"
          src={image}
          width={imageWidth}
          height={imageHeight}
        />
        <div className="flex flex-col w-[150px]">
          <p className="text-textPrimary font-bold text-center py-2">{track}</p>
          <p className="text-textPrimary text-center py-2">{artist}</p>
          {footerContent}
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;
