import React, { useState, useEffect } from 'react';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const AddTopStories = () => {
  const navigate = useNavigate();
  const [story, setStory] = useState({
    titre: '',
    category: '',
    categoryColor: '',
    image: '',
    description: '',
    date: '',
  });
  

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);
  

  const handleChange = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "topStories"), {
  ...story,
  createdAt: serverTimestamp()
});

      alert('Top Story ajoutée avec succès !');
      setStory({
        titre: '',
        category: '',
        categoryColor: '',
        image: '',
        description: '',
        date: '',
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de la top story :", error);
      alert("Erreur lors de l'ajout de la top story");
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Ajouter une Top Story</h2>

        <input
          type="text"
          name="titre"
          placeholder="Titre de l'article"
          value={story.titre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Catégorie (ex: Politique, Sport...)"
          value={story.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="categoryColor"
          placeholder="Couleur catégorie (ex: red, #00ff00)"
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

        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default AddTopStories;
