import {
  createPlaylist,
  followArtist,
  saveInPlaylist,
  saveTrack,
  unfollowArtist,
  unsaveTrack,
} from "@/actions/userActions.action";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

type TrackActionsParam = {
  trackId: string;
  artistId: string;
};
export const useTrackActions = ({ trackId, artistId }: TrackActionsParam) => {
  const userId = localStorage.getItem("userData") || "";
  const { refetchSavedTracks, refetchFollowedArtists, refetchPlaylists } =
    useRecommendationContext();
  const { mutate: saveTrackMutation } = useMutation(
    "saveTrack",
    async () => await saveTrack(trackId, userId),
    {
      onSuccess: () => {
        toast.success("Added to the like songs!");

        refetchSavedTracks();
      },
    }
  );

  const { mutate: unsaveTrackMutation } = useMutation(
    "unsaveTrack",
    async () => await unsaveTrack(trackId, userId),
    {
      onSuccess: () => {
        toast.success("Removed this track from the liked songs!");

        refetchSavedTracks();
      },
    }
  );

  const { mutate: followArtistMutation } = useMutation(
    "followArtist",
    async () => await followArtist(artistId, userId),
    {
      onSuccess: () => {
        toast.success("Started following this artist!");
        refetchFollowedArtists();
      },
    }
  );

  const { mutate: unfollowArtistMutation } = useMutation(
    "unfollowArtist",
    async () => await unfollowArtist(artistId, userId),
    {
      onSuccess: () => {
        toast.success("Stopped following this artist!");

        refetchFollowedArtists();
      },
    }
  );
  const { mutate: mutateCreatePlaylist } = useMutation(createPlaylist, {
    onSuccess: () => {
      toast.success("Created a new playlist!");
      refetchPlaylists();
    },
    onError: () => {
      toast.error("Failed creating a new playlist!");
    },
  });

  const { mutate: mutateAddToPlaylist } = useMutation(saveInPlaylist, {
    onSuccess: () => {
      toast.success("Added the song to the playlist!");
      refetchPlaylists();
    },
    onError: () => {
      toast.error("Failed adding the song to the playlist!");
    },
  });
  const handleRedirectToSpotify = () => {
    const url = `https://open.spotify.com/track/${trackId}?go=1&sp_cid=${trackId}&utm_source=embed_player_v&utm_medium=desktop`; // Replace with your desired URL
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return {
    handleRedirectToSpotify,
    saveTrackMutation,
    unsaveTrackMutation,
    followArtistMutation,
    unfollowArtistMutation,
    mutateCreatePlaylist,
    mutateAddToPlaylist,
  };
};
