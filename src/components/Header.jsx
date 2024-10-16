import React, { useState } from "react";
import { Container } from "@mui/material";
import UserSearch from "./TablaUsuarios/UserSearch";
import CrearUsuarioButton from "./Buttons";
import ListaUsuariosTitle from "./Typography";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <Container>
        <div>
        <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "10px",
  }}
>
  <ListaUsuariosTitle />
  <div style={{ width: '300px', marginRight: '10px' }}> {/* Agregamos margen derecho */}
    <UserSearch searchTerm={searchTerm} onSearch={handleSearch} />
  </div>
  <CrearUsuarioButton />
</div>
        </div>
     
</Container>
    </header>
  );
};

export default Header;
