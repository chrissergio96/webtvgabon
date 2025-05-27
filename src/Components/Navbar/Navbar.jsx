import React, { useState, useRef } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSearch } from '../SearchContent/SearchContent';

const Navbar = () => {
  const { setQuery } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
  };

  return (
    <nav className="merenav">
      <div className="bold">
        <div className="search-container">
          <FaSearch className="search-icon" onClick={handleIconClick} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
            ref={inputRef}
            onChange={handleInputChange}
          />
        </div>

        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
          <li><Link to="/videos">Vidéos</Link></li>
          <li><Link to="/live">Live</Link></li>
        </ul>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="top-bar bar"></div>
          <div className="middle-bar bar"></div>
          <div className="bottom-bar bar"></div>
        </div>
      </div>

      <ul className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <li onClick={toggleMenu} style={{ textAlign: 'right', cursor: 'pointer', fontSize: '24px', color: 'white' }}>
          ✕
        </li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/podcasts">Podcasts</Link></li>
        <li><Link to="/videos">Vidéos</Link></li>
        <li><Link to="/live">Live</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
