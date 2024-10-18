import axios from "axios";

const API_URL = "http://localhost:3001/api";

// Función para iniciar sesión
const login = async (correo, pw) => {
  const response = await axios.post(
    `${API_URL}/login`,
    { correo, pw },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem("token");
};

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export default {
  login,
  logout,
  isAuthenticated,
};
