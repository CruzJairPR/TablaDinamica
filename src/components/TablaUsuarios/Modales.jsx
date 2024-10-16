import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

export function UserEditModal({ open, onClose, user, onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    rol: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre || "",
        correo: user.correo || "",
        rol: user.rol || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave({ ...user, ...formData });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Editar Usuario
        </Typography>

        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Rol"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          fullWidth
        />

        <Box display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button  variant="contained"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export const ConfirmDeleteModal = ({ open, onClose, userId, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm(userId);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "white",
          p: 4,
          border: "2px solid #000",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Confirmación de Eliminación</h2>
        <p style={{ textAlign: "center" }}>
          ¿Estás seguro de que deseas eliminar este usuario?
        </p>
        <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
          <Button onClick={onClose} color="primary" sx={{ marginRight: 1 }}>
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
