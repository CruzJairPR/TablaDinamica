import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

const CrearUsuarioButton = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/profile'); 
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        
        sx={{
          height: '55px', 
          fontSize: '16px', 
          width:'200px'        }}
          onClick={handleClick}
      >
        Crear Usuario
      </Button>
    </div>
  );
};

export default CrearUsuarioButton;
