import React, { useState, useEffect } from 'react';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConf'; // adapte le chemin
import AdminNavButtons from './AdminNavButtons';

const AddArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    contenu: '',
    auteur: '',
    date: '',
    image: ''
  });

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);
  
  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };
sessionStorage.setItem('isLoggedIn', 'true');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "articles"), article);
      alert('Article ajouté avec succès !');
      setArticle({
        titre: '',
        resume: '',
        auteur: '',
        date: '',
        image: ''
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
      alert("Erreur lors de l'ajout de l'article");
    }
  };

  return (
    <div className="admin-login-container">

  <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Ajouter un article(page article)</h2>

        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={article.titre}
          onChange={handleChange}
          required
        />
        <textarea
          name="resume"
          placeholder="Resume"
          rows="5"
          value={article.resume}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="auteur"
          placeholder="Auteur"
          value={article.auteur}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={article.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de l’image"
          value={article.image}
          onChange={handleChange}
        />

        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default AddArticle;
