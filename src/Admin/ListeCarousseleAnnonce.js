// src/admin/ListeCarousseleAnnonce.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const ListeCarousseleAnnonce = () => {
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  const fetchSlides = async () => {
    const q = query(collection(db, 'carousseleAnnonce'), orderBy('order', 'asc'));
    const snap = await getDocs(q);
    const arr = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    setSlides(arr);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer cette annonce ?')) {
      await deleteDoc(doc(db, 'carousseleAnnonce', id));
      fetchSlides();
    }
  };

  const handleEdit = (id) => navigate(`/admin/modifier-carroussele/${id}`);

  return (
    <div className="admin-list">
      <h2>Liste des annonces (Carrousel)</h2>
      {slides.length === 0 && <p>Aucune annonce trouvée.</p>}
      {slides.map(item => (
        <div key={item.id} className="admin-card">
          <h3>{item.title}</h3>
          <p><strong>Secteur :</strong> {item.secteur}</p>
          {item.date && <p><strong>Date :</strong> {new Date(item.date).toLocaleDateString()}</p>}
          <p><strong>Ordre :</strong> {item.order}</p>
          <img src={item.image} alt={item.title} style={{ width: '150px' }} />
          <div className="admin-actions">
            <button onClick={() => handleEdit(item.id)}>Modifier</button>
            <button onClick={() => handleDelete(item.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeCarousseleAnnonce;
