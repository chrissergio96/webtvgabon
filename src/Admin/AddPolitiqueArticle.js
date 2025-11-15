import React, { useState, useEffect } from 'react';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebaseConf';
import AdminNavButtons from './AdminNavButtons';

const AddPolitiqueArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    resume: '',
    auteur: '',
    date: '',
    image: '',
    introduction: ''
  });

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) navigate('/admin/login');

    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    const querySnapshot = await getDocs(collection(db, "politique"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setArticles(data);
  };

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "politique"), article);
      alert('Article politique ajouté avec succès !');
      setArticle({
        titre: '',
        resume: '',
        auteur: '',
        date: '',
        image: '',
        introduction: ''
      });
      fetchArticles();
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l’ajout');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Supprimer cet article ?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "politique", id));
      fetchArticles();
      alert("Article supprimé avec succès !");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-login-container">
          <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Ajouter un article Politique</h2>
        <input type="text" name="titre" placeholder="Titre" value={article.titre} onChange={handleChange} required />
        <textarea name="resume" placeholder="Résumé" rows="3" value={article.resume} onChange={handleChange} required></textarea>
        <textarea name="introduction" placeholder="Introduction" rows="3" value={article.introduction} onChange={handleChange} required></textarea>
        <input type="text" name="auteur" placeholder="Auteur" value={article.auteur} onChange={handleChange} required />
        <input type="date" name="date" value={article.date} onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de l’image" value={article.image} onChange={handleChange} />
        <button type="submit">Publier</button>
      </form>

      <div className="admin-list-section">
        <h3>Articles existants</h3>
        <ul>
          {articles.map((a) => (
            <li key={a.id} className="admin-article-item">
              <strong>{a.titre}</strong> - {a.date}
              <button onClick={() => navigate(`/admin/politique/edit/${a.id}`)} className="edit-btn">Modifier</button>
              <button onClick={() => handleDelete(a.id)} className="delete-btn">Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddPolitiqueArticle;
