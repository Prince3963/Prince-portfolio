import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import Contact from './Component/contact';

function App() {
  return (
    <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/skills' element={<Skill/>}/>
          <Route path='/projects' element={< Projects/>}/>
          <Route path='/contact' element= { < Contact/> }/>
        </Routes>
      
    </div>
  );
}

export default App;
