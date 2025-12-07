import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListeVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    const q = query(collection(db, 'videos'), orderBy('date', 'desc'));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map(doc => {
      const docData = doc.data();
      return {
        id: doc.id,
        ...docData,
        date: docData.date?.toDate ? docData.date.toDate().toLocaleString('fr-FR') : ''
      };
    });

    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Confirmer la suppression de cette vidéo ?")) {
      await deleteDoc(doc(db, "videos", id));
      fetchVideos();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/modifier-video/${id}`);
  };

  // ✅ CONVERSION AUTOMATIQUE EN LIEN EMBED
  const convertToEmbed = (url) => {

    // ✅ YouTube
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes('youtu.be')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // ✅ Facebook
    if (url.includes('facebook.com') && !url.includes('plugins/video.php')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
    }

    // ✅ TikTok
    if (url.includes('tiktok.com')) {
      return url.replace('www.tiktok.com', 'www.tiktok.com/embed');
    }

    // ✅ Instagram
    if (url.includes('instagram.com')) {
      return `${url}embed`;
    }

    // ✅ Déjà un lien embed
    return url;
  };

  return (
    <div className="admin-list">
      <AdminNavButtons />
      <h2>Liste des Vidéos</h2>

      {videos.length === 0 && <p>Aucune vidéo trouvée.</p>}

      {videos.map((video) => (
        <div key={video.id} className="admin-card">
          <iframe
            src={convertToEmbed(video.url)}   // ✅ ICI LA MAGIE
            title={video.description}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="300"
            height="180"
          ></iframe>

          <p>{video.description}</p>
          <small style={{ color: '#555' }}>Publié le : {video.date}</small>

          <div className="admin-actions">
            <button onClick={() => handleEdit(video.id)}>Modifier</button>
            <button onClick={() => handleDelete(video.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeVideos;
