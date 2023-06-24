import React from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const DownArrow: React.FC<Props> = ({
  onClick,
  width = "50px",
  height = "50px",
  className,
  color = "#000000",
}) => {
  return (
    <svg
      onClick={onClick}
      fill={color}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M490,165.37l-91.698-88.842L245,231.766L91.698,76.528L0,165.37l245,248.102L490,165.37z M91.219,119.611L245,275.343  l153.781-155.732l47.717,46.237L245,369.91L43.502,165.848L91.219,119.611z"
      />
    </svg>
  );
};

export default DownArrow;
