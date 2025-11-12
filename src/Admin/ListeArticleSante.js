import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListeArticleSante = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "sante"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setArticles(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles santé :", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Confirmer la suppression de cet article ?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "sante", id));
        fetchArticles(); // Mise à jour de la liste après suppression
        alert("Article supprimé avec succès !");
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        alert("Erreur lors de la suppression");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/sante/edit/${id}`);
  };

  return (
    <div className="admin-articles-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des articles santé</h2>
      {articles.length === 0 ? (
        <p>Aucun article disponible pour le moment.</p>
      ) : (
        articles.map(article => (
          <div key={article.id} className="admin-article-card">
            <h3>{article.titre}</h3>
            <img src={article.image} alt={article.titre} className="admin-article-img" />
            <p><strong>Auteur :</strong> {article.auteur}</p>
            <p><strong>Date :</strong> {article.date}</p>
            <div className="admin-actions">
              <button onClick={() => handleEdit(article.id)}>Modifier</button>
              <button onClick={() => handleDelete(article.id)} className="danger">Supprimer</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListeArticleSante;
