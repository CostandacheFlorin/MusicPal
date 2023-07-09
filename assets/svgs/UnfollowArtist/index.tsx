import React, { useState } from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
  tooltipText?: string;
}

const Heart: React.FC<Props> = ({
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
        className={className}
        onClick={onClick}
        viewBox="0 0 512 512"
        fill={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path
          fill={color}
          d="M216,16A112.127,112.127,0,0,0,104,128v79.68a80.239,80.239,0,0,0,9.768,38.308l27.455,50.334L68.4,343.656A79.727,79.727,0,0,0,32,410.732V496H312V464H64V410.732a47.838,47.838,0,0,1,21.84-40.246L183.5,307.007l-41.64-76.341A48.149,48.149,0,0,1,136,207.68V128a80,80,0,0,1,160,0v79.68a48.143,48.143,0,0,1-5.861,22.985L248.5,307.007,312,348.283V310.117l-21.223-13.8,27.454-50.334A80.226,80.226,0,0,0,328,207.68V128A112.127,112.127,0,0,0,216,16Z"
          className="ci-primary"
        />
        <polygon
          fill={color}
          points="483.314 355.314 460.686 332.686 412 381.372 363.314 332.686 340.686 355.314 389.372 404 340.686 452.686 363.314 475.314 412 426.628 460.686 475.314 483.314 452.686 434.628 404 483.314 355.314"
          className="ci-primary"
        />
      </svg>
      {isHovered && (
        <div className="absolute  bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-left px-2 py-1 rounded opacity-0 transition-opacity duration-300">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Heart;
