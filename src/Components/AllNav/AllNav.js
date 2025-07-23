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
      <div className="mere-allnav">
        <Link to="/">
        <img src={Logo} alt="Logo" className="allnav-logo" />
        </Link>
      </div>

      {/* Texte animé */}
      <div className="allnav-message-box">
        <div className="allnav-marquee">
          <AlertCircle className="allnav-icon" size={18} />
          <span className="blink">ALERTE :</span> 📢 Bienvenue sur notre site officiel Web Tv Gabon , 𝘭𝘢 𝘳é𝘧é𝘳𝘦𝘯𝘤𝘦 𝘪𝘯𝘤𝘰𝘯𝘵𝘰𝘶𝘳𝘯𝘢𝘣𝘭𝘦.  𝘝𝘰𝘵𝘳𝘦 𝘮é𝘥𝘪𝘢 𝘱𝘳é𝘧é𝘳é ! — Retrouvez les dernières actualités , les événements à venir, et bien plus encore...
        </div>
      </div>
    </div>
  );
};

export default AllNav;
