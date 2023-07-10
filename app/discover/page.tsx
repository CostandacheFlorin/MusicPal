"use client";

import NoMusicRecommendations from "@/components/NoMusicRecommendations";
import TrackRecommendation from "@/components/TrackRecommendation";
import { useRecommendationsConfig } from "@/hooks/useRecommendationsConfig";
import { useRecommendationContext } from "@/providers/RecommendationContext";

const NUMBER_OF_SONGS_LEFT = 3;

const Discover = () => {
  const {
    currentRecommendedTrack,
    setCurrentRecommendedTrack,
    recommendedTracks,
  } = useRecommendationContext();
  const { refetchRecommendedTracks } = useRecommendationsConfig();

  if (!currentRecommendedTrack?.id) {
    return <NoMusicRecommendations />;
  }

  const changeTrackHandler = (direction: string) => {
    const currentPosition = recommendedTracks.findIndex(
      (recommendedTrackItem) =>
        recommendedTrackItem.id === currentRecommendedTrack.id
    );

    if (direction === "UP") {
      if (currentPosition === 0) {
        return;
      }
      setCurrentRecommendedTrack(recommendedTracks[currentPosition - 1]);
      localStorage.setItem(
        "currentRecommendedTrack",
        JSON.stringify(recommendedTracks[currentPosition - 1])
      );
      return;
    }
    if (currentPosition === recommendedTracks.length - 1) {
      return;
    }
    if (currentPosition === recommendedTracks.length - NUMBER_OF_SONGS_LEFT) {
      refetchRecommendedTracks();
    }
    localStorage.setItem(
      "currentRecommendedTrack",
      JSON.stringify(recommendedTracks[currentPosition + 1])
    );
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
        artistId={currentRecommendedTrack.artistId}
      />
    </div>
  );
};

export default Discover;
