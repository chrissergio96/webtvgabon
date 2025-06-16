import { Link } from 'react-router-dom';
import './Economie.css';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const  Economie = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simule un appel API ou récupère des données locales
    const fetchData = async () => {
      const data = [
        {
          id: 11,
          titre: "[🔴𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗘] 𝗨𝗻𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘀𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝗰𝗼𝗿𝗱 𝗲𝘁 𝘂𝗻𝗲 𝗩𝗶𝘀𝗶𝗯𝗶𝗹𝗶𝘁é 𝗔𝗰𝗰𝗿𝘂𝗲 𝗽𝗼𝘂𝗿 𝗹𝗲 𝗖𝗣𝗘𝗚",
          image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui1_n.jpg",
          resume: "Le président de la République, Brice Clotaire Oligui Nguema, prendra part le 18 mai 2025, à Rome...",
          date: "24 Mai 2025"
        },
        {
          id: 2,
          titre: "La dépouille de Boupendza arrive à Libreville le 26 mai",
          image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-20-at-12.41.24.jpeg",
          resume: "La dépouille de l’ancien international gabonais, Aaron Boupendza arrive à Libreville le lundi 26 mai prochain...",
          date: "22 Mai 2025"
        },
        {
          id: 3,
          titre: "Mbanié : un compte rendu exhaustif sera présenté au Parlement et au gouvernement (Oligui Nguema)",
          image: "https://gabonactu.com/wp-content/uploads/2025/05/carte-Gabon-Guinee-equatoriale.jpg",
          resume: "Dans une publication sur Facebook, le président gabonais a promis un compte rendu exhaustif...",
          date: "22 Mai 2025"
        },
        {
          id: 4,
          titre: "Pétrole : BW Energy reprend le contrôle du navire FPSO BW Adolo",
          image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-16.08.25.jpeg",
          resume: "Depuis mardi, la gestion du FPSO BW Adolo est reprise par BW Energy...",
          date: "21 Mai 2025"
        },
        
      ];
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <div className="articles-wrapper">
      <h1 style={{ textAlign: 'center' }}>Nos Articles Economie</h1>

      <div className="articles-container">
        {articles.map(article => (
          <motion.div
            key={article.id}
            className="article-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={article.image} alt={article.titre} className="article-image" />
            <div className="article-content">
              <h2>{article.titre}</h2>
              <p>{article.resume}</p>
              <p className="article-date">{article.date}</p>
              <Link to={`/article/${article.id}`} className="btn-voir-plus">
                <span>
                  Voir plus
                  <svg id='svgy' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                    <path fill="green" d="M4 2l5 5-5 5" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Economie;
