import { getTrack } from "./fetchers/tracksClient";

export const getTrackInfo = async (trackName: string, artistName: string) => {
  const trackInfo = await getTrack(trackName, artistName);
  // should do error handling
  return trackInfo.data;
};
