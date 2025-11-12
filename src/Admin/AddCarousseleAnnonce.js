// src/admin/AddCarousseleAnnonce.js
import React, { useState } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const AddCarousseleAnnonce = () => {
  const [secteur, setSecteur] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [order, setOrder] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'carousseleAnnonce'), {
        secteur, title, link, image,
        date: date || null,
        order: Number(order),
        createdAt: serverTimestamp(),
      });
      alert('Annonce ajoutée !');
      navigate('/admin/liste-caroussele');
    } catch (err) {
      console.error('Erreur ajout annonce :', err);
      alert('Erreur à l\'ajout');
    }
  };

  return (
    <div className="form-container">
         <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Ajouter une annonce , fait divers , vente(2e carousel)</h2>
      <form onSubmit={handleSubmit}>
        <input name="secteur" placeholder="Secteur (ex: Football)" value={secteur} onChange={e => setSecteur(e.target.value)} required />
        <input name="title" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} required />
        <input name="link" placeholder="Chemin (route interne)" value={link} onChange={e => setLink(e.target.value)} required />
        <input name="image" placeholder="Image (URL)" value={image} onChange={e => setImage(e.target.value)} required />
        <input type="date" name="date" placeholder="Date (optionnel)" value={date} onChange={e => setDate(e.target.value)} />
        <input type="number" name="order" placeholder="Ordre" value={order} onChange={e => setOrder(e.target.value)} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddCarousseleAnnonce;
