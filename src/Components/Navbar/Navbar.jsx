import React from 'react';
import './Navbar.css';
import Webtv from '../../Images/WEB TV GABON.png'

const Navbar = () => {
  return (
    <nav className="mere">
      <div className="bold">
        <img src={Webtv} alt="" />
      
      <ul className="flex gap-4">
        <li><a href="/">Accueil</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/podcasts">Podcasts</a></li>
        <li><a href="/videos">Vidéos</a></li>
        <li><a href="/live">Live</a></li>
      </ul>
      </div>

    </nav>
  );
};

export default Navbar;
