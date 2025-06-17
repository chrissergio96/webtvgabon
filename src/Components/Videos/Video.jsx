import React, { useState, useEffect } from 'react';
import './Video.css';
import { db } from '../../firebaseConf';
import { collection, getDocs } from 'firebase/firestore';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, 'allvideo')); // <-- nom correct ici
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(data);
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video => {
    const matchCategory =
      selectedCategory === 'Toutes' || video.categorie === selectedCategory;
    const matchSearch =
      video.titre.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="videos-section">
      <h1 className="videos-title">Nos Vidéos</h1>

      <input
        type="text"
        placeholder="Rechercher une vidéo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="filter-bar">
        {['Toutes', 'Institutionnel', 'Culture', 'Économie', 'Faits Divers', 'Religion', 'Environnement', 'Social', 'Politique', 'Sport'].map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="videos-grid">
  {filteredVideos.length > 0 ? (
    filteredVideos.map((video) => (
      <div key={video.id} className="video-card video-card-modern">
        <iframe
          src={video.lien}
          title={video.titre}
          className="video-frame"
          allowFullScreen
        ></iframe>
        <div className="video-info">
          <h2>
            {video.titre.length > 100
              ? video.titre.substring(0, 100) + '...'
              : video.titre}
          </h2>
          <p>
            {video.description.length > 150
              ? video.description.substring(0, 150) + '...'
              : video.description}
          </p>
        </div>
      </div>
    ))
  ) : (
    <p className="no-results">Aucune vidéo ne correspond à votre recherche.</p>
  )}
</div>

    </div>
  );
};

export default Video;
