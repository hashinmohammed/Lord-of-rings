import React from "react";

const CharacterLimitSelect = ({ setCharactersPerPage }) => {
  const options = [
    { value: "", label: "Limit the Character" },
    { value: "10", label: "10" },
    { value: "30", label: "30" },
    { value: "50", label: "50" },
  ];

  const handleChange = (e) => {
    setCharactersPerPage(e.target.value);
  };

  return (
    <div className="flex justify-end pt-5">
      <select
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
        name="limit"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CharacterLimitSelect;
