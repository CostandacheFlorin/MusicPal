import axios from "axios";

export const putSaveTrack = (trackId: string, userId: string) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/save-track`,
    {
      trackId,
    },
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};
export const deleteUnsaveTrack = (trackId: string, userId: string) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/unsave-track`,
    {
      data: {
        trackId,
      },
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const putFollowArtist = (artistId: string, userId: string) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/follow-artist`,
    {
      artistId,
    },
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const deleteUnfollowArtist = (artistId: string, userId: string) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/unfollow-artist`,
    {
      data: {
        artistId,
      },
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const postCreatePlaylist = ({
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
  return axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/create-playlist`,
    {
      data: {
        name,
        description,
        isPublic,
      },
    },
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const putSaveInPlaylist = ({
  trackId,
  userId,
  playlistId,
}: {
  trackId: string;
  userId: string;
  playlistId: string;
}) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/save-in-playlist`,
    {
      data: {
        trackId,
        playlistId,
      },
    },
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const getSavedTracksForUser = (userId: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/get-saved-tracks`,
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const getFollowedArtistsForUser = (userId: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/get-followed-artists`,
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};

export const getPlaylistsForUser = (userId: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-actions/get-playlists`,
    {
      headers: {
        Authorization: userId,
      },
    }
  );
};
