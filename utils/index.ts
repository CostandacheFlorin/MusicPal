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
