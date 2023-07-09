import axios from "axios";

export const getRecommendations = (
  tracks: string[],
  artists: string[],
  genres: string[],
  popularity: string
) => {
  const params = new URLSearchParams();

  tracks.forEach((track) => {
    params.append("tracks", track);
  });

  genres.forEach((genre) => {
    params.append("genres", genre);
  });

  artists.forEach((artist) => {
    params.append("artists", artist);
  });
  params.append("popularity", popularity);

  const RECOMMENDATION_URL = `${
    process.env.NEXT_PUBLIC_BACKEND_URL
  }/recommendations/?${params.toString()}`;

  return axios.get(RECOMMENDATION_URL);
};
