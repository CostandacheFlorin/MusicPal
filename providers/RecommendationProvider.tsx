"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";

import RecommendationContext from "./RecommendationContext";
import { BasicTrack, BasicArtist } from "@/hooks/useRecommendationsConfig";
import { useQuery } from "react-query";
import {
  getFollowedArtists,
  getPlaylists,
  getSavedTracks,
} from "@/actions/userActions.action";
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

export interface SavedItemType {
  id: string;
  name: string;
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState("");
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

  const [savedTracks, setSavedTracks] = useState([]);
  const [savedPlaylists, setSavedPlaylists] = useState([]);
  const [followedArtists, setFollowedArtists] = useState([]);

  console.log("recommendationSettings", recommendationSettings);
  console.log("loggedIn", isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsLoggedIn(true);
      const token = localStorage.getItem("userData")?.toString();
      if (token) {
        setUserToken(token);
        refetchSavedTracks;
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      refetchFollowedArtists();
      refetchPlaylists();
      refetchSavedTracks();
    }
  }, [isLoggedIn]);
  console.log(userToken);
  console.log(savedTracks);
  console.log(savedPlaylists);
  console.log(followedArtists);
  const { refetch: refetchSavedTracks } = useQuery(
    "getSavedTracks",
    async () =>
      await getSavedTracks(localStorage.getItem("userData")?.toString() || ""),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (tracks) => {
        setSavedTracks(tracks);
      },
    }
  );

  const { refetch: refetchFollowedArtists } = useQuery(
    "getFollowedArtists",
    async () =>
      await getFollowedArtists(
        localStorage.getItem("userData")?.toString() || ""
      ),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (artists) => {
        setFollowedArtists(artists);
      },
    }
  );

  const { refetch: refetchPlaylists } = useQuery(
    "getPlaylists",
    async () =>
      await getPlaylists(localStorage.getItem("userData")?.toString() || ""),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      retry: false,
      onSuccess: (playlists) => {
        setSavedPlaylists(playlists);
      },
    }
  );

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      userToken,
      setUserToken,
      recommendationSettings,
      setRecommendationSettings,
      recommendedTracks,
      setRecommendedTracks,
      currentRecommendedTrack,
      setCurrentRecommendedTrack,
      savedTracks,
      savedPlaylists,
      followedArtists,
      refetchSavedTracks,
      refetchFollowedArtists,
      refetchPlaylists,
    }),
    [
      recommendationSettings,
      recommendedTracks,
      currentRecommendedTrack,
      isLoggedIn,
      userToken,
      savedTracks,
      savedPlaylists,
      followedArtists,
    ]
  );

  return (
    <RecommendationContext.Provider value={contextValue}>
      {children}
    </RecommendationContext.Provider>
  );
};

export default RecommendationProvider;
