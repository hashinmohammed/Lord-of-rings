import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

const HeaderComponent = ({
  onSearch,
  nameSort,
  setNameSort,
  selectedGender,
  setSelectedGender,
  handleRaceSelect,
  searchFilter,
}) => {
  // ===================================

  const handleSortName = (value) => {
    console.log("sort", value);
    setNameSort(value);
  };

  const handleSearch = (value) => {
    onSearch(value);
  };
  // ================================
  const genderOptions = [
    { value: "any", label: "Gender" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const sortOptions = [
    { value: "", label: "Sort by name" },
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  return (
    <div className="container mx-auto mt-10">
      <header className="p-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-opacity-90 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-10">
        <h1 className="text-4xl font-bold text-white">
          <span className="bg-pink-400 p-2 rounded-tl-3xl rounded-br-3xl">
            Character
          </span>{" "}
          <span className="bg-purple-400 p-2 rounded-tr-3xl rounded-bl-3xl">
            Search
          </span>{" "}
        </h1>
      </header>
      <div className="mt-32">
        <form className="flex flex-wrap justify-end">
          <div className="flex items-center mb-4">
            {/* Search by Name */}
            <input
              type="text"
              placeholder="Search by name"
              className="p-4 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-red-500"
              value={searchFilter}
              onChange={(event) => {
                // setSearchValue(event.target.value);
                handleSearch(event.target.value); // Trigger search on input change
              }}
            />
            {/* Sort by Name */}
            <select
              className="p-4 mx-4 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              value={nameSort}
              onChange={(event) => {
                // setNameSort(event.target.value);
                handleSortName(event.target.value);
              }}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Sort by Race */}
            <MultiSelect handle={handleRaceSelect} />

            {/* Sort by Gender */}
            <select
              className="p-4 ml-4 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-red-500"
              value={selectedGender}
              onChange={(event) => setSelectedGender(event.target.value)}
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-red-500 text-white py-4 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeaderComponent;
