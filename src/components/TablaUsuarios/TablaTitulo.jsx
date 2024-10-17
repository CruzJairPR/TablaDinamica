import React from "react";
import { Typography } from "@mui/material";

function TablaTitulo() {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "#f44336",
        fontStyle: "italic",
        fontWeight: "bold",
        fontFamily: "'Georgia', serif",
        letterSpacing: "1px",
      }}
    >
      Tabla de Usuarios
    </Typography>
  );
}

export default TablaTitulo;
