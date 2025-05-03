import React, { useState } from 'react';
import './Navbar.css';
import Webtv from '../../Images/WEB TV GABON.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mere">
      <div className="bold">
        <img src={Webtv} alt="Logo" />

        {/* Liens visibles sur desktop */}
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/podcasts">Podcasts</a></li>
          <li><a href="/videos">Vidéos</a></li>
          <li><a href="/live">Live</a></li>
  
        </ul>

        {/* Hamburger pour mobile */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
  <div className="bar top-bar"></div>
  <div className="bar middle-bar"></div>
  <div className="bar bottom-bar"></div>
</div>

      </div>

      {/* Menu mobile déroulant */}
      <ul className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <li><a href="/">Accueil</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/podcasts">Podcasts</a></li>
        <li><a href="/videos">Vidéos</a></li>
        <li><a href="/live">Live</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
