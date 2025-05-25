import React, { useState } from 'react';
import './Navbar.css';
import Webtv from '../../Images/WEB TV GABON.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="merenav">
      <div className="bold">
      <Link to='/'>
        <img src={Webtv} alt="Logo" />
            </Link>

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
  <div className="top-bar bar"></div>
  <div className="middle-bar bar"></div>
  <div className="bottom-bar bar"></div>
</div>


      </div>

      {/* Menu mobile déroulant */}
      <ul className={`mobile-menu ${isOpen ? 'show' : ''}`}>
      <li onClick={toggleMenu} style={{ textAlign: 'right', cursor: 'pointer', fontSize: '24px', color: 'white' }}>
      ✕
     </li>
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
