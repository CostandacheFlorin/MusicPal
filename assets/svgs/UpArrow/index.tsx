import React from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const UpArrow: React.FC<Props> = ({
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
        d="M245,258.23l153.302,155.246L490,324.619L245,76.524L0,324.619l91.697,88.857L245,258.23z M43.502,324.14L245,120.101  l201.498,204.04l-47.717,46.252L245,214.653L91.219,370.393L43.502,324.14z"
      />
    </svg>
  );
};

export default UpArrow;
