import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import AdminNavButtons from './AdminNavButtons';

const AddEconomieArticle = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    resume: '',
    introduction: '',
    auteur: '',
    date: '',
    image: ''
  });

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) navigate('/admin/login');
    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    const querySnapshot = await getDocs(collection(db, "economie"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setArticles(data);
  };

  const handleChange = e => setArticle({ ...article, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "economie"), article);
      alert('Article Économie ajouté !');
      setArticle({ titre: '', resume: '', introduction: '', auteur: '', date: '', image: '' });
      fetchArticles();
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout');
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Supprimer cet article ?')) return;
    try {
      await deleteDoc(doc(db, 'economie', id));
      fetchArticles();
      alert('Article supprimé !');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-login-container">
          <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Ajouter un article Économie</h2>
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
          {articles.map(a => (
            <li key={a.id} className="admin-article-item">
              <strong>{a.titre}</strong> — {a.date}
              <button onClick={() => navigate(`/admin/economie/edit/${a.id}`)} className="edit-btn">Modifier</button>
              <button onClick={() => handleDelete(a.id)} className="delete-btn">Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddEconomieArticle;
