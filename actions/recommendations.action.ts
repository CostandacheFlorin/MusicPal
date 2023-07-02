import { getRecommendations } from "./fetchers/recommendationsClient";

export const getTracksRecommendations = async (
  tracks: string[],
  artists: string[],
  genres: string[],
  popularity: string
) => {
  console.log("tracks", tracks);
  const recommendedTracks = await getRecommendations(
    tracks,
    artists,
    genres,
    popularity
  );
  return recommendedTracks.data;
};
