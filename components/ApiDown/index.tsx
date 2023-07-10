const ApiDown = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.7", // Semi-transparent background
        zIndex: 9999, // Adjust the z-index value as needed
      }}
    >
      <div className=" rounded p-4 bg-gray-100">
        <span className="text-3xl font-bold text-tertiary">
          The API seems to be down.. please wait for it to restart!
        </span>
        {/* Customize the spinner text */}
        {/* Add your spinner component or CSS animation here */}
      </div>
    </div>
  );
};

export default ApiDown;
