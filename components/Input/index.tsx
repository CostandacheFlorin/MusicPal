"use client";

import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: string) => void;
  required?: boolean;
  label?: string;
  labelPosition?: "center" | "left" | "right" | "start" | "end" | "justify";
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  labelPosition,
  value,
  onChange,
  required,
  label,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className={`block mb-2 text-textPrimary pl-3 ${
            labelPosition && `text-${labelPosition}`
          }`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className="bg-[#3c3f43] text-textPrimary	 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        required={required}
        id={label}
      />
    </div>
  );
};

export default Input;
