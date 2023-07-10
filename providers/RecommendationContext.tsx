import { createContext, useContext } from "react";
import {
  RecommendationSettingsProps,
  RecommendedTrackItem,
  SavedItemType,
} from "./RecommendationProvider";

interface RecommendationContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string;
  setUserToken: React.Dispatch<React.SetStateAction<string>>;
  recommendationSettings: RecommendationSettingsProps;
  setRecommendationSettings: React.Dispatch<
    React.SetStateAction<RecommendationSettingsProps>
  >;
  recommendedTracks: RecommendedTrackItem[];
  setRecommendedTracks: React.Dispatch<
    React.SetStateAction<RecommendedTrackItem[]>
  >;
  currentRecommendedTrack: RecommendedTrackItem | null;
  setCurrentRecommendedTrack: React.Dispatch<
    React.SetStateAction<RecommendedTrackItem | null>
  >;
  savedTracks: SavedItemType[];
  savedPlaylists: SavedItemType[];
  followedArtists: SavedItemType[];
  refetchSavedTracks: any;
  refetchFollowedArtists: any;
  refetchPlaylists: any;
  isAPIDown: boolean;
}

const RecommendationContext = createContext<RecommendationContextProps | null>(
  null
);

export function useRecommendationContext() {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error(
      "useRecommendationContext must be used within a RecommendationProvider"
    );
  }
  return context;
}

export default RecommendationContext;
