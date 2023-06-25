import { BasicArtist, BasicTrack } from "@/hooks/useRecommendationsConfig";
import axios from "axios";

export const getRecommendations = (
  tracks: string[],
  artists: string[],
  genres: string[],
  popularity: string
) => {
  const params = new URLSearchParams();

  if (tracks?.length > 0) {
    params.append("tracks", tracks.join(","));
  }
  if (genres?.length > 0) {
    params.append("genres", genres.join(","));
  }
  if (artists?.length > 0) {
    params.append("artists", artists.join(","));
  }
  params.append("popularity", popularity);

  const RECOMMENDATION_URL = `http://localhost:5000/recommendations/?${params.toString()}`;

  return axios.get(RECOMMENDATION_URL);
};
