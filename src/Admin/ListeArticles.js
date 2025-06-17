import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const ListeArticles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Confirmer la suppression de cet article ?");
    if (confirmDelete) {
      await deleteDoc(doc(db, "articles", id));
      fetchArticles(); // Rafraîchir la liste
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-article/${id}`);
  };

  return (
    <div className="admin-articles-container">
      <h2>Liste des articles</h2>
      {articles.map(article => (
        <div key={article.id} className="admin-article-card">
          <h3>{article.titre}</h3>
         <img src={article.image} alt={article.titre} />          <p><strong>Auteur :</strong> {article.auteur}</p>
          <p><strong>Date :</strong> {article.date}</p>
          <div className="admin-actions">
            <button onClick={() => handleEdit(article.id)}>Modifier</button>
            <button onClick={() => handleDelete(article.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeArticles;
