import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function MultiSelect({ handle }) {
  return (
    <Autocomplete
      onChange={(e, v) => handle(v)}
      multiple
      race={2}
      id="multiple-limit-tags"
      options={optionRaces}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="Race" placeholder="eg:Human,Dwarf" />
      )}
      sx={{ width: "200px" }}
    />
  );
}

const optionRaces = [
  { title: "Human" },
  { title: "Ainur" },
  { title: "Hobbit" },
  { title: "Elf" },
  { title: "Dwarf" },
  { title: "Maiar" },
];
