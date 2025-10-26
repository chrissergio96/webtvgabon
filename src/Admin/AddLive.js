// src/admin/AddLive.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConf";
import { useNavigate } from "react-router-dom";
import "../admin.css";

const AddLive = () => {
  const [titre, setTitre] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [actif, setActif] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titre || !url || !date) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    try {
      await addDoc(collection(db, "live"), {
        titre,
        url,
        date,
        actif,
      });
      alert("Live ajouté avec succès !");
      navigate("/admin/liste-live");
    } catch (error) {
      console.error("Erreur lors de l’ajout :", error);
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Ajouter un Live</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre du Live</label>
        <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />

        <label>URL du Live (YouTube, Facebook, etc.)</label>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />

        <label>Date du Live</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>
          <input type="checkbox" checked={actif} onChange={(e) => setActif(e.target.checked)} />
          Live actif
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default AddLive;
