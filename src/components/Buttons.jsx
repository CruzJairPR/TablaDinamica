import React from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export const CrearUsuarioButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      startIcon={<PersonAddIcon />}
      sx={{
        height: "55px",
        fontSize: "16px",
        width: "200px",
      }}
      onClick={handleClick}
    >
      Crear Usuario
    </Button>
  );
};

export const EditarUsuarioButton = ({ onEdit, user }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<EditIcon />}
      onClick={() => onEdit(user)}
      sx={{ fontSize: "12px", padding: "4px 8px" }}
    >
      Editar
    </Button>
  );
};

export const EliminarUsuarioButton = ({ onDelete, userId }) => {
  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      startIcon={<DeleteIcon />}
      onClick={() => onDelete(userId)}
      sx={{ fontSize: "12px", padding: "4px 8px", marginLeft: "8px" }}
    >
      Eliminar
    </Button>
  );
};
