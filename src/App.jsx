import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';

function App() {
  return (
    <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skill/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
