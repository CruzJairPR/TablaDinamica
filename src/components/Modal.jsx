import React, { useState } from 'react';
import { DialogContentText } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';   

export const DeleteConfirmationModal = ({ open, onClose, onDeleteConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmar Eliminación</DialogTitle>
      <DialogContent>
        <DialogContentText>¿Estás seguro de que quieres eliminar este usuario?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onDeleteConfirm} autoFocus color="primary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export const UpdateUserModel = ({ open, onClose, onSubmit, initialData }) => {
    const [userData, setUserData] = useState(initialData);
  
    const handleInputChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = () => {
      onSubmit(userData);
      onClose(); // Close the modal after submit
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Actualizar Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            name="nombre"
            value={userData.nombre}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Correo Electrónico"
            type="email"
            fullWidth
            variant="standard"
            name="correo"
            value={userData.correo}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Rol"
            type="text"
            fullWidth
            variant="standard"
            name="rol"
            value={userData.rol}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSubmit} autoFocus color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  



