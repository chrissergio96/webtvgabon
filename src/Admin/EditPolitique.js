import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConf";
import "../admin.css";
import AdminNavButtons from "./AdminNavButtons";

const EditPolitique = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({
    titre: "",
    resume: "",
    introduction: "",
    auteur: "",
    date: "",
    image: ""
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "politique", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          alert("Aucun article trouvé avec cet ID.");
          navigate("/admin/liste-politique");
        }
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, navigate]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "politique", id);
      await updateDoc(docRef, article);
      alert("Article politique mis à jour avec succès !");
      navigate("/admin/liste-politique");
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Erreur lors de la mise à jour.");
    }
  };

  if (loading) return <p>Chargement en cours...</p>;

  return (
    <div className="admin-form-container">
           <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Modifier un article Politique</h2>
      <form onSubmit={handleSubmit}>
        <label>Titre</label>
        <input
          type="text"
          name="titre"
          value={article.titre}
          onChange={handleChange}
          required
        />

        <label>Résumé</label>
        <textarea
          name="resume"
          rows="3"
          value={article.resume}
          onChange={handleChange}
          required
        ></textarea>

        <label>Introduction</label>
        <textarea
          name="introduction"
          rows="4"
          value={article.introduction}
          onChange={handleChange}
          required
        ></textarea>

        <label>Auteur</label>
        <input
          type="text"
          name="auteur"
          value={article.auteur}
          onChange={handleChange}
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={article.date}
          onChange={handleChange}
          required
        />

        <label>Image (URL)</label>
        <input
          type="text"
          name="image"
          value={article.image}
          onChange={handleChange}
          placeholder="URL de l'image"
        />

        <button type="submit" className="btn-save">Mettre à jour</button>
        <button type="button" className="btn-cancel" onClick={() => navigate(-1)}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default EditPolitique;
