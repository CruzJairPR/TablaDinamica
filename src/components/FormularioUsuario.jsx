import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FormularioUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend
    console.log('Datos del nuevo usuario:', { nombre, correo, rol });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Correo"
        variant="outlined"
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Rol"
        variant="outlined"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Crear Usuario
      </Button>
    </form>
  );
}

export default FormularioUsuario;