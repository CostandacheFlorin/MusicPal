import AddToPlaylist from "@/assets/svgs/AddToPlaylist";
import FollowArtist from "@/assets/svgs/FollowArtist";
import Heart from "@/assets/svgs/Heart";
import SpotifyIcon from "@/assets/svgs/SpotifyIcon";
import UnfollowArtist from "@/assets/svgs/UnfollowArtist";
import { useTrackActions } from "@/hooks/useTrackActions";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import PlaylistsList from "../PlaylistsList";
import { useState } from "react";

type Props = {
  trackId: string;
  artistId: string;
};

const TrackActions = ({ trackId, artistId }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const {
    saveTrackMutation,
    handleRedirectToSpotify,
    unsaveTrackMutation,
    followArtistMutation,
    unfollowArtistMutation,
    mutateCreatePlaylist,
    mutateAddToPlaylist,
  } = useTrackActions({
    trackId,
    artistId,
  });
  const { savedTracks, savedPlaylists, followedArtists, isLoggedIn } =
    useRecommendationContext();

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white text-xl">
          Login to have access to more actions
        </p>
        <div className="flex gap-2">
          <Heart color="red" width="40px" height="40px" tooltipText="Like" />
          <AddToPlaylist color="#ffffff" tooltipText="Add to playlist" />

          <FollowArtist
            width="40px"
            height="40px"
            tooltipText="Follow"
            color="#ffffff"
            onClick={followArtistMutation}
          />
          <SpotifyIcon
            tooltipText="Play on spotify"
            width="40px"
            height="40px"
            onClick={handleRedirectToSpotify}
          />
        </div>
      </div>
    );
  }

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
      <AddToPlaylist
        onClick={handleOpenModal}
        color="#ffffff"
        tooltipText="Add to playlist"
      />
      <PlaylistsList
        createPlaylistHandler={mutateCreatePlaylist}
        addToPlaylistHandler={mutateAddToPlaylist}
        trackId={trackId}
        showModal={showModal}
        onCloseModal={handleCloseModal}
      />

      {followedArtists.find(
        (followedArtist) => followedArtist.id === artistId
      ) ? (
        <UnfollowArtist
          width="40px"
          height="40px"
          tooltipText="Unfollow"
          color="#ffffff"
          onClick={unfollowArtistMutation}
        />
      ) : (
        <FollowArtist
          width="40px"
          height="40px"
          tooltipText="Follow"
          color="#ffffff"
          onClick={followArtistMutation}
        />
      )}
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
