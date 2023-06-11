import { createContext, useContext } from "react";

interface RecommendationContextProps {
  recommendationSettings: any;
  setRecommendationSettings: React.Dispatch<React.SetStateAction<any>>;
}

const RecommendationContext = createContext<RecommendationContextProps | null>(
  null
);

export function useRecommendationContext() {
  return useContext(RecommendationContext);
}

export default RecommendationContext;
