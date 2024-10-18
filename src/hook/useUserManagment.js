import { useState, useEffect, useCallback } from "react";
import { useFetchUsuarios } from "./useUsuarios";

export const useUserManagement = () => {
  const { rows, loading, error } = useFetchUsuarios();
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);

  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      setFilteredRows(
        rows.filter(
          (row) =>
            row.nombre.toLowerCase().includes(term.toLowerCase()) ||
            row.correo.toLowerCase().includes(term.toLowerCase()) ||
            row.rol.toLowerCase().includes(term.toLowerCase())
        )
      );
    },
    [rows]
  );

  const handleDeleteUser = useCallback((userId) => {
    setFilteredRows((prevRows) => prevRows.filter((row) => row.id !== userId));
    setMessage("Usuario eliminado exitosamente");
    setOpenSnackbar(true);
  }, []);

  const handleSaveUser = useCallback((updatedUser) => {
    setFilteredRows((prevRows) =>
      prevRows.map((row) =>
        row.id === updatedUser.id ? { ...row, ...updatedUser } : row
      )
    );
    setMessage("Usuario actualizado exitosamente");
    setOpenSnackbar(true);
  }, []);

  const handleEstadoChange = useCallback((userId, isActive) => {
    setFilteredRows((prevRows) =>
      prevRows.map((row) =>
        row.id === userId ? { ...row, estado: isActive } : row
      )
    );
    setMessage(`Usuario ${isActive ? "activado" : "desactivado"} exitosamente`);
    setOpenSnackbar(true);
  }, []);

  return {
    filteredRows,
    loading,
    error,
    searchTerm,
    selectedRows,
    openSnackbar,
    message,
    handleSearch,
    handleDeleteUser,
    handleSaveUser,
    handleEstadoChange,
    setSelectedRows,
    setOpenSnackbar,
  };
};
