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
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!article) return <p>Aucun article trouvé.</p>;

  return (
    <div className="politique-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Retour</button>
      <h1>{article.titre}</h1>
      <p className="article-date">Publié le : {article.date}</p>
      {article.image && <img src={article.image} alt={article.titre} className="article-detail-image" />}
      <p><strong>Auteur :</strong> {article.auteur}</p> <br/>
      <h3>Introduction</h3>
      {article.introduction.split('\n').map((para, i) => <p key={i}>{para}</p>)}<br/>
      <h3>Résumé</h3>
      {article.resume.split('\n').map((para, i) => <p key={i}>{para}</p>)}
    </div>
  );
};

export default PolitiqueDetail;
