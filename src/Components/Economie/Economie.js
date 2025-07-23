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
          id: 1,
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
