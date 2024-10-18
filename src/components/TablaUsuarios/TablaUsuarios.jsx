import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Box,
  CircularProgress,
  Alert,
  Snackbar,
  Switch,
} from "@mui/material";
import { dataGridEsES } from "./Traducciones";
import { UserEditModal, ConfirmDeleteModal } from "../TablaUsuarios/Modales";
import TablaTitulo from "./TablaTitulo";
import UserSearch from "./UserSearch";
import {
  CrearUsuarioButton,
  EditarUsuarioButton,
  EliminarUsuarioButton,
} from "../Buttons";
//CustomHooks
import { useUserManagement } from "../../hook/useUserManagment";
import "../../styles/Tabla.css";

function TablaUsuarios() {
  const {
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
  } = useUserManagement();

  const [editUserModal, setEditUserModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setEditUserModal(true);
  };

  const handleOpenDeleteModal = (userId) => {
    setUserToDelete(userId);
    setConfirmDeleteModal(true);
  };

  const columns = [
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
          checked={params.row.estado}
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
          <EditarUsuarioButton onEdit={handleEditUser} user={params.row} />
          <EliminarUsuarioButton
            onDelete={handleOpenDeleteModal}
            userId={params.row.id}
          />
        </div>
      ),
    },
  ];

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
          columns={columns}
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
