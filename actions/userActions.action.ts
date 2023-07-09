import {
  deleteUnfollowArtist,
  deleteUnsaveTrack,
  getFollowedArtistsForUser,
  getPlaylistsForUser,
  getSavedTracksForUser,
  postCreatePlaylist,
  putFollowArtist,
  putSaveInPlaylist,
  putSaveTrack,
} from "./fetchers/userActionsClient";

export const saveTrack = async (trackId: string, userId: string) => {
  const trackResponse = await putSaveTrack(trackId, userId);
  return trackResponse.data;
};

export const unsaveTrack = async (trackId: string, userId: string) => {
  const trackResponse = await deleteUnsaveTrack(trackId, userId);
  return trackResponse.data;
};

export const followArtist = async (artistId: string, userId: string) => {
  const artistResponse = await putFollowArtist(artistId, userId);
  return artistResponse.data;
};

export const unfollowArtist = async (artistId: string, userId: string) => {
  const artistResponse = await deleteUnfollowArtist(artistId, userId);
  return artistResponse.data;
};

export const createPlaylist = async ({
  userId,
  name,
  description,
  isPublic,
}: {
  userId: string;
  name: string;
  description: string;
  isPublic: boolean;
}) => {
  const playlistResponse = await postCreatePlaylist({
    userId,
    name,
    description,
    isPublic,
  });
  return playlistResponse.data;
};

export const saveInPlaylist = async ({
  trackId,
  userId,
  playlistId,
}: {
  trackId: string;
  userId: string;
  playlistId: string;
}) => {
  const playlistResponse = await putSaveInPlaylist({
    trackId,
    userId,
    playlistId,
  });
  return playlistResponse.data;
};

export const getSavedTracks = async (userId: string) => {
  const savedTracks = await getSavedTracksForUser(userId);
  return savedTracks.data;
};

export const getFollowedArtists = async (userId: string) => {
  const followedArtists = await getFollowedArtistsForUser(userId);
  return followedArtists.data;
};
export const getPlaylists = async (userId: string) => {
  const playlists = await getPlaylistsForUser(userId);
  return playlists.data;
};
