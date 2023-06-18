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

const RecommendationProvider = ({ children }: { children: ReactNode }) => {
  const [recommendationSettings, setRecommendationSettings] =
    useState<RecommendationSettingsProps>(
      getRecommendationSettingsFromLocalStorage()
    );

  console.log(recommendationSettings);

  const contextValue = useMemo(
    () => ({
      recommendationSettings,
      setRecommendationSettings,
    }),
    [recommendationSettings]
  );

  return (
    <RecommendationContext.Provider value={contextValue}>
      {children}
    </RecommendationContext.Provider>
  );
};

export default RecommendationProvider;
