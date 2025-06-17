import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConf';
import './TopStoryDetail.css'; // tu peux créer ce fichier CSS pour le style

const TopStoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const docRef = doc(db, 'topStories', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStory(docSnap.data());
        } else {
          alert('Top Story non trouvée.');
          navigate('/'); // redirige vers accueil si id invalide
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la Top Story :", error);
        alert('Erreur lors du chargement.');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id, navigate]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!story) {
    return null; // ou message d'erreur si tu préfères
  }

  return (
    <section className="topstory-detail">
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        ← Retour
      </button>
      <h1 style={{ color: 'red' }}>{story.titre}</h1>
      <h3 style={{ background: story.categoryColor, padding: '5px', display: 'inline-block' }}>
        {story.category}
      </h3>
      <p><em>Date : {story.date}</em></p>
      <img src={story.image} alt={story.category} style={{ maxWidth: '100%', margin: '20px 0' }} />
      <p style={{ whiteSpace: 'pre-line', fontSize: '18px' }}>{story.description}</p>
    </section>
  );
};

export default TopStoryDetail;
