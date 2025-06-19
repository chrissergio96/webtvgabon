// src/Admin/AddPodcast.js
import React, { useState } from "react";
import { db, storage } from "../firebaseConf";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../admin.css";

const AddPodcast = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [mediaPreview, setMediaPreview] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMediaFile(file);
    setMediaPreview(URL.createObjectURL(file));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!mediaFile || !thumbnailFile) {
    alert("Télécharger un fichier média et une miniature.");
    return;
  }
  try {
    const mediaRef = ref(storage, `podcasts/${Date.now()}_${mediaFile.name}`);
    const thumbRef = ref(storage, `thumbnails/${Date.now()}_${thumbnailFile.name}`);

    const uploadMedia = uploadBytesResumable(mediaRef, mediaFile);
    const uploadThumb = uploadBytesResumable(thumbRef, thumbnailFile);

    // Attendre fin des uploads et obtenir URLs
    const [mediaSnap, thumbSnap] = await Promise.all([
      uploadMedia,
      uploadThumb
    ]);
    const mediaUrl = await getDownloadURL(mediaSnap.ref);
    const thumbnailUrl = await getDownloadURL(thumbSnap.ref);

    // Envoi des données à Firestore
    await addDoc(collection(db, "podcasts"), {
      title,
      desc,
      mediaUrl,
      thumbnailUrl,
      category,
      duration: mediaFile.size / 5000,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    alert("Podcast ajouté !");
    navigate("/admin/liste-podcasts");

  } catch (err) {
    console.error("Erreur ajout podcast :", err);
    alert("Erreur lors de la publication");
  }
};


  return (
    <div className="form-container">
      <h2>Ajouter un podcast</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Titre"
          required
        />
        <textarea
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Catégorie"
          required
        />
        <input
          type="file"
          accept="audio/*,video/*"
          onChange={handleMediaChange}
          required
        />
        {mediaPreview && <p>Aperçu média sélectionné</p>}
        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
          required
        />
        {thumbnailPreview && (
          <img src={thumbnailPreview} alt="Miniature podcast" style={{ maxWidth: "200px", margin: "10px 0" }} />
        )}
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default AddPodcast;
