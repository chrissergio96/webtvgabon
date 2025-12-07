// src/admin/AddVideo.js
import React, { useState } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const AddVideo = () => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // Fonction pour convertir toutes les URLs en embed
  const convertToEmbed = (url) => {
    // YouTube
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Facebook
    if (url.includes('facebook.com') && !url.includes('plugins/video.php')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}&show_text=false`;
    }

    // TikTok
    if (url.includes('tiktok.com')) {
      return url.replace('www.tiktok.com', 'www.tiktok.com/embed');
    }

    // Instagram
    if (url.includes('instagram.com')) {
      return `${url}embed`;
    }

    // Si déjà embed ou autre
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const embedUrl = convertToEmbed(url);

      await addDoc(collection(db, 'videos'), {
        url,
        embedUrl,           // URL directement intégrable
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
      <AdminNavButtons />

      <h2>Ajouter une vidéo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Lien vidéo (YouTube, Facebook, TikTok, Instagram)"
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
