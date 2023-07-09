import axios from "axios";

export const getTrack = (trackName: string, artistName: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/track/?track=${trackName}&artist=${artistName}`
  );
};
export const getArtist = (artistName: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/artist/by-name/${artistName}`
  );
};
