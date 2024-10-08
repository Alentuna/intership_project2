import React from 'react';
import Home from './pages/Home';
import NavBar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer.js';
import './App.css'; 
import Galary from './pages/Galary.js';


function App() {
  return (
    <Router>

      <div>
      
        <NavBar />
        <Routes>
      

      
      
          <Route path="/" element={<Home />} />
      
          <Route path="/about" element={<About />} />
      
      
          <Route path="/contact" element={<Contact />} />
      
          <Route path="/galary" element={<Galary />} />
        </Routes>
        <Footer />
      
      
      </div>
    
    
    </Router>
  );
}

export default App;

