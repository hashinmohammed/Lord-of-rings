import React, { useState, useEffect } from "react";
import CharacterModal from "./CharacterModal";
import Pagination from "./Pagination";
import LimitCharacter from "./LimitCharacter";
import DataTable from "./DataTable";
import { mainPicUrl } from "../utils/utils";

const CharacterList = ({
  setCharactersPerPage,
  charactersPerPage,
  currentPage,
  setCurrentPage,
  totalCharactersInDb,
  filteredCharacters,
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col mt-8 sm:flex-row ">
        <img
          className="w-full sm:w-1/4 mb-4 sm:mb-0 sm:mr-4 h-auto "
          src={mainPicUrl}
          alt="picture"
        />
        <DataTable
          currentCharacters={filteredCharacters}
          indexOfFirstCharacter={indexOfFirstCharacter}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div
        style={{
          flexDirection: "row",
        }}
      >
        <LimitCharacter setCharactersPerPage={setCharactersPerPage} />

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalCharactersInDb / charactersPerPage)}
          onPreviousPage={() => paginate(currentPage - 1)}
          onNextPage={() => paginate(currentPage + 1)}
          charactersPerPage={charactersPerPage}
          totalCharacters={totalCharactersInDb}
        />
      </div>

      {isModalOpen && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default CharacterList;
