// src/components/AllNav.js
import React from 'react';
import './AllNav.css'; // CSS personnalisé
import Logo from '../../Images/WEB_TV_GABON-removebg-preview.png';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react'; // Si tu veux une icône animée (optionnel)

const AllNav = () => {
  return (
    <div className="allnav-container">
      {/* Logo */}
      <div>
        <Link to="/">
        <img src={Logo} alt="Logo" className="allnav-logo" />
        </Link>
      </div>

      {/* Texte animé */}
      <div className="allnav-message-box">
        <div className="allnav-marquee">
          <AlertCircle className="allnav-icon" size={18} />
          <span className="blink">ALERTE :</span> 📢 Bienvenue sur notre site officiel  WEB_TV_GABON  — Retrouvez les dernières actualités , les événements à venir, et bien plus encore...
        </div>
      </div>
    </div>
  );
};

export default AllNav;
