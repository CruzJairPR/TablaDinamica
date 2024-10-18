import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  Button,
} from "@mui/material";
import Switch from "@mui/material/Switch";
//Traductor
import { dataGridEsES } from "./Traducciones";
//Modales
import { UserEditModal, ConfirmDeleteModal } from "../TablaUsuarios/Modales";
//hook
import { useFetchUsuarios } from "../../hook/useUsuarios2";
//componentes
import TablaTitulo from "./TablaTitulo";
import UserSearch from "./UserSearch";
import CrearUsuarioButton from "../Buttons";
//Estilo
import "../styles/Tabla.css";


function TablaUsuarios() {
  const { rows, loading, error } = useFetchUsuarios();
  const [filteredRows, setFilteredRows] = useState([]);
  const [editUserModal, setEditUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setFilteredRows(rows);
  }, [rows]);

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

  const handleOpenDeleteModal = (userId) => {
    setUserToDelete(userId);
    setConfirmDeleteModal(true);
  };

  const handleDeleteUser = (userId) => {
    const updatedRows = rows.filter((row) => row.id !== userId);
    setFilteredRows(updatedRows);
    setMessage("Usuario eliminado exitosamente");
    setOpenSnackbar(true);
    setConfirmDeleteModal(false);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSaveUser = (updatedUser) => {
    const updatedRows = rows.map((row) =>
      row.id === currentUser.id ? { ...row, ...updatedUser } : row
    );
    setFilteredRows(updatedRows);
    setEditUserModal(false);
    setMessage("Usuario actualizado exitosamente");
    setOpenSnackbar(true);
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
  const handleEstadoChange = (userId, isActive) => {
    const updatedRows = filteredRows.map((row) =>
      row.id === userId
        ? { ...row, estado: isActive } 
        : row
    );
    setFilteredRows(updatedRows);
    setMessage(`Usuario ${isActive ? "activado" : "desactivado"} exitosamente`);
    setOpenSnackbar(true);
  };

  return (
    <Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>

      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
        sx={{ padding: "16px 0" }}
      >
        <Box flexGrow={1} textAlign={{ xs: "center", md: "left" }}>
          <TablaTitulo />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          width={{ xs: "100%", md: "auto" }}
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <UserSearch searchTerm={searchTerm} onSearch={handleSearch} />
          <CrearUsuarioButton />
        </Box>
      </Box>

      <Box style={{ height: 400, width: "100%" }}>
        <DataGrid
        className="table"
          rows={filteredRows}
          columns={[
            { field: "id", headerName: "ID", width: 130 },
            { field: "nombre", headerName: "Nombre", width: 180 },
            { field: "correo", headerName: "Correo", width: 200 },
            { field: "rol", headerName: "Rol", width: 170 },
            {
              field: "estado",
              headerName: "Estado",
              width: 150,
              renderCell: (params) => (
                <Switch
                  checked={params.row.estado} // Ahora es un booleano
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
              width: 220,
              renderCell: (params) => (
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditUser(params.row)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleOpenDeleteModal(params.row.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              ),
            },
          ]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
          localeText={dataGridEsES}
        />
      </Box>

      <UserEditModal
        open={editUserModal}
        onClose={() => setEditUserModal(false)}
        user={currentUser}
        onSave={handleSaveUser}
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
