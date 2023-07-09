import React, { useState } from "react";

interface Props {
  onClick?: any;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
  tooltipText?: string;
}

const RemoveFromplaylist: React.FC<Props> = ({
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
        fill={color}
        height={height}
        width={width}
        className={className}
        onClick={onClick}
        version="1.1"
        id="Capa_1"
        viewBox="0 0 433.35 433.35"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <g>
          <path d="M384.176,205.335l5.553-37.477c1.072-7.238-1.06-14.585-5.84-20.126c-4.478-5.191-10.868-8.314-17.674-8.686V86.574   c0-25.562-20.798-46.359-46.361-46.359h-75.279c-25.051,0-38.35,10.578-48.061,18.303c-7.807,6.208-12.519,9.955-22.626,9.955H65.1   c-22.781,0-41.315,18.063-41.315,40.264v30.311c-6.806,0.371-13.195,3.494-17.674,8.686c-4.779,5.541-6.912,12.888-5.84,20.125   L30.467,371.66c1.827,12.338,12.417,21.475,24.89,21.475h274.577h4.709c0.012,0,0.023-0.002,0.036-0.002   c54.63-1.299,98.671-46.142,98.671-101.078C433.35,255.279,413.612,223.03,384.176,205.335z M54.08,139.008v-30.271   c0-6.239,5.603-9.968,11.02-9.968h108.787c20.688,0,32.219-9.173,41.484-16.542c8.552-6.803,14.732-11.717,29.203-11.717h75.279   c8.857,0,16.066,7.206,16.066,16.064v52.434H54.08z M331.881,368.893c-42.034,0-76.109-34.075-76.109-76.109   c0-42.033,34.075-76.109,76.109-76.109c42.034,0,76.108,34.076,76.108,76.109C407.989,334.817,373.915,368.893,331.881,368.893z" />
          <path d="M376.958,277.685h-89.096c-2.762-0.001-5,2.237-4.999,4.999v22.001c-0.001,1.38,0.56,2.631,1.464,3.535   s2.155,1.465,3.535,1.464h89.096c2.762,0.001,5-2.238,5-4.999v-22.001C381.959,279.923,379.719,277.683,376.958,277.685z" />
        </g>
      </svg>
      {isHovered && (
        <div className="absolute  bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-left px-2 py-1 rounded opacity-0 transition-opacity duration-300">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default RemoveFromplaylist;
