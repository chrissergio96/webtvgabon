import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListeFocus = () => {
  const [focusArticles, setFocusArticles] = useState([]);
  const navigate = useNavigate();

  const fetchFocusArticles = async () => {
    const snapshot = await getDocs(collection(db, 'focusArticles'));
    const articles = snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data(),
}));

// Tri du plus récent au plus ancien (en fonction du champ `date`)
articles.sort((a, b) => {
  const dateA = a.date?.toDate?.() || new Date(0); // valeur minimale si pas de date
  const dateB = b.date?.toDate?.() || new Date(0);
  return dateB - dateA; // décroissant
});

setFocusArticles(articles);

  };

  useEffect(() => {
    fetchFocusArticles();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer cet article ?')) {
      await deleteDoc(doc(db, 'focusArticles', id));
      fetchFocusArticles();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/modifier-focus/${id}`);
  };

  return (
    <div className="admin-list">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des articles Focus</h2>
      {focusArticles.length === 0 && <p>Aucun article trouvé.</p>}
      {focusArticles.map((item) => {
        const dateAffichee = item.date?.toDate?.().toLocaleString() || 'Date inconnue';
        return (
          <div key={item.id} className="admin-card">
            <h3>{item.titre}</h3>
            <p><strong>Auteur :</strong> {item.auteur || 'Inconnu'}</p>
            <p><strong>Date :</strong> {dateAffichee}</p>
            <p>{item.description}</p>
            <img src={item.image} alt="Illustration" style={{ width: '150px' }} />
            <div className="admin-actions">
              <button onClick={() => handleEdit(item.id)}>Modifier</button>
              <button onClick={() => handleDelete(item.id)} className="danger">Supprimer</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListeFocus;
