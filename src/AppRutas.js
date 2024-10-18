// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Profile from './page/Profile';
import Login from './page/Login';

function AppRutas() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppRutas;
