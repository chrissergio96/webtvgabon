import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import './index.css';
import Articles from './Pages/Articles.js';
import Podcasts from './Pages/Podcasts';


function App() {
  return (
    <div className="App">
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Bienvenue sur WebTV Gabon</h1>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

