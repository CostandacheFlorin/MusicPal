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
      return;
    }
    onScrollingDown();
    return;
  };

  return (
    <div
      onWheel={onWheelHandler}
      className="w-full h-full flex flex-col gap-4 items-center justify-center"
    >
      <UpArrow
        className="cursor-pointer"
        color="#ffffff"
        width="30px"
        height="30px"
        onClick={onScrollingUp}
      />
      <div className="flex items-center justify-between w-full max-w-[600px] gap-4 min-h-[500px]">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <iframe
            className="w-full h-full"
            src={`https://open.spotify.com/embed/track/${trackId}`}
          />
          <p className="pb-[4rem] text-center text-white font-bold text-xl">
            Login with spotify to access actions
          </p>
        </div>
      </div>
      <DownArrow
        onClick={onScrollingDown}
        className="cursor-pointer"
        color="#ffffff"
        width="30px"
        height="30px"
      />
    </div>
  );
};

export default TrackRecommendation;
