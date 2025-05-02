import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Articles from './Pages/Articles.js';
import Podcasts from './Pages/Podcasts.js';
import DetailsArticles from './Pages/DetailsArticles.js';
import Accueil from './Pages/Accueil.js';
import Videos from './Pages/Videos.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/articles" element={<Articles />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/article/:id" element={<DetailsArticles />} />
        <Route path="/videos" element={<Videos />} />


      </Routes>
    </Router>
  );
}

export default App;
