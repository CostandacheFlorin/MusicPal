import { BasicArtist, BasicTrack } from "@/hooks/useRecommendationsConfig";
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

  const RECOMMENDATION_URL = `http://localhost:5000/recommendations/?${params.toString()}`;

  return axios.get(RECOMMENDATION_URL);
};
