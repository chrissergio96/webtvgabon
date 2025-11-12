// src/admin/ListeAllVideo.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListeAllVideo = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    const snapshot = await getDocs(collection(db, 'allvideo'));
    setVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Confirmer la suppression de cette vidéo ?")) {
      await deleteDoc(doc(db, "allvideo", id));
      fetchVideos();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/modifier-allvideo/${id}`);
  };

  return (
    <div className="admin-list">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des Vidéos (Collection AllVideo)</h2>
      {videos.length === 0 && <p>Aucune vidéo trouvée.</p>}
      {videos.map((video) => (
        <div key={video.id} className="admin-card">
          <iframe
            src={video.lien}
            title={video.titre}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="300"
            height="180"
          ></iframe>
          <div className="admin-info">
            <h3>{video.titre}</h3>
            <p>{video.description}</p>
            <p><strong>Catégorie :</strong> {video.categorie}</p>
          </div>
          <div className="admin-actions">
            <button onClick={() => handleEdit(video.id)}>Modifier</button>
            <button onClick={() => handleDelete(video.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeAllVideo;
