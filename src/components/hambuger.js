import React from "react";
import { FiMenu } from "react-icons/fi";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button
      className="flex items-center justify-center h-12 w-12 bg-gray-800 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <FiMenu className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
      <svg
        className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
