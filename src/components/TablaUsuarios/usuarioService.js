import axios from 'axios';

const API_URL = 'http://localhost:3001/api/usuarios';
const LOGIN_URL = 'http://localhost:3001/api/login';

// Función para obtener el token del localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// Configuración de headers con el token
const config = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

// Login y obtención del token
export const login = async (correo, pw) => {
  const response = await axios.post(LOGIN_URL, { correo, pw });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token); // Guardar el token
  }
  return response.data;
};

// Obtener todos los usuarios
export const fetchUsuarios = async () => {
  const response = await axios.get(API_URL, config());
  return response.data;
};

// Actualizar el estado de un usuario
export const updateUsuarioEstado = async (userId, newStatus) => {
  const response = await axios.patch(`${API_URL}/${userId}`, {
    estado: newStatus,
  }, config());
  return response.data;
};

// Otros servicios pueden ser añadidos de forma similar
