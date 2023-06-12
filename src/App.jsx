import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import CharacterList from "./components/CharacterList";
import { useState, useEffect } from "react";
import axios from "axios";
import { ENV } from "./utils/Constants";
import { END_POINTS } from "./utils/EndPoints";

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [nameSort, setNameSort] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(10);
  const [totalCharactersInDb, setTotalCharactersInDb] = useState(0);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, [selectedGender, charactersPerPage, currentPage]);

  useEffect(() => {
    let filter = searchFilter
      ? characters.filter((character) =>
          character.name.toLowerCase().startsWith(searchFilter.toLowerCase())
        )
      : characters;
    setFilteredCharacters(filter);
  }, [characters, searchFilter]);

  useEffect(() => {
    const sortedCharacters = [...filteredCharacters].sort((a, b) => {
      return nameSort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setFilteredCharacters(sortedCharacters);
  }, [nameSort]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `${ENV.END_URL}/${END_POINTS.GET_CHARACTERS}`,
        {
          headers: {
            Authorization: ENV.TOKEN,
          },
          params: {
            gender: selectedGender !== "any" ? selectedGender : null,
            page: currentPage,
            limit: charactersPerPage,
          },
        }
      );
      console.log("response.data.docs", response.data.total);
      setTotalCharactersInDb(response.data.total);
      setCharacters(response.data.docs);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleSearch = (value) => {
    setSearchFilter(value);
  };

  const handleRaceSelect = (value) => {
    const selectedRaces = value.map((option) => option.title);
    const filteredData =
      selectedRaces.length > 0
        ? characters.filter((object) => selectedRaces.includes(object.race))
        : characters;
    setFilteredCharacters(filteredData);
  };

  return (
    <>
      <HeaderComponent
        handleRaceSelect={handleRaceSelect}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        setNameSort={setNameSort}
        onSearch={handleSearch}
        nameSort={nameSort}
        searchFilter={searchFilter}
      />

      <CharacterList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filteredCharacters={filteredCharacters}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        searchFilter={searchFilter}
        setNameSort={setNameSort}
        nameSort={nameSort}
        setCharactersPerPage={setCharactersPerPage}
        charactersPerPage={charactersPerPage}
        totalCharactersInDb={totalCharactersInDb}
      />
    </>
  );
}

export default App;
