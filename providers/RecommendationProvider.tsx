"use client";
import { ReactNode, useMemo, useState } from "react";

import RecommendationContext from "./RecommendationContext";

const RecommendationProvider = ({ children }: { children: ReactNode }) => {
  const [recommendationSettings, setRecommendationSettings] = useState({
    test: "asd",
  });

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
