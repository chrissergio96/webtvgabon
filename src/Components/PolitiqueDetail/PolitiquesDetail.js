import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConf';
import './PolitiqueDetail.css';

const PolitiqueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'politique', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          console.error("Aucun article trouvé avec cet ID");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Chargement de l'article...</p>;
  if (!article) return <p>Aucun article trouvé.</p>;

  return (
    <div className="politique-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Retour</button>

      <h1>{article.titre}</h1>
      <p className="article-date">Publié le : {article.date}</p>
      <img src={article.image} alt={article.titre} className="article-detail-image" />
      <p><strong>Auteur :</strong> {article.auteur}</p>

      <h3>Introduction</h3>
      <p className="article-content">{article.introduction}</p>

      <h3>Résumé</h3>
      <p className="article-content">{article.resume}</p>
    </div>
  );
};

export default PolitiqueDetail;
