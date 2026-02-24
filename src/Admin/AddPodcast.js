import React, { useState } from "react";
import { db, storage } from "../firebaseConf";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AdminNavButtons from "./AdminNavButtons";
import "../admin.css";

const AddPodcast = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const detectType = (url) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
    if (url.match(/\.(mp3|wav|ogg)$/i)) return "audio";
    if (url.match(/\.(mp4|webm)$/i)) return "video";
    return "audio";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let mediaUrl = link;
      let type = detectType(link);

      // ✅ Upload fichier local
      if (file) {
        const storageRef = ref(storage, `podcasts/audio/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        mediaUrl = await getDownloadURL(storageRef);
        type = "audio";
      }

      await addDoc(collection(db, "podcasts"), {
        title,
        description,
        mediaUrl,
        type,
        createdAt: serverTimestamp(),
      });

      alert("Podcast ajouté !");
      setTitle("");
      setDescription("");
      setLink("");
      setFile(null);
    } catch (err) {
      console.error("Erreur ajout podcast :", err);
      alert("Erreur lors de l'ajout");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <AdminNavButtons />
      <h2>Ajouter un podcast</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du podcast"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          placeholder="Lien média (YouTube, mp3, mp4...) — optionnel"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <p style={{ textAlign: "center", margin: "10px 0" }}>OU</p>

        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Ajout en cours..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
};

export default AddPodcast;
