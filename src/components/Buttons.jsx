import * as React from 'react';
import Button from '@mui/material/Button';

const CrearUsuarioButton = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        
        sx={{
          height: '50px', // Aumenta la altura del botón
          fontSize: '16px', // Ajusta el tamaño del texto si es necesario
        }}
       
      >
        Crear Usuario
      </Button>
    </div>
  );
};

export default CrearUsuarioButton;
