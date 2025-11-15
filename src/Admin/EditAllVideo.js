// src/admin/EditAllVideo.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConf';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const EditAllVideo = () => {
  const [lien, setLien] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [categorie, setCategorie] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const docRef = doc(db, 'allvideo', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLien(data.lien);
        setTitre(data.titre);
        setDescription(data.description);
        setCategorie(data.categorie);
      } else {
        alert('Vidéo non trouvée.');
        navigate('/admin/liste-allvideos');
      }
    };

    fetchVideo();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'allvideo', id);
      await updateDoc(docRef, {
        lien,
        titre,
        description,
        categorie,
      });
      alert('Vidéo modifiée avec succès !');
      navigate('/admin/liste-allvideos');
    } catch (error) {
      console.error('Erreur de mise à jour:', error);
    }
  };

  return (
    <div className="form-container">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Modifier la vidéo</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Lien YouTube"
          value={lien}
          onChange={(e) => setLien(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Catégorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          required
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditAllVideo;
