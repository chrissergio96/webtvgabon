// src/admin/ListeVideos.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const ListeVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    const snapshot = await getDocs(collection(db, 'videos'));
    setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
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

  return (
    <div className="admin-list">
      <h2>Liste des Vidéos</h2>
      {videos.length === 0 && <p>Aucune vidéo trouvée.</p>}
      {videos.map((video) => (
        <div key={video.id} className="admin-card">
          <iframe
            src={video.url}
            title={video.description}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="300"
            height="180"
          ></iframe>
          <p>{video.description}</p>
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
