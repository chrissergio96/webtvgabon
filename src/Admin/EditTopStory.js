import React, { useEffect, useState } from 'react';
import '../admin.css';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseConf';
import AdminNavButtons from './AdminNavButtons';

const EditTopStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState({
    category: '',
    categoryColor: '',
    image: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    const fetchStory = async () => {
      const docRef = doc(db, "topStories", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStory(docSnap.data());
      } else {
        alert("Top Story introuvable");
        navigate('/admin/liste-topstories');
      }
    };

    fetchStory();
  }, [id, navigate]);

  const handleChange = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "topStories", id);
      await updateDoc(docRef, story);
      alert('Top Story mise à jour avec succès !');
      navigate('/admin/liste-topstories');
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
      alert("Erreur lors de la mise à jour");
    }
  };

  return (
    <div className="admin-login-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Modifier la Top Story</h2>

        <input
          type="text"
          name="category"
          placeholder="Catégorie"
          value={story.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="categoryColor"
          placeholder="Couleur catégorie"
          value={story.categoryColor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de l’image"
          value={story.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={story.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={story.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditTopStory;
