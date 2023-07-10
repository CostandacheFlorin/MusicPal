import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-tertiary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-semibold">Music Pal</h1>
          <p className="text-white mt-2">Discover your perfect music.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold">
              Music Recommendations Made Easy
            </h2>
            <p className="text-gray-700 mt-4">
              Music Pal is an intuitive app that tailors music recommendations
              specifically to your preferences. Whether you are in the mood for
              relaxing melodies or energetic beats, Music Pal has you covered.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/musicpal-logo.png"
              alt="Music Pal App"
              className="w-80 mx-auto md:mx-0 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    Customizable Settings
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Adjust your preferences to receive music recommendations
                    tailored to your tastes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    Smart Recommendations
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Get personalized music recommendations based on your
                    selected preferences.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    There is no need to login!
                  </h4>
                  <p className="text-gray-700 mt-2">
                    You can use the app without logging in with your spotify
                    account!
                  </p>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">
                    Integration with spotify!
                  </h4>
                  <p className="text-gray-700 mt-2">
                    Save tracks, add them to your playlists or follow artists
                    directly through our app!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
