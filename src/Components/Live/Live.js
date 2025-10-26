import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConf';
import './Live.css';

const Live = () => {
  const [lives, setLives] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour convertir les URLs en format iframe compatible
  const getEmbedUrl = (url) => {
    if (!url) return '';

    // YouTube : https://www.youtube.com/watch?v=xxxxxx → https://www.youtube.com/embed/xxxxxx
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // YouTube short link : https://youtu.be/xxxxxx → https://www.youtube.com/embed/xxxxxx
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Facebook Live : on garde le lien tel quel (il doit déjà être un embed ou live)
    if (url.includes('facebook.com')) {
      return url;
    }

    // Twitch : https://www.twitch.tv/xxxxxx → embed Twitch
    if (url.includes('twitch.tv/')) {
      const channel = url.split('twitch.tv/')[1];
      return `https://player.twitch.tv/?channel=${channel}&parent=localhost`;
    }

    // Vimeo : https://vimeo.com/xxxxxx → https://player.vimeo.com/video/xxxxxx
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }

    // Autres liens : on tente l’embed direct
    return url;
  };

  useEffect(() => {
    const fetchLives = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'live'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLives(data);
      } catch (error) {
        console.error("Erreur lors du chargement des lives :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLives();
  }, []);

  if (loading) {
    return <p>Chargement du direct...</p>;
  }

  const liveActif = lives.find(live => live.actif);
  const prochainsLives = lives.filter(live => !live.actif);

  return (
    <div className="live-container">
      <h2>🔴 En Direct</h2>

      {liveActif ? (
        <div className="live-video">
          <iframe
            src={getEmbedUrl(liveActif.url)}
            title={liveActif.titre}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            width="100%"
            height="500px"
          ></iframe>
        </div>
      ) : (
        <p>Aucun live en cours pour le moment.</p>
      )}

      <h3>Prochains Lives</h3>
      {prochainsLives.length > 0 ? (
        <ul className="upcoming-lives">
          {prochainsLives.map(live => (
            <li key={live.id}>
              <strong>{live.titre}</strong> – {live.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>Pas encore de live prévu</p>
      )}
    </div>
  );
};

export default Live;
