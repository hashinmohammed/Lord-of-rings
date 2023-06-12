import React, { useEffect } from "react";

const DataTable = ({ currentCharacters, indexOfFirstCharacter, openModal }) => {
  return (
    <div className="w-full h-[520px] overflow-y-auto">
      <table className="w-full h-full border-collapse table-auto ">
        <thead>
          <tr>
            <th className="bg-[#FFC50D] text-white py-2 px-4">ID</th>

            <th className="bg-[#FFC50D] text-white py-2 px-4">Name</th>
            <th className="bg-[#FFC50D] text-white py-2 px-4">Race</th>
            <th className="bg-[#FFC50D] text-white py-2 px-4">Gender</th>
            <th className="bg-[#FFC50D] text-white py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCharacters?.map((character, index) => (
            <tr key={character._id}>
              <td className="border px-4 py-2 text-[#EC4798]">
                {indexOfFirstCharacter + index + 1}
              </td>
              <td className="border px-4 py-2 text-[#EC4798]">
                {character.name}
              </td>
              <td className="border px-4 py-2 text-[#EC4798]">
                {character.race}
              </td>
              <td className="border px-4 py-2 text-[#EC4798]">
                {character.gender}
              </td>
              <td className="border px-4 py-2 text-[#EC4798]">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => openModal(character)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
