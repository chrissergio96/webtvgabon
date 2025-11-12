// src/admin/AddCarouselItem.js
import React, { useState, useEffect } from 'react';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import AdminNavButtons from './AdminNavButtons';

const AddCarouselItem = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState({
    secteur: '',
    title: '',
    date: '',
    image: '',
    link: ''
  });

  useEffect(() => {
    if (!sessionStorage.getItem('isLoggedIn')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleChange = e => {
    setSlide({ ...slide, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'carouselSlides'), {
        ...slide,
        date: slide.date || '',
        createdAt: serverTimestamp()
      });
      alert('Slide Carousel ajouté !');
      setSlide({ secteur:'', title:'', date:'', image:'', link:'' });
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout');
    }
  };

  return (
    <div className="form-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Ajouter une info internationnal ou autres (1er carousel)</h2>
      <form onSubmit={handleSubmit}>
        <input name="secteur" placeholder="Secteur" value={slide.secteur} onChange={handleChange} required/>
        <input name="title" placeholder="Titre" value={slide.title} onChange={handleChange} required/>
        <input name="date" type="text" placeholder="Date (optionnelle)" value={slide.date} onChange={handleChange}/>
        <input name="image" placeholder="URL de l'image" value={slide.image} onChange={handleChange} required/>
        <input name="link" placeholder="Lien vers article" value={slide.link} onChange={handleChange} required/>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddCarouselItem;
