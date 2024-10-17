// Home.js
import React from "react";
import Navbar from "../components/Navbar.jsx";
import TablaUsuarios from "../components/TablaUsuarios/TablaUsuarios.jsx";
import { Container } from "@mui/material";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    
    <Container>
      <Navbar /> 
      <TablaUsuarios />
      <Footer/>
    </Container>
  );
};

export default Home;
