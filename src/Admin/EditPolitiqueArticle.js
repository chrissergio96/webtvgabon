import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../admin.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import AdminNavButtons from './AdminNavButtons';

const EditPolitiqueArticle = () => {
  const { id } = useParams(); // récupère l'ID de l'article
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    titre: '',
    resume: '',
    auteur: '',
    date: '',
    image: '',
    introduction: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'politique', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          alert("Aucun article trouvé !");
          navigate('/admin/liste-politique');
        }
      } catch (error) {
        console.error("Erreur récupération article :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, navigate]);

  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'politique', id);
      await updateDoc(docRef, article);
      alert('Article mis à jour avec succès !');
      navigate('/admin/liste-politique');
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Erreur lors de la mise à jour");
    }
  };

  if (loading) return <p>Chargement de l'article...</p>;

  return (
    <div className="admin-login-container">
          <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleUpdate}>
        <h2>Modifier l'article Politique</h2>
        <input type="text" name="titre" placeholder="Titre" value={article.titre} onChange={handleChange} required />
        <textarea name="resume" placeholder="Résumé" rows="3" value={article.resume} onChange={handleChange} required></textarea>
        <textarea name="introduction" placeholder="Introduction" rows="3" value={article.introduction} onChange={handleChange} required></textarea>
        <input type="text" name="auteur" placeholder="Auteur" value={article.auteur} onChange={handleChange} required />
        <input type="date" name="date" value={article.date} onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de l’image" value={article.image} onChange={handleChange} />

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditPolitiqueArticle;
