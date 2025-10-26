// src/admin/ListeLive.js
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConf";
import { useNavigate } from "react-router-dom";
import "../admin.css";

const ListeLive = () => {
  const [lives, setLives] = useState([]);
  const navigate = useNavigate();

  const fetchLives = async () => {
    const querySnapshot = await getDocs(collection(db, "live"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLives(data);
  };

  useEffect(() => {
    fetchLives();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Confirmer la suppression de ce live ?");
    if (confirmDelete) {
      await deleteDoc(doc(db, "live", id));
      fetchLives();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-live/${id}`);
  };

  const handleToggleActif = async (id, currentStatus) => {
    try {
      // Désactive tous les autres lives si celui-ci devient actif
      if (!currentStatus) {
        const querySnapshot = await getDocs(collection(db, "live"));
        querySnapshot.forEach(async (document) => {
          const liveRef = doc(db, "live", document.id);
          await updateDoc(liveRef, { actif: false });
        });
      }

      // Active/Désactive le live choisi
      const liveRef = doc(db, "live", id);
      await updateDoc(liveRef, { actif: !currentStatus });
      fetchLives();
    } catch (error) {
      console.error("Erreur lors du changement de statut :", error);
    }
  };

  return (
    <div className="admin-articles-container">
      <h2>Liste des Lives</h2>

      {lives.length === 0 ? (
        <p>Aucun live enregistré.</p>
      ) : (
        lives.map((live) => (
          <div key={live.id} className="admin-article-card">
            <h3>{live.titre}</h3>
            <p><strong>Date :</strong> {live.date}</p>
            <p><strong>URL :</strong> <a href={live.url} target="_blank" rel="noreferrer">{live.url}</a></p>
            <p><strong>Statut :</strong> {live.actif ? "🟢 Actif" : "🔴 Inactif"}</p>

            <div className="admin-actions">
              <button onClick={() => handleEdit(live.id)}>Modifier</button>
              <button onClick={() => handleToggleActif(live.id, live.actif)}>
                {live.actif ? "Désactiver" : "Activer"}
              </button>
              <button onClick={() => handleDelete(live.id)} className="danger">Supprimer</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListeLive;
