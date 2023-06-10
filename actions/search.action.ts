import { getArtist, getTrack } from "./fetchers/searchClient";

export const getTrackInfo = async (trackName: string, artistName: string) => {
  const trackInfo = await getTrack(trackName, artistName);
  // should do error handling
  return trackInfo.data;
};

export const getArtistInfo = async (artistName: string) => {
  const artistInfo = await getArtist(artistName);
  return artistInfo.data;
};
