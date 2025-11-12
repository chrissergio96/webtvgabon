// src/components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours…');

    try {
      // Ici tu peux appeler ton backend ou Firebase Functions
      setTimeout(() => {
        setStatus('Message envoyé avec succès !');
        setFormData({ nom: '', email: '', sujet: '', message: '' });
      }, 1000);
    } catch (error) {
      console.error("Erreur d’envoi :", error);
      setStatus('Erreur lors de l’envoi. Veuillez réessayer.');
    }
  };

  return (
    <div className="contact-wrapper">
      <h1>Contactez‑nous</h1>

      <div className="contact-info-cards">
        <div className="info-card facebook">
          <FaFacebookF className="icon" />
          <h3>Facebook</h3>
          <a style={{color:'#1877F2'}} href="https://www.facebook.com/webtvgabon/" target="_blank" rel="noopener noreferrer">
            webtvgabon
          </a>
        </div>

        <div className="info-card youtube">
          <FaYoutube className="icon" />
          <h3>YouTube</h3>
          <a style={{color:'#FF0000'}} href="https://www.youtube.com/@WebTvGabon" target="_blank" rel="noopener noreferrer">
            WebTvGabon
          </a>
        </div>

        <div className="info-card whatsapp">
          <FaWhatsapp className="icon" />
          <h3>WhatsApp</h3>
          <a style={{color:'#25D366'}}  href="https://wa.me/24177762034" target="_blank" rel="noopener noreferrer">
            +241 77 76 20 34
          </a>
        </div>

        <div className="info-card tiktok">
          <FaTiktok className="icon" />
          <h3>TikTok</h3>
          <a style={{color:'#fff', background:'#000'}} href="https://www.tiktok.com/@webtvgabon" target="_blank" rel="noopener noreferrer">
            @webtvgabon
          </a>
        </div>

        <div className="info-card phone">
          <FaPhone className="icon" />
          <h3>Téléphone</h3>
          <a style={{color:'#34B7F1'}} href="tel:+24177762034">+241 77 76 20 34</a>
        </div>

        <div className="info-card email">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <a style={{color:'#FF5F6D'}} href="mailto:webtvgabon@gmail.com">webtvgabon@gmail.com</a>
        </div>

        <div className="info-card location">
          <FaMapMarkerAlt className="icon" />
          <h3>Ville</h3>
          <p style={{color:'#FFA500'}}>Port‑Gentil, Gabon</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Envoyez‑nous un message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="sujet"
            placeholder="Sujet"
            value={formData.sujet}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
