import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "../components/styles/FormularioUsuario.css";

function FormularioUsuario() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nuevoUsuario = {
      nombre,
      correo,
      rol,
      contrasena,
    };

    try {
      await axios.post("http://localhost:3001/api/usuarios", nuevoUsuario, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Usuario creado exitosamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Error al crear el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <Container maxWidth="sm" className="formulario-container">
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        className="formulario-title"
      >
        Crear Nuevo Usuario
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          fullWidth
          className="formulario-input"
        />
        <TextField
          label="Correo"
          variant="outlined"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          fullWidth
          className="formulario-input"
        />
        <TextField
          label="Rol"
          variant="outlined"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          required
          fullWidth
          className="formulario-input"
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
          fullWidth
          className="formulario-input"
        />
        <Box className="formulario-botones">
          <Button
            variant="contained"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => navigate(-1)}
          >
            Regresar
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="formulario-boton formulario-boton-crear"
          >
            Crear Usuario
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default FormularioUsuario;
