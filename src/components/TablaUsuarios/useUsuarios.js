import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/api/usuarios";

export const useUsuarios = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setRows(response.data);
        setFilteredRows(response.data);
      } catch (error) {
        setError(`Error al cargar los usuarios: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  // Función para actualizar un usuario
  const updateUsuario = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      setRows((prevRows) =>
        prevRows.map((usuario) =>
          usuario.id === id ? { ...usuario, ...response.data } : usuario
        )
      );
    } catch (error) {
      setError(`Error al actualizar el usuario: ${error.message}`);
    }
  };

  // Función para eliminar un usuario
  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRows((prevRows) => prevRows.filter((usuario) => usuario.id !== id));
    } catch (error) {
      setError(`Error al eliminar el usuario: ${error.message}`);
    }
  };

  // Función para filtrar usuarios por un término de búsqueda
  const filterUsuarios = (term) => {
    const lowerTerm = term.toLowerCase();
    const filtered = rows.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(lowerTerm) ||
        usuario.correo.toLowerCase().includes(lowerTerm) ||
        usuario.rol.toLowerCase().includes(lowerTerm)
    );
    setFilteredRows(filtered);
  };

  return {
    rows,
    filteredRows,
    loading,
    error,
    updateUsuario,
    deleteUsuario,
    filterUsuarios,
  };
};
