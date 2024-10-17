import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Alert,
  Box,
  Link 
} from '@mui/material';
import authService from '../server/authService';

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      await authService.login(correo, password); 
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.mensaje || 'Error en el inicio de sesión');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box 
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>Iniciar sesión</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            required
            fullWidth
            label="Correo"
            variant="outlined"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            required
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ padding: '12px', fontWeight: 'bold' }}
          >
            Iniciar sesión
          </Button>
        </form>
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link href="#" variant="body2" sx={{ mb: 1 }}>
            ¿Olvidaste tu contraseña?
          </Link>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ¿No tienes una cuenta? 
            <Link href="#" variant="body2" sx={{ ml: 1 }}>
              Crear cuenta
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
