import React, { useState } from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
  tooltipText?: string;
}

const FollowArtist: React.FC<Props> = ({
  onClick,
  width = "50px",
  height = "50px",
  className,
  color = "#000000",
  tooltipText,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="relative inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 512 512"
        className={className}
        fill={color}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path
          fill={color}
          d="M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z"
          className="ci-primary"
        />
        <polygon
          fill={color}
          points="424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400"
          className="ci-primary"
        />
      </svg>
      {isHovered && (
        <div className="absolute text-left bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-left px-2 py-1 rounded opacity-0 transition-opacity duration-300">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default FollowArtist;
