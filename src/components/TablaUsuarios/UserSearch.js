import React, { useState } from "react";

import { TextField } from "@mui/material";


function UserSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;

    setSearchTerm(term);

    onSearch(term);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Buscar usuarios..."
      value={searchTerm}
      onChange={handleSearch}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#e0e0e0",
          },

          "&:hover fieldset": {
            borderColor: "#bdbdbd",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#1976d2",
          },
        },
      }}
    />
  );
}

export default UserSearch;
