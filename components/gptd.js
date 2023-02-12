import React from "react";
import { useDropdown } from "react-tailwind";

const DropdownButton = () => {
  const { getToggleButtonProps, getMenuProps, isOpen, toggle } = useDropdown();

  return (
    <div className="relative inline-block text-left">
      <span className="rounded-md shadow-sm">
        <button
          type="button"
          {...getToggleButtonProps()}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition easeInOut duration150"
        >
          Dropdown Button
        </button>
      </span>

      <div
        {...getMenuProps()}
        className={`${
          isOpen ? "block" : "hidden"
        } origin top left absolute -ml -mt z10`}
      >
        <div className="rounded shadow bgwhite">
          <ul className="listbox rounded shadow overflowhidden bgwhite">
            <li>Option 1</li>

            <li>Option 2</li>

            <li>Option 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DropdownButton;
