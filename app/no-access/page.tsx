import React from "react";

const NoAccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">No Access Granted</h2>
        <p className="text-gray-700 mb-6">
          You have not granted access to your Spotify account. Please authorize
          the app to access your Spotify account to continue.
        </p>
      </div>
    </div>
  );
};

export default NoAccessPage;
