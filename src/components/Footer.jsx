import * as React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // Iconos de redes sociales

const Footer = () => {
  return (
    <Box 
      sx={{
        bgcolor: '#f8f9fa', 
        p: 3, 
        mt: 'auto', 
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" sx={{ mb: 2 }}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Link href="#" sx={{ mx: 2 }}>
            Políticas de privacidad
          </Link>
          <Link href="#" sx={{ mx: 2 }}>
            Términos de uso
          </Link>
          <Link href="#" sx={{ mx: 2 }}>
            Soporte
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Síguenos en:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link href="#" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            <Twitter />
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            <Instagram />
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            <LinkedIn />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
