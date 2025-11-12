import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../SearchContent/SearchContent';

const Navbar = () => {
  const { setQuery } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [filteredPages, setFilteredPages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
 const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Active sticky après 50px de scroll
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const pages = [
    { name: 'Articles', path: '/articles' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Vidéos', path: '/videos' },
    { name: 'Directe', path: '/directe' },
    { name: 'Actualités', path: '/actualites' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const results = pages.filter(page =>
      page.name.toLowerCase().includes(value)
    );
    setFilteredPages(results);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (filteredPages.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredPages.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev <= 0 ? filteredPages.length - 1 : prev - 1
      );
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      const selectedPage = filteredPages[selectedIndex];
      if (selectedPage) {
        navigate(selectedPage.path);
        setFilteredPages([]);
        setSelectedIndex(-1);
        inputRef.current.value = '';
      }
    }
  };
  

  return (
    <nav className={`merenav ${isSticky ? 'fixed-nav' : ''}`}>
      <div className="bold">
        <div className="search-container" style={{ position: 'relative' }}>
          <FaSearch className="search-icon" onClick={handleIconClick} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
            ref={inputRef}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {filteredPages.length > 0 && (
            <ul className="search-results">
              {filteredPages.map((page, index) => (
                <li
                  key={index}
                  className={index === selectedIndex ? 'selected' : ''}
                >
                  <Link
                    to={page.path}
                    onClick={() => {
                      setFilteredPages([]);
                      setSelectedIndex(-1);
                      inputRef.current.value = '';
                    }}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
          <li><Link to="/videos">Vidéos</Link></li>
          <li><Link to="/live">Live</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
