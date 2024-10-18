import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import TablaUsuarios from "../components/TablaUsuarios/TablaUsuarios.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <TablaUsuarios />
      <Footer />
    </Container>
  );
};

export default Home;
