import { useState, useEffect, useRef, CSSProperties } from "react";

interface DropdownOption {
  label: string;
  value: string;
}
interface DropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: any;
  style?: CSSProperties;
  loading?: boolean;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  allowClear?: boolean;
  className?: string;
  onClear?: () => void;
}

const Dropdown = ({
  options,
  value,
  style,
  onChange,
  loading,
  placeholder,
  ariaLabel,
  disabled,
  allowClear = false,
  className,
  onClear,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showClearButton, setShowClearButton] = useState(allowClear);
  const [dropdownValue, setDropdownValue] = useState(value || "");
  const [dropdownLabel, setDropdownLabel] = useState(
    options.find((item) => item.value === value)?.label || ""
  );

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // @ts-ignore
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dropdownLabel.trim() !== "") {
      setShowClearButton(true);
    }
  }, [dropdownLabel]);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleButtonClick = () => {
    setSearchText("");
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption) => {
    onChange(option.value);
    setDropdownValue(option.value);
    setDropdownLabel(option.label);

    setSearchText("");
    setIsOpen(false);
  };

  const handleSearch = (e: any) => {
    setDropdownLabel(e.target.value);
    setSearchText(e.target.value);
  };

  const clearSelectHandler = () => {
    setDropdownValue("");
    setDropdownLabel("");
    setShowClearButton(false);
    onClear?.();
  };

  if (loading) {
    return <div>Loading dropdown...</div>;
  }

  if (disabled) {
    return (
      <div
        aria-label={ariaLabel && ariaLabel}
        style={style}
        className={`relative ${className}`}
      >
        <button
          className="bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-4 flex items-center justify-between w-full text-gray-500"
          disabled
        >
          <input
            type="text"
            className="  outline-0	  block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            placeholder={placeholder}
            value={dropdownLabel}
            onChange={handleSearch}
            disabled
          />
          <svg
            className="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 14.293l-5.146-5.147a.5.5 0 01.708-.708L10 12.586l4.439-4.439a.5.5 0 11.708.708l-5.146 5.147a.5.5 0 01-.708 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div
      aria-label={ariaLabel && ariaLabel}
      style={style}
      ref={dropdownRef}
      className={`relative ${className}`}
    >
      <button
        className="bg-inputBg border border-gray-300 rounded-md shadow-sm py-2 px-4 flex items-center justify-between w-full text-gray-700"
        onClick={handleButtonClick}
      >
        <input
          type="text"
          className=" bg-inputBg text-white  outline-0	  block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
          placeholder={placeholder}
          value={dropdownLabel}
          onChange={handleSearch}
        />
        {showClearButton ? (
          <svg
            onClick={clearSelectHandler}
            className="h-4 w-4 text-white z-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            strokeWidth="3"
          >
            <path d="M 10,10 L 90,90 M 10,90 L 90,10" stroke="white" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 14.293l-5.146-5.147a.5.5 0 01.708-.708L10 12.586l4.439-4.439a.5.5 0 11.708.708l-5.146 5.147a.5.5 0 01-.708 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white  rounded-md shadow-lg   w-full">
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className=" bg-inputBg text-textPrimary cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-2 text-slate-500">No options left.</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
