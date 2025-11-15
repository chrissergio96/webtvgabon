import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import AdminNavButtons from './AdminNavButtons';

const ListeEconomie = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem('isLoggedIn')) navigate('/admin/login');
    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    const querySnapshot = await getDocs(collection(db, 'economie'));
    setArticles(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleDelete = async id => {
    if (!window.confirm('Supprimer cet article ?')) return;
    await deleteDoc(doc(db, 'economie', id));
    fetchArticles();
    alert('Article supprimé !');
  };

  return (
    <div className="admin-list-section">
          <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des articles Économie</h2>
      {articles.length === 0 ? <p>Aucun article disponible.</p> :
        <ul>
          {articles.map(a => (
            <li key={a.id} className="admin-article-item">
              <strong>{a.titre}</strong> — {a.date}
              <button onClick={() => navigate(`/admin/economie/edit/${a.id}`)} className="edit-btn">Modifier</button>
              <button onClick={() => handleDelete(a.id)} className="delete-btn">Supprimer</button>
            </li>
          ))}
        </ul>}
    </div>
  );
};

export default ListeEconomie;
