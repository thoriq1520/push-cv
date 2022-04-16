import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link   } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import ContactUs from './pages/ContactUs/ContactUs';
import Navbar from "./component/Navbar/Navbar";



function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>   
    </Router>
       

  );
}

export default App;

