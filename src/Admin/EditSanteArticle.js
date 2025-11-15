import React, { useEffect, useState } from 'react';
import '../admin.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNavButtons from './AdminNavButtons';

const EditSanteArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    resume: '',
    auteur: '',
    date: '',
    image: '',
    introduction: ''
  });
  useEffect(() => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    navigate('/admin/login');
  }
}, [navigate]);


  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "sante", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          alert("Article introuvable.");
        }
      } catch (error) {
        console.error("Erreur de chargement de l'article :", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "sante", id);
      await updateDoc(docRef, article);
      alert('Article santé mis à jour !');
      navigate('/admin/sante'); // ou autre route selon ton système
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div className="admin-login-container">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleUpdate}>
        <h2>Modifier l'article santé</h2>
        
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
          placeholder="Résumé"
          rows="4"
          value={article.resume}
          onChange={handleChange}
          required
        ></textarea>

        <textarea
          name="introduction"
          placeholder="Introduction"
          rows="4"
          value={article.introduction}
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

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditSanteArticle;
