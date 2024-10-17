import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/api/usuarios";

// Función para obtener el token del almacenamiento local
const getToken = () => {
  return localStorage.getItem('token'); // Cambia esto si usas otro método de almacenamiento
};

export function useFetchUsuarios() {
  const [rows, setRows] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        setLoading(true);  
        
        // Realizar la solicitud incluyendo el token en el encabezado
        const response = await axios.get(API_URL, {
          headers: {
            'Authorization': `Bearer ${getToken()}`, // Incluir el token en el encabezado
            'Content-Type': 'application/json' // Asegurarse de que el tipo de contenido es correcto
          }
        });
        
        setRows(response.data);  
      } catch (error) {
        // Capturar el mensaje de error de la respuesta del servidor
        setError(`Error al cargar los usuarios: ${error.response?.data?.mensaje || error.message}`);  
      } finally {
        setLoading(false);  
      }
    };
    
    fetchUsuarios();  
  }, []);  

  return { rows, loading, error };  
}
