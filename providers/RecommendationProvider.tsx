"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";

import RecommendationContext from "./RecommendationContext";
import { BasicTrack, BasicArtist } from "@/hooks/useRecommendationsConfig";
import { getRecommendationSettingsFromLocalStorage } from "@/utils";
export interface RecommendationSettingsProps {
  tracks: BasicTrack[];
  artists: BasicArtist[];
  genres: string[];
  popularity: string;
}
export interface RecommendedTrackItem {
  id: string;
  name: string;
  release_date: string;
  image: string;
  artists: string;
}

const RecommendationProvider = ({ children }: { children: ReactNode }) => {
  const [recommendationSettings, setRecommendationSettings] =
    useState<RecommendationSettingsProps>(
      getRecommendationSettingsFromLocalStorage()
    );
  const [recommendedTracks, setRecommendedTracks] = useState<
    RecommendedTrackItem[]
  >([]);
  const [currentRecommendedTrack, setCurrentRecommendedTrack] =
    useState<RecommendedTrackItem | null>(null);

  console.log(recommendationSettings);
  console.log(recommendedTracks);
  console.log(currentRecommendedTrack);
  const contextValue = useMemo(
    () => ({
      recommendationSettings,
      setRecommendationSettings,
      recommendedTracks,
      setRecommendedTracks,
      currentRecommendedTrack,
      setCurrentRecommendedTrack,
    }),
    [recommendationSettings, recommendedTracks, currentRecommendedTrack]
  );

  return (
    <RecommendationContext.Provider value={contextValue}>
      {children}
    </RecommendationContext.Provider>
  );
};

export default RecommendationProvider;
