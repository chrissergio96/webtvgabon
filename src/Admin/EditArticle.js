import React, { useEffect, useState } from 'react';
import '../admin.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useParams, useNavigate } from 'react-router-dom';
import AdminNavButtons from './AdminNavButtons';

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    resume: '',
    auteur: '',
    date: '',
    image: ''
  });

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      }
    };
    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "articles", id);
    await updateDoc(docRef, article);
    alert('Article mis à jour !');
    navigate('/admin/liste-articles');
  };

  return (
    <div className="admin-login-container">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleUpdate}>
        <h2>Modifier l'article</h2>
        <input type="text" name="titre" placeholder="Titre" value={article.titre} onChange={handleChange} required />
        <textarea name="resume" placeholder="Resume" rows="5" value={article.resume} onChange={handleChange} required />
        <input type="text" name="auteur" placeholder="Auteur" value={article.auteur} onChange={handleChange} required />
        <input type="date" name="date" value={article.date} onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de l’image" value={article.image} onChange={handleChange} />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditArticle;
