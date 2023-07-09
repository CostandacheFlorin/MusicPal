import AddToPlaylist from "@/assets/svgs/AddToPlaylist";
import FollowArtist from "@/assets/svgs/FollowArtist";
import Heart from "@/assets/svgs/Heart";
import SpotifyIcon from "@/assets/svgs/SpotifyIcon";
import { useTrackActions } from "@/hooks/useTrackActions";
import { useRecommendationContext } from "@/providers/RecommendationContext";

type Props = {
  trackId: string;
};

const TrackActions = ({ trackId }: Props) => {
  const { saveTrackMutation, handleRedirectToSpotify, unsaveTrackMutation } =
    useTrackActions({
      trackId,
    });
  const { savedTracks, savedPlaylists, followedArtists, isLoggedIn } =
    useRecommendationContext();

  if (!isLoggedIn) {
    return (
      <p className="text-white text-xl">Login to have access to more actions</p>
    );
  }
  return (
    <div className="flex gap-2">
      {savedTracks.find((savedTrack) => savedTrack.id === trackId) ? (
        <Heart
          onClick={unsaveTrackMutation}
          color="red"
          width="40px"
          height="40px"
          tooltipText="Unlike"
        />
      ) : (
        <Heart
          onClick={saveTrackMutation}
          color="gray"
          width="40px"
          height="40px"
          tooltipText="Like"
        />
      )}
      <AddToPlaylist color="#ffffff" tooltipText="Add to playlist" />
      <FollowArtist
        width="40px"
        height="40px"
        tooltipText="Follow"
        color="#ffffff"
      />
      <SpotifyIcon
        tooltipText="Play on spotify"
        width="40px"
        height="40px"
        onClick={handleRedirectToSpotify}
      />
    </div>
  );
};

export default TrackActions;
