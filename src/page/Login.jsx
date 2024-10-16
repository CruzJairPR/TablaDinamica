import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Alert,
  Box
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reiniciar el mensaje de error

    // Simulación de inicio de sesión con credenciales específicas
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (username === validUsername && password === validPassword) {
      // Redirigir a la página "Home" si las credenciales son correctas
      navigate('/home');
    } else {
      // Mostrar un mensaje de error si las credenciales son incorrectas
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box 
        sx={{ 
          padding: 4, 
          borderRadius: 2, 
          boxShadow: 3, 
          backgroundColor: 'white', 
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }} // Espacio adicional arriba del botón
          >
            Iniciar sesión
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
