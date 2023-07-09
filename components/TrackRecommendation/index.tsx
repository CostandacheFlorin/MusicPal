"use client";

import DownArrow from "@/assets/svgs/DownArrow";
import UpArrow from "@/assets/svgs/UpArrow";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import TrackActions from "../TrackActions";

interface TrackRecommendationProps {
  onScrollingUp: () => void;
  onScrollingDown: () => void;
  trackId: string;
  artistId: string;
}

const TrackRecommendation: React.FC<TrackRecommendationProps> = ({
  onScrollingUp,
  onScrollingDown,
  trackId,
  artistId,
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

          <TrackActions trackId={trackId} artistId={artistId} />
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
