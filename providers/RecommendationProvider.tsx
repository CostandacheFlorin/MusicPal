"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";

import RecommendationContext from "./RecommendationContext";
import { BasicTrack, BasicArtist } from "@/hooks/useRecommendationsConfig";
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
export const getRecommendationSettingsFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const savedRecommendationSettings = localStorage.getItem(
    "recommendationSettings"
  );
  if (savedRecommendationSettings) {
    return JSON.parse(savedRecommendationSettings);
  } else {
    return {
      tracks: [],
      artists: [],
      genres: [],
      popularity: "high",
    };
  }
};

export const getRecommendedTracksFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const savedRecommendedTracks = localStorage.getItem("recommendedTracks");
  if (savedRecommendedTracks) {
    return JSON.parse(savedRecommendedTracks);
  } else {
    return [];
  }
};

export const getCurrentRecommendedTrackFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const savedRecommendedTrack = localStorage.getItem("currentRecommendedTrack");
  if (savedRecommendedTrack) {
    return JSON.parse(savedRecommendedTrack);
  } else {
    return null;
  }
};

const RecommendationProvider = ({ children }: { children: ReactNode }) => {
  const [recommendationSettings, setRecommendationSettings] =
    useState<RecommendationSettingsProps>(
      getRecommendationSettingsFromLocalStorage()
    );
  const [recommendedTracks, setRecommendedTracks] = useState<
    RecommendedTrackItem[]
  >(getRecommendedTracksFromLocalStorage());
  const [currentRecommendedTrack, setCurrentRecommendedTrack] =
    useState<RecommendedTrackItem | null>(
      getCurrentRecommendedTrackFromLocalStorage()
    );

  console.log("recommendationSettings", recommendationSettings);
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
