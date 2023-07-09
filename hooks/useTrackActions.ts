import { saveTrack, unsaveTrack } from "@/actions/userActions.action";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import { useMutation } from "react-query";

type TrackActionsParam = {
  trackId: string;
};
export const useTrackActions = ({ trackId }: TrackActionsParam) => {
  const userId = localStorage.getItem("userData") || "";
  const { refetchSavedTracks, refetchFollowedArtists, refetchPlaylists } =
    useRecommendationContext();
  const { mutate: saveTrackMutation } = useMutation(
    "saveTrack",
    async () => await saveTrack(trackId, userId),
    {
      onSuccess: () => {
        refetchSavedTracks();
      },
    }
  );

  const { mutate: unsaveTrackMutation } = useMutation(
    "unsaveTrack",
    async () => await unsaveTrack(trackId, userId),
    {
      onSuccess: () => {
        refetchSavedTracks();
      },
    }
  );
  const handleRedirectToSpotify = () => {
    const url = `https://open.spotify.com/track/${trackId}?go=1&sp_cid=${trackId}&utm_source=embed_player_v&utm_medium=desktop`; // Replace with your desired URL
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return { handleRedirectToSpotify, saveTrackMutation, unsaveTrackMutation };
};
