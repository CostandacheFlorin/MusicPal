import React from "react";
const FailedLoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login Failed</h2>
        <p className="text-gray-700 mb-6">
          Your login attempt was unsuccessful. Click the login button again in
          order to retry!
        </p>
      </div>
    </div>
  );
};

export default FailedLoginPage;
