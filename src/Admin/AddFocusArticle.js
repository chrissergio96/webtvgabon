// src/admin/AddFocusArticle.js
import React, { useState } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const AddFocusArticle = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [auteur, setAuteur] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'focusArticles'), {
        titre,
        description,
        image,
        auteur, // 👈 nouveau champ
        date: serverTimestamp(),
      });
      alert('Article Focus ajouté !');
      navigate('/admin/liste-focus');
    } catch (error) {
      console.error('Erreur ajout:', error);
    }
  };

  return (
    <div className="form-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Ajouter un article Récent</h2>
      <form onSubmit={handleSubmit}>
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
  placeholder="Nom de l’auteur"
  value={auteur}
  onChange={(e) => setAuteur(e.target.value)}
  required
/>

        <input
          type="text"
          placeholder="URL de l’image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddFocusArticle;
