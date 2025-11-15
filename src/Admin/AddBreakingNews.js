import React, { useState, useEffect } from 'react';
import './AddBreakingNews.css';
import { db } from '../firebaseConf';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import AdminNavButtons from './AdminNavButtons';

const AddBreakingNews = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchBreakingNews = async () => {
    const querySnapshot = await getDocs(collection(db, "breakingnews"));
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setNewsList(data);
  };

  useEffect(() => {
    fetchBreakingNews();
  }, []);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    if (!text || !image) {
      setMessage("Tous les champs sont obligatoires.");
      return;
    }

    try {
      if (editMode) {
        // 🔁 Mettre à jour
        const newsRef = doc(db, "breakingnews", editId);
        await updateDoc(newsRef, { text, image });
        setMessage("News mise à jour avec succès !");
      } else {
        // ➕ Ajouter
        await addDoc(collection(db, "breakingnews"), { text, image });
        setMessage("News ajoutée avec succès !");
      }

      // Réinitialiser le formulaire
      setText('');
      setImage('');
      setEditMode(false);
      setEditId(null);
      fetchBreakingNews();
    } catch (err) {
      console.error("Erreur :", err);
      setMessage("Échec de l'opération !");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "breakingnews", id));
      setMessage("News supprimée !");
      fetchBreakingNews();
    } catch (err) {
      console.error("Erreur suppression :", err);
      setMessage("Échec de la suppression !");
    }
  };

  const handleEdit = (news) => {
    setText(news.text);
    setImage(news.image);
    setEditId(news.id);
    setEditMode(true);
    setMessage('');
  };

  return (
    <div className="admin-login-container2">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form2" onSubmit={handleAddOrUpdate}>
        <h2>{editMode ? "Modifier une Breaking News" : "Ajouter une Breaking News"}</h2>
        {message && <p>{message}</p>}
        <input
          type="text"
          placeholder="Texte de la news"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lien image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">{editMode ? "Mettre à jour" : "Ajouter"}</button>
        {editMode && (
          <button
            type="button"
            onClick={() => {
              setEditMode(false);
              setText('');
              setImage('');
              setEditId(null);
              setMessage('');
            }}
            style={{ backgroundColor: 'gray', marginLeft: '10px' }}
          >
            Annuler
          </button>
        )}
      </form>

      <h3>Liste des News</h3>
      <ul>
        {newsList.map(news => (
          <li key={news.id} style={{ marginBottom: '10px' }}>
            <img src={news.image} alt="preview" style={{ width: '60px', marginRight: '10px' }} />
            {news.text}
            <button
              onClick={() => handleEdit(news)}
              style={{ marginLeft: '10px', backgroundColor: 'blue', color: 'white' }}
            >
              Modifier
            </button>
            <button
              onClick={() => handleDelete(news.id)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBreakingNews;
