import React, { useEffect, useState } from "react";
import { fetchUsuarios, login } from "./usuarioService";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [correo, setCorreo] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      await login(correo, pw);
      setIsLoggedIn(true);
      obtenerUsuarios();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales inválidas");
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const data = await fetchUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      obtenerUsuarios();
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {!isLoggedIn && (
        <div>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo"
          />
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Contraseña"
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      )}

      {isLoggedIn && (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre} - {usuario.rol}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
