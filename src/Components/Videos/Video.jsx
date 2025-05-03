import React, { useState } from 'react';
import './Video.css';

const videos = [
  {
    id: 1,
    titre: "Discours du Maire – Rentrée 2025",
    description: "Message du Maire sur les perspectives de l’année.",
    lien: "https://www.youtube.com/embed/8pUi7s2QwwI",
    miniature: "https://img.youtube.com/vi/8pUi7s2QwwI/hqdefault.jpg",
    categorie: "Institutionnel",
  },
  {
    id: 2,
    titre: "Gabon Culture :",
    description: " Black History Arts, C’est parti pour un mois de renaissance vers la créativité .",
    lien: "https://www.youtube.com/embed/YYLvdUEfdag",
    miniature: "https://www.youtube.com/embed/YYLvdUEfdag",
    categorie: "Culture",
  },
  {
    id: 3,
    titre: "Interview avec les jeunes entrepreneurs",
    description: "Les projets locaux accompagnés par la mairie.",
    lien: "https://www.youtube.com/embed/tgbNymZ7vqY",
    miniature: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    categorie: "Économie",
  },
  {
    id: 4,
    titre: "Investiture du nouveau Président Élu du Gabon  ",
    description: "Arrivée du Président de la République à Libreville.",
    lien: "https://www.youtube.com/embed/c5VKRt__bEw",
    miniature: "https://www.youtube.com/embed/c5VKRt__bEw",
    categorie: "Politique",
  },
  {
    id: 5,
    titre: "Gabon : Quelle suite pour le Gabon ?",
    description: "Les projets locaux accompagnés par la mairie.",
    lien: "https://www.youtube.com/embed/LFYw1UB1nZo",
    miniature: "https://www.youtube.com/embed/LFYw1UB1nZo",
    categorie: "Politique",
  },
];


const Video = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [search, setSearch] = useState('');

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

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une vidéo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Filtrage par catégorie */}
      <div className="filter-bar">
        {['Toutes', 'Institutionnel', 'Culture', 'Économie', 'Politique'].map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de vidéos */}
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
                <h2>{video.titre}</h2>
                <p>{video.description}</p>
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
