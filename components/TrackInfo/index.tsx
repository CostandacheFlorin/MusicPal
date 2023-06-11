import XSymbol from "@/assets/svgs/X-Symbol";
import Button from "../Button";

interface TrackInfoProps {
  track: string;
  artist: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  footerContent?: React.ReactNode;
  showRemoveButton?: boolean;
  onRemove?: any;
}

const TrackInfo: React.FC<TrackInfoProps> = ({
  track,
  artist,
  image,
  imageWidth = 150,
  imageHeight = 150,
  footerContent,
  showRemoveButton,
  onRemove,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-8   relative hover:bg-[#303030]">
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
      {showRemoveButton ? (
        <XSymbol
          onClick={onRemove}
          width="20px"
          height="20px"
          className="absolute hover:cursor-pointer text-white top-[10px] right-[10px]"
        />
      ) : null}
    </div>
  );
};

export default TrackInfo;
