// Home.js
import React from "react";
import Navbar from "../components/Navbar.jsx";
import TablaUsuarios from "../components/TablaUsuarios/TablaUsuarios.jsx";


const Home = () => {
  return (
    <div>
      <Navbar />
      <TablaUsuarios />
    </div>
  );
};

export default Home;
