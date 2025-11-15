import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const AddPublicite = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');
  const [altText, setAltText] = useState('');
  const [order, setOrder] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'publicite'), {
        imageUrl, link, altText, order,
        createdAt: serverTimestamp()
      });
      alert('Publicité ajoutée !');
      navigate('/admin/liste-publicite');
    } catch(err) {
      console.error(err);
      alert('Erreur ajout publicité');
    }
  };

  return (
    <div className="form-container">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Ajouter une publicité</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />
        <input type="text" placeholder="Lien" value={link} onChange={e => setLink(e.target.value)} required />
        <input type="text" placeholder="Alt text" value={altText} onChange={e => setAltText(e.target.value)} />
        <input type="number" placeholder="Ordre" value={order} onChange={e => setOrder(parseInt(e.target.value,10))} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPublicite;
