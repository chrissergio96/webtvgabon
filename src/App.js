import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './Pages/Articles.js';
import Podcasts from './Pages/Podcasts.js';
import DetailsArticles from './Pages/DetailsArticles.js';
import Accueil from './Pages/Accueil.js';
import Videos from './Pages/Videos.js';
import Directe from './Pages/Directe.js';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js';
import { SearchProvider } from './Components/SearchContent/SearchContent.js';
import AllNav from './Components/AllNav/AllNav.js';

function App() {
  return (
    <SearchProvider>
    <Router>
      <ScrollToTop />
      <AllNav/>

      <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/articles" element={<Articles />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/article/:id" element={<DetailsArticles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/live" element={<Directe />} />

      </Routes>
    </Router>
    </SearchProvider>
  );
}

export default App;
