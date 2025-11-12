// src/admin/ListePublicite.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListePublicite = () => {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  const fetchAds = async () => {
    const snapshot = await getDocs(collection(db, 'publicite'));
    const fetched = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    // Tri par ordre croissant selon 'order'
    fetched.sort((a, b) => (a.order || 0) - (b.order || 0));
    setAds(fetched);
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer cette publicité ?')) {
      await deleteDoc(doc(db, 'publicite', id));
      fetchAds();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/modifier-publicite/${id}`);
  };

  return (
    <div className="admin-list">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des Publicités</h2>
      {ads.length === 0 && <p>Aucune publicité trouvée.</p>}
      {ads.map((ad) => {
        const dateAffichée = ad.date?.toDate?.().toLocaleString() || 'Date inconnue';
        return (
          <div key={ad.id} className="admin-card">
            <img src={ad.imageUrl} alt={ad.altText || 'Pub'} style={{ width: '150px' }} />
            <p><strong>Lien :</strong> <a href={ad.link} target="_blank" rel="noopener noreferrer">{ad.link}</a></p>
            <p><strong>Tirage :</strong> {dateAffichée}</p>
            <p><strong>Ordre :</strong> {ad.order || '—'}</p>
            <div className="admin-actions">
              <button onClick={() => handleEdit(ad.id)}>Modifier</button>
              <button onClick={() => handleDelete(ad.id)} className="danger">Supprimer</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListePublicite;
