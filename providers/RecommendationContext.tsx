import { createContext, useContext } from "react";
import { RecommendationSettingsProps } from "./RecommendationProvider";

interface RecommendationContextProps {
  recommendationSettings: RecommendationSettingsProps;
  setRecommendationSettings: React.Dispatch<
    React.SetStateAction<RecommendationSettingsProps>
  >;
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
