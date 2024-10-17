const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

const SECRET_KEY = 'mi_secreto'; // Cambia esto por una clave secreta más fuerte

// Base de datos simulada
const usuarios = [
  {
    id: 1,
    nombre: "Ana García",
    correo: "anagarcia@example.com",
    rol: "Administrador",
    estado: true,
    pw: "password125"
  },
  {
    id: 2,
    nombre: "Carlos Martínez",
    correo: "carlosmartinez@gmail.com",
    rol: "Usuario",
    estado: false,
    pw: "secure_pass"
  },
  // Agrega más usuarios según sea necesario
];

// Middleware para verificar el token JWT
const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ mensaje: 'No se proporcionó token' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ mensaje: 'Token no válido' });
  }
};

// Ruta de login para generar token
app.post('/api/login', (req, res) => {
  const { correo, pw } = req.body;
  const usuario = usuarios.find(u => u.correo === correo && u.pw === pw);

  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Ruta protegida - Obtener todos los usuarios
app.get('/api/usuarios', verificarToken, (req, res) => {
  res.json(usuarios);
});

// Ruta protegida - Obtener un usuario específico
app.get('/api/usuarios/:id', verificarToken, (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  res.json(usuario);
});

// POST - Crear un nuevo usuario (protegida)
app.post('/api/usuarios', verificarToken, (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    correo: req.body.correo,
    rol: req.body.rol,
    estado: req.body.estado || true
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PATCH - Actualizar el estado de un usuario (protegida)
app.patch('/api/usuarios/:id', verificarToken, (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

  if (req.body.estado !== undefined) {
    usuario.estado = req.body.estado;
  }
  res.json(usuario);
});

// DELETE - Eliminar un usuario (protegida)
app.delete('/api/usuarios/:id', verificarToken, (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

  usuarios.splice(index, 1);
  res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API de usuarios ejecutándose en http://localhost:${port}`);
});
