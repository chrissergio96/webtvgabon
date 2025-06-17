import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConf'; // adapter si besoin
import './DetailsArticles.css'; // optionnel

const DetailsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log('Aucun article trouvé');
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <p>Chargement...</p>;

  return (
   <div className="details-container">
    <div className="details-header">
      <h1 className="details-title">{article.titre}</h1>
    </div>

    <div className="details-content-wrapper">
      <img src={article.image} alt={article.titre} className="details-image" />
      <div className="details-text">
        <p className="details-resume">{article.resume}</p>
      </div>
    </div>

    <div className="details-meta">
      <p>Par <strong>{article.auteur}</strong></p>
      <p>Publié le {article.date}</p>
    </div>
  </div>
  );
};

export default DetailsArticle;
