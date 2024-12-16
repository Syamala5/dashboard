import React from "react";

const Header = ({ isDarkMode, toggleTheme}) => {
  return (
    <header className="bg-white dark:bg-gray-500 shadow p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Dashboard Header</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600  dark:text-gray-300"
        />
        <button onClick={toggleTheme} className="bg-blue-600 dark:bg-gray-600 text-white px-4 py-2 rounded">
          {isDarkMode ? "LightMode" : "DarkMode"}
        </button>
      </div>
    </header>
  );
};

export default Header;

