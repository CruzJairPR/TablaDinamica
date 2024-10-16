import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Typography,
  Snackbar,
  Button,
} from "@mui/material";
import axios from "axios";
import Switch from "@mui/material/Switch";
import { UserEditModal, ConfirmDeleteModal } from "../TablaUsuarios/Modales";
import UserSearch from "./UserSearch";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/api/usuarios";

function TablaUsuarios() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editUserModal, setEditUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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

  const handleEstadoChange = async (userId, newStatus) => {
    setLoading(true);
    try {
      const response = await axios.patch(`${API_URL}/${userId}`, {
        estado: newStatus ? "activo" : "inactivo",
      });
      if (response.status === 200) {
        setRows(
          rows.map((row) =>
            row.id === userId
              ? { ...row, estado: newStatus ? "activo" : "inactivo" }
              : row
          )
        );
        setFilteredRows(
          filteredRows.map((row) =>
            row.id === userId
              ? { ...row, estado: newStatus ? "activo" : "inactivo" }
              : row
          )
        );
        setOpenSnackbar(true);
        setMessage("Estado del usuario actualizado correctamente");
      }
    } catch (error) {
      setError(`Error al actualizar el estado: ${error.message}`);
      setOpenSnackbar(true);
      setMessage("Error al actualizar el estado del usuario");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredRows(
      rows.filter(
        (row) =>
          row.nombre.toLowerCase().includes(term.toLowerCase()) ||
          row.correo.toLowerCase().includes(term.toLowerCase()) ||
          row.rol.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setEditUserModal(true);
  };

  const handleDeleteUser = async (userId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${userId}`);
      setRows(rows.filter((row) => row.id !== userId));
      setFilteredRows(filteredRows.filter((row) => row.id !== userId));
      setOpenSnackbar(true);
      setMessage("Usuario eliminado correctamente");
    } catch (error) {
      setError(`Error al eliminar el usuario: ${error.message}`);
      setOpenSnackbar(true);
      setMessage("Error al eliminar el usuario");
    } finally {
      setLoading(false);
      setConfirmDeleteModal(false);
    }
  };

  const validateUser = (user) => {
    if (!user.nombre || !user.correo || !user.rol) {
      setOpenSnackbar(true);
      setMessage("Todos los campos son obligatorios");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(user.correo)) {
      setOpenSnackbar(true);
      setMessage("El correo no tiene un formato válido");
      return false;
    }
    return true;
  };

  const handleUserUpdate = (updatedUser) => {
    if (validateUser(updatedUser)) {
      setRows(
        rows.map((row) => (row.id === updatedUser.id ? updatedUser : row))
      );
      setFilteredRows(
        filteredRows.map((row) =>
          row.id === updatedUser.id ? updatedUser : row
        )
      );
      setEditUserModal(false);
      setOpenSnackbar(true);
      setMessage("Usuario actualizado correctamente");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "nombre", headerName: "Nombre", flex: 1 },
    { field: "correo", headerName: "Correo", flex: 1 },
    { field: "rol", headerName: "Rol", flex: 1 },
    {
      field: "estado",
      headerName: "Estado",
      flex: 1,
      renderCell: (params) => (
        <Switch
          checked={params.row.estado === "activo"}
          onChange={(event) =>
            handleEstadoChange(params.row.id, event.target.checked)
          }
          color="primary"
        />
      ),
    },
    {
      field: "acciones",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEditUser(params.row)}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red", color: "white", ml: 1 }}
            onClick={() => {
              setUserToDelete(params.row.id);
              setConfirmDeleteModal(true);
            }}
          >
            Eliminar
          </Button>
        </Box>
      ),
    },
  ];

  const handleSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const handleCreateUser = () => {
    navigate("/profile");
  };

  if (loading) {
    return (
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error" style={{ margin: "20px 0" }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "16px",
    marginBottom: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    flexDirection: { xs: "column", sm: "row" }, 
  }}
>
  <Typography
    variant="h4"
    component="h1"
    sx={{
      color: "#1976d2",
      fontWeight: "bold",
      whiteSpace: "nowrap",
      flexGrow: 1,
      minHeight: "48px",
    }}
  >
    Tabla de Usuarios
  </Typography>

    <Box
      sx={{
        flexGrow: 1,
        minHeight: "48px", 
        width: "100%", 
      }}
    >
      <UserSearch searchTerm={searchTerm} onSearch={handleSearch} sx={{ width: "100%" }} />
    </Box>

    <Button
      variant="contained"
      color="primary"
      size="medium"
      sx={{ minHeight: "48px", width: "150px" }} 
      onClick={handleCreateUser}
    >
      Crear Usuario
    </Button>
  
</Box>


      <Box
        sx={{
          height: "auto",
          width: "100%",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={handleSelectionModelChange}
          localeText={{
            rowsPerPage: "Filas por página",
            noRowsLabel: "No hay filas disponibles",
            columnHeaderSortIconLabel: "Ordenar",
            footerRowSelected: (count) =>
              count !== 1
                ? `${count.toLocaleString()} filas seleccionadas`
                : `${count.toLocaleString()} fila seleccionada`,
          }}
        />
      </Box>
      {selectedRows.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Filas seleccionadas:</Typography>
          <ul>
            {selectedRows.map((id) => {
              const user = rows.find((row) => row.id === id);
              return (
                <li key={id}>
                  {user ? `${user.nombre} (${user.correo})` : id}
                </li>
              );
            })}
          </ul>
        </Box>
      )}
      <UserEditModal
        open={editUserModal}
        onClose={() => setEditUserModal(false)}
        user={currentUser}
        onSave={handleUserUpdate}
      />
      <ConfirmDeleteModal
        open={confirmDeleteModal}
        onClose={() => setConfirmDeleteModal(false)}
        userId={userToDelete}
        onConfirm={handleDeleteUser}
      />
    </Container>
  );
}

export default TablaUsuarios;
