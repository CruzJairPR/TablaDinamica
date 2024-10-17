// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'xideral'; 

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener el token del encabezado

  if (!token) {
    return res.status(401).json({ message: 'No se proporcionó token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Almacenar la información del usuario decodificada
    next(); // Continuar al siguiente middleware o ruta
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
