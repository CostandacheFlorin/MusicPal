import Button from "../Button";

interface TrackInfoProps {
  track: string;
  artist: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
}

const TrackInfo: React.FC<TrackInfoProps> = ({
  track,
  artist,
  image,
  imageWidth = 150,
  imageHeight = 150,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center gap-3 items-center">
        <img src={image} width={imageWidth} height={imageHeight} />
        <div className="flex flex-col w-[150px]">
          <p className="text-textPrimary font-bold text-center py-2">{track}</p>
          <p className="text-textPrimary text-center py-2">{artist}</p>
        </div>
      </div>
      <Button
        className="bg-[#FF0000]  rounded-md p-3  mt-2  text-center"
        text="Remove track"
        onClick={() => console.log("sters")}
      />
    </div>
  );
};

export default TrackInfo;
