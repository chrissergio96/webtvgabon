// src/Admin/ListePodcast.js
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConf";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../admin.css";
import AdminNavButtons from "./AdminNavButtons";

const ListePodcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const navigate = useNavigate();

  const fetchPodcasts = async () => {
    const q = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    setPodcasts(list);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce podcast ?")) {
      await deleteDoc(doc(db, "podcasts", id));
      fetchPodcasts();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/modifier-podcast/${id}`);
  };

  return (
    <div className="admin-list">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des Podcasts</h2>
      {podcasts.length === 0 && <p>Aucun podcast trouvé.</p>}
      {podcasts.map(p => (
        <div key={p.id} className="admin-card">
          <h3>{p.title}</h3>
          <p><strong>Categorie:</strong> {p.category}</p>
          <p><strong>Date:</strong> {p.createdAt?.toDate?.().toLocaleString() || "-"}</p>
          <p>{p.desc}</p>
          
          {p.thumbnailUrl && (
            <img src={p.thumbnailUrl} alt={p.title} style={{ width: "150px", borderRadius: "6px" }} />
          )}
          
          {p.mediaUrl && (
            p.mediaUrl.match(/\.(mp3|wav|ogg)$/i) ? (
              <audio controls src={p.mediaUrl} style={{ marginTop: "10px" }} />
            ) : (
              <video controls src={p.mediaUrl} style={{ marginTop: "10px", maxWidth: "100%" }} />
            )
          )}
          
          <div className="admin-actions">
            <button onClick={() => handleEdit(p.id)}>Modifier</button>
            <button onClick={() => handleDelete(p.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListePodcast;
