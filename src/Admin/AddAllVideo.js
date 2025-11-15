// src/admin/AddAllVideo.js
import React, { useState } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const AddAllVideo = () => {
  const [lien, setLien] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [categorie, setCategorie] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'allvideo'), {
        lien,
        titre,
        description,
        categorie,
        date: serverTimestamp(),
      });
      alert('Vidéo ajoutée à allvideo !');
      navigate('/admin/liste-allvideos'); // Rediriger vers la liste
    } catch (error) {
      console.error('Erreur ajout allvideo:', error);
    }
  };

  return (
    <div className="form-container">
            <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Ajouter une vidéo à la collection AllVideo</h2>
      <form onSubmit={handleSubmit}>
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
          placeholder="Catégorie (ex: Culture, Sport...)"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddAllVideo;
