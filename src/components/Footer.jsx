import React from 'react';
import { Box, Button, Paper } from '@mui/material';

const Footer = ({ handleDeleteUser, handleUpdateUser }) => {
  return (
    <Paper
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        py: 2,
        px: 3,
        backgroundColor: 'background.paper',
        boxShadow: '0px -2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="contained" color="success" /* onClick={() => handleUpdateClick()} */>
          Modificar
        </Button>
        <Button variant="contained" color="error" /* onClick={() => handleDeleteClick()} */>
          Eliminar
        </Button>
      </Box>
    </Paper>
  );
};

export default Footer;