import React, { useState } from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
  tooltipText?: string;
}

const AddToPlaylist: React.FC<Props> = ({
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
        onClick={onClick}
        className={className}
        viewBox="0 0 512 512"
        fill={color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <rect
          width="208"
          height="32"
          x="256"
          y="152"
          fill={color}
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="176"
          y="256"
          fill={color}
          className="ci-primary"
        />
        <rect
          width="288"
          height="32"
          x="176"
          y="360"
          fill={color}
          className="ci-primary"
        />
        <polygon
          fill={color}
          points="192 152 128 152 128 88 96 88 96 152 32 152 32 184 96 184 96 248 128 248 128 184 192 184 192 152"
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

export default AddToPlaylist;
