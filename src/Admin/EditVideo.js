// src/admin/EditVideo.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConf';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const EditVideo = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const docRef = doc(db, 'videos', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUrl(data.url);
        setDescription(data.description);
      } else {
        alert('Vidéo non trouvée.');
        navigate('/admin/liste-videos');
      }
    };

    fetchVideo();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'videos', id);
      await updateDoc(docRef, {
        url,
        description,
      });
      alert('Vidéo modifiée !');
      navigate('/admin/liste-videos');
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
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditVideo;
