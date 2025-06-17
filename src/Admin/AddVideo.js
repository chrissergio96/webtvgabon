// src/admin/AddVideo.js
import React, { useState } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const AddVideo = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'videos'), {
        url,
        description,
        date: serverTimestamp(),
      });
      alert('Vidéo ajoutée !');
      navigate('/admin/liste-videos');
    } catch (error) {
      console.error('Erreur ajout vidéo:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Ajouter une vidéo YouTube</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Lien YouTube"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddVideo;
