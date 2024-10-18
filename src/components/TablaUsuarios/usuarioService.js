import axios from 'axios';

const API_URL = 'http://localhost:3001/api/usuarios';
const LOGIN_URL = 'http://localhost:3001/api/login';
const REFRESH_URL = 'http://localhost:3001/api/token';

// Obtener tokens
const getToken = () => localStorage.getItem('token');
const getRefreshToken = () => localStorage.getItem('refreshToken');

// Configuración de headers con el token
const config = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
};

// Función para refrescar el token
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(REFRESH_URL, { token: getRefreshToken() });
    localStorage.setItem('token', response.data.accessToken); // Guardar el nuevo access token
    return response.data.accessToken;
  } catch (error) {
    console.error('Error al refrescar el token:', error);
    return null;
  }
};

// Interceptor de Axios para manejar el token expirado
axios.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, continuar
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest); // Reintentar la solicitud con el nuevo token
      }
    }
    return Promise.reject(error);
  }
);

// Login y obtención del token
export const login = async (correo, pw) => {
  const response = await axios.post(LOGIN_URL, { correo, pw });
  if (response.data.accessToken && response.data.refreshToken) {
    localStorage.setItem('token', response.data.accessToken); // Guardar access token
    localStorage.setItem('refreshToken', response.data.refreshToken); // Guardar refresh token
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

// Crear un nuevo usuario
export const createUsuario = async (usuarioData) => {
  const response = await axios.post(API_URL, usuarioData, config());
  return response.data;
};
