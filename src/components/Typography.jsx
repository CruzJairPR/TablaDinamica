import React from 'react';
import { Typography } from "@mui/material";

const ListaUsuariosTitle = () => {
  return (
    <div
      style={{
        height: '50px',  // Altura para igualar el botón
        display: 'flex',
        alignItems: 'center',  // Alinea el texto verticalmente al centro
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#1976d2",
          fontWeight: "bold",
        }}
      >
        Lista de Usuarios
      </Typography>
    </div>
  );
};

export default ListaUsuariosTitle;
