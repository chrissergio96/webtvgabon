// src/admin/ListeFocus.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const ListeFocus = () => {
  const [focusArticles, setFocusArticles] = useState([]);
  const navigate = useNavigate();

  const fetchFocusArticles = async () => {
    const snapshot = await getDocs(collection(db, 'focusArticles'));
    setFocusArticles(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
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
      <h2>Liste des articles Focus</h2>
      {focusArticles.length === 0 && <p>Aucun article trouvé.</p>}
      {focusArticles.map((item) => (
        <div key={item.id} className="admin-card">
          <h3>{item.titre}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt="Illustration" style={{ width: '150px' }} />
          <div className="admin-actions">
            <button onClick={() => handleEdit(item.id)}>Modifier</button>
            <button onClick={() => handleDelete(item.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeFocus;
