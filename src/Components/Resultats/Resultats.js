// src/components/Resultats.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../SearchContent/SearchContent'; // à adapter selon ton arborescence

const Resultats = ({ data }) => {
  const { query } = useSearch();

  const filtered = data.filter(item =>
    item.titre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="articles-container">
      {filtered.map(article => (
        <div key={article.id} className="article-card">
          <img src={article.image} alt={article.titre} className="article-image" />
          <div className="article-content">
            <h2>{article.titre}</h2>
            <p>{article.resume}</p>
            <p style={{ color: 'gray', fontWeight: 'bold', marginTop: '5px' }}>{article.date}</p>
            <Link to={`/article/${article.id}`} className="btn-voir-plus">
              <span>
                Voir plus
                <svg id='svgy' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="green" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resultats;
