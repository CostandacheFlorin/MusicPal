"use client";

import TrackRecommendation from "@/components/TrackRecommendation";

const Discover = () => {
  return (
    <div className=" bg-[#121212] h-[880px]">
      <TrackRecommendation
        onScrollingDown={() => {
          console.log("Down");
        }}
        onScrollingUp={() => {
          console.log("UP");
        }}
        trackId="4WvEYH9o0PYR2LcSmRSCMD"
      />
    </div>
  );
};

export default Discover;
