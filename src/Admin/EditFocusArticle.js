// src/admin/EditFocusArticle.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConf';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const EditFocusArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'focusArticles', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitre(data.titre);
        setDescription(data.description);
        setImage(data.image);
      } else {
        alert("Article non trouvé.");
        navigate('/admin/liste-focus');
      }
    };

    fetchArticle();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'focusArticles', id);
      await updateDoc(docRef, {
        titre,
        description,
        image,
      });
      alert('Article mis à jour avec succès.');
      navigate('/admin/liste-focus');
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Erreur de mise à jour.");
    }
  };

  return (
    <div className="form-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Modifier l’article Focus</h2>
      <form onSubmit={handleUpdate}>
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
          placeholder="URL de l’image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditFocusArticle;
