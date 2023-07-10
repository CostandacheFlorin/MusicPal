import Link from "next/link";

const NoMusicRecommendations = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          No Music Recommendations
        </h2>
        <p className="text-gray-700 mb-6">
          You currently have no music recommendations. To get started, please
          set up your music recommendation settings.
        </p>
        <Link href="/settings">
          <button className="bg-tertiary  text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            Set Up Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoMusicRecommendations;
