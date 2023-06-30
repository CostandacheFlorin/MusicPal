"use client";

import TrackRecommendation from "@/components/TrackRecommendation";
import { useRecommendationContext } from "@/providers/RecommendationContext";

const Discover = () => {
  const {
    currentRecommendedTrack,
    setCurrentRecommendedTrack,
    recommendedTracks,
  } = useRecommendationContext();

  if (!currentRecommendedTrack?.id) {
    return <div>You need to setup your discovery settings!</div>;
  }

  const changeTrackHandler = (direction: string) => {
    const currentPosition = recommendedTracks.findIndex(
      (recommendedTrackItem) =>
        recommendedTrackItem.id === currentRecommendedTrack.id
    );

    console.log(currentPosition);
    if (direction === "UP") {
      if (currentPosition === 0) {
        return;
      }
      setCurrentRecommendedTrack(recommendedTracks[currentPosition - 1]);
      return;
    }
    if (currentPosition === recommendedTracks.length - 1) {
      return;
    }
    setCurrentRecommendedTrack(recommendedTracks[currentPosition + 1]);
  };
  return (
    <div className=" bg-[#121212] h-screen overflow-y-hidden">
      <TrackRecommendation
        onScrollingDown={() => {
          changeTrackHandler("DOWN");
        }}
        onScrollingUp={() => {
          changeTrackHandler("UP");
        }}
        trackId={currentRecommendedTrack.id}
      />
    </div>
  );
};

export default Discover;
