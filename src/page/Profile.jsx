import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { createUsuario } from "../components/TablaUsuarios/usuarioService";
import { TituloForumlario } from "../components/Typography";
import { Paper } from "@mui/material";

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
      pw: contrasena,
    };

    try {
      await createUsuario(nuevoUsuario);
      alert("Usuario creado exitosamente");
      navigate("/home");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Error al crear el usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <TituloForumlario />
        </Box>
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
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3f51b5",
                },
                "&:hover fieldset": {
                  borderColor: "#1e88e5",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1e88e5",
                },
              },
            }}
          />
          <TextField
            label="Correo"
            variant="outlined"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3f51b5",
                },
                "&:hover fieldset": {
                  borderColor: "#1e88e5",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1e88e5",
                },
              },
            }}
          />
          <TextField
            label="Rol"
            variant="outlined"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3f51b5",
                },
                "&:hover fieldset": {
                  borderColor: "#1e88e5",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1e88e5",
                },
              },
            }}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3f51b5",
                },
                "&:hover fieldset": {
                  borderColor: "#1e88e5",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1e88e5",
                },
              },
            }}
          />
          <Box display="flex" justifyContent="center" mt={2} gap={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate(-1)}
            >
              Regresar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Crear Usuario
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default FormularioUsuario;
