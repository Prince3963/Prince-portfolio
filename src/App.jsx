import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skill';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import ScrollToTop from './Component/ScrollToTop';

function App() {  
  
  return (
    <>
      <Navbar />
      <Home/>
     
    </>
  );
}

export default App;
