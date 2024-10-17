import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import UserSearch from "./TablaUsuarios/UserSearch";
import CrearUsuarioButton from "./Buttons";
import TablaTitulo from "./TablaUsuarios/TablaTitulo";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        sx={{ padding: "16px 0" }}
      >
        <Box
          flexGrow={1}
          textAlign={{ xs: "center", md: "left" }}
        >
          <TablaTitulo />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          width={{ xs: "100%", md: "auto" }}
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <UserSearch searchTerm={searchTerm} onSearch={handleSearch} />

          <CrearUsuarioButton />
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
