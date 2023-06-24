"use client";

import DownArrow from "@/assets/svgs/DownArrow";
import UpArrow from "@/assets/svgs/UpArrow";

interface TrackRecommendationProps {
  onScrollingUp: () => void;
  onScrollingDown: () => void;
  trackId: string;
}

const TrackRecommendation: React.FC<TrackRecommendationProps> = ({
  onScrollingUp,
  onScrollingDown,
  trackId,
}) => {
  const onWheelHandler = (e: any) => {
    if (e.deltaY < 0) {
      onScrollingUp();
    }
    onScrollingDown();
    return;
  };

  return (
    <div
      onWheel={onWheelHandler}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-between w-full max-w-[600px] gap-4 min-h-[500px]">
        <div className="h-full w-full flex flex-col items-center justify-around">
          <iframe
            className="w-full h-full"
            src={`https://open.spotify.com/embed/track/${trackId}`}
          />
          <p className="pb-8 text-white font-bold text-xl">
            Login with spotify to access actions
          </p>
        </div>

        <div className="flex flex-col h-full p-4 justify-between">
          <UpArrow
            className="cursor-pointer"
            color="#ffffff"
            width="30px"
            height="30px"
            onClick={onScrollingUp}
          />
          <DownArrow
            onClick={onScrollingDown}
            className="cursor-pointer"
            color="#ffffff"
            width="30px"
            height="30px"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackRecommendation;
