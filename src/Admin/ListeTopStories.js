import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConf';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import AdminNavButtons from './AdminNavButtons';

const ListeTopStories = () => {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  const fetchStories = async () => {
    const querySnapshot = await getDocs(collection(db, "topStories"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setStories(data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Confirmer la suppression de cette Top Story ?")) {
      await deleteDoc(doc(db, "topStories", id));
      fetchStories();
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-topstory/${id}`);
  };

  return (
    <div className="admin-articles-container">
        <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des Top Stories</h2>
      {stories.length === 0 && <p>Aucune Top Story trouvée.</p>}
      {stories.map(story => (
        <div key={story.id} className="admin-article-card">
          <h3 style={{ backgroundColor: story.categoryColor, padding: '5px' }}>
            {story.category}
          </h3>
          <img
            src={story.image}
            alt={story.category}
            style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
          />
          <p>{story.description}</p>

          {/* ✅ Affichage propre de la date */}
          {story.date && story.date.toDate && (
            <p>
              <strong>Date :</strong>{" "}
              {story.date.toDate().toLocaleDateString("fr-FR", {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          )}

          <div className="admin-actions">
            <button onClick={() => handleEdit(story.id)}>Modifier</button>
            <button onClick={() => handleDelete(story.id)} className="danger">Supprimer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListeTopStories;
