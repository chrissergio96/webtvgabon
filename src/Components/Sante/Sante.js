import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConf';
import './Sante.css';
import { motion } from 'framer-motion';

const Sante = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sante"));
        const articlesData = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // Assure que les plus récents sont en premier

        setArticles(articlesData);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles santé :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Chargement des articles santé...</p>;
  }

  return (
    <div className="articles-wrapper">
      <h1 style={{ textAlign: 'center' }}>Nos Articles santé</h1>

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
              <p>{truncateText(article.resume, 100)}</p>
              <p className="article-date">{article.date}</p>
              <Link to={`/sante/${article.id}`} className="btn-voir-plus">
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

export default Sante;
