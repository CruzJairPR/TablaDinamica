import React from 'react';
import { Typography } from "@mui/material";

const ListaUsuariosTitle = () => {
  return (
    <div
      style={{
        height: '55px',  
        display: 'flex',
        alignItems: 'center', 
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
        Tabla de Usuarios
      </Typography>
    </div>
  );
};

export default ListaUsuariosTitle;
