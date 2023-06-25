import axios from "axios";

export const getTrack = (trackName: string, artistName: string) => {
  return axios.get(
    `http://localhost:5000/search/track/?track=${trackName}&artist=${artistName}`
  );
};
export const getArtist = (artistName: string) => {
  return axios.get(`http://localhost:5000/search/artist/by-name/${artistName}`);
};