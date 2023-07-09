import { useRecommendationContext } from "@/providers/RecommendationContext";
import { SavedItemType } from "@/providers/RecommendationProvider";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface PlaylistsListProps {
  showModal: boolean;
  onCloseModal: () => void;
  createPlaylistHandler: any;
  addToPlaylistHandler: any;
  trackId: string;
}

const PlaylistsList = ({
  showModal,
  onCloseModal,
  createPlaylistHandler,
  addToPlaylistHandler,
  trackId,
}: PlaylistsListProps) => {
  const { savedPlaylists, userToken } = useRecommendationContext();
  const [selectedPlaylist, setSelectedPlaylist] = useState<SavedItemType>();
  const [creatingPlaylist, setCreatingPlaylist] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    name: "",
    description: "",
    isPublic: false,
  });
  // Replace with your playlist data

  const handlePlaylistSelect = (playlistId: string) => {
    const foundPlaylist = savedPlaylists.find(
      (savedPlaylist) => savedPlaylist.id === playlistId
    );
    if (foundPlaylist) {
      setSelectedPlaylist(foundPlaylist);
    }
  };

  const handleCreatePlaylist = () => {
    setCreatingPlaylist(true);
  };

  const handlePlaylistChange = (e: any) => {
    setNewPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSavePlaylist = () => {
    if (
      newPlaylist.description.trim() === "" ||
      newPlaylist.name.trim() === ""
    ) {
      toast.error("Please fill the form in order to create a playlist!");
      return;
    }
    createPlaylistHandler({ ...newPlaylist, userId: userToken });
    setNewPlaylist({ name: "", description: "", isPublic: false });
    setCreatingPlaylist(false);
  };

  const handleCloseForm = () => {
    setNewPlaylist({ name: "", description: "", isPublic: false });
    setCreatingPlaylist(false);
  };

  const handleAddToPlaylist = () => {
    if (selectedPlaylist) {
      addToPlaylistHandler({
        trackId,
        userId: userToken,
        playlistId: selectedPlaylist.id,
      });
      onCloseModal(); // Close the modal after adding to playlist
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-[70%] min-w-[300px]">
            {!creatingPlaylist ? (
              <>
                <h2 className="text-xl font-bold mb-4">Choose a playlist</h2>
                <ul className="mb-4">
                  {savedPlaylists.map((playlist) => (
                    <li
                      key={playlist.id}
                      className={`cursor-pointer hover:text-tertiary p-2 text-xl ${
                        playlist.id === selectedPlaylist?.id
                          ? "bg-slate-200"
                          : ""
                      } `}
                      onClick={() => handlePlaylistSelect(playlist.id)}
                    >
                      {playlist.name}
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-tertiary text-bold text-white px-4 py-2 rounded mr-4"
                  onClick={handleCreatePlaylist}
                >
                  Create Playlist
                </button>
                {!selectedPlaylist ? (
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-4"
                    onClick={onCloseModal}
                  >
                    Close
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">
                  Create a new playlist
                </h2>
                <div>
                  <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={newPlaylist.name}
                      onChange={handlePlaylistChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Description:</label>
                    <input
                      type="text"
                      name="description"
                      value={newPlaylist.description}
                      onChange={handlePlaylistChange}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">
                      <input
                        type="checkbox"
                        name="isPublic"
                        checked={newPlaylist.isPublic}
                        onChange={handlePlaylistChange}
                      />
                      <span className="ml-2">Is Public</span>
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={handleSavePlaylist}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                      onClick={handleCloseForm}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            )}
            {selectedPlaylist && !creatingPlaylist && (
              <div>
                <p className="mb-2 py-4  text-xl">
                  Selected Playlist:{" "}
                  <span className="font-bold">{selectedPlaylist.name}</span>
                </p>
                <button
                  className="bg-tertiary text-white px-4 py-2 rounded mr-4"
                  onClick={handleAddToPlaylist}
                >
                  Add to Playlist
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-4"
                  onClick={onCloseModal}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistsList;
