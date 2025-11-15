import React, { useState, useEffect } from 'react';
import './Video.css';
import { db } from '../../firebaseConf';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // On récupère les vidéos triées par date descendante (du plus récent au plus ancien)
        const videosQuery = query(collection(db, 'allvideo'), orderBy('date', 'desc'));
        const snapshot = await getDocs(videosQuery);
        const data = snapshot.docs.map(doc => {
          const docData = doc.data();
          return {
            id: doc.id,
            ...docData,
            date: docData.date?.toDate ? docData.date.toDate() : null
          };
        });
        setVideos(data);
      } catch (error) {
        console.error("Erreur lors du chargement des vidéos :", error);
      }
    };

    fetchVideos();
  }, []);

  // Filtrage par catégorie et recherche
  const filteredVideos = videos.filter(video => {
    const matchCategory =
      selectedCategory === 'Toutes' || video.categorie === selectedCategory;
    const matchSearch =
      video.titre.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Pagination
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1); // Remettre la pagination à la page 1
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="videos-grid">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <div key={video.id} className="video-card video-card-modern">
              <iframe
                src={video.lien}
                title={video.titre}
                className="video-frame"
                allowFullScreen
              ></iframe>
              <div className="video-info">
                <h2>{video.titre.length > 100 ? video.titre.substring(0, 100) + '...' : video.titre}</h2>
                <p>{video.description.length > 150 ? video.description.substring(0, 150) + '...' : video.description}</p>
                <small style={{ color: '#555' }}>
                  Publié le : {video.date ? video.date.toLocaleString('fr-FR') : 'Date inconnue'}
                </small>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Aucune vidéo ne correspond à votre recherche.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-button ${currentPage === page ? 'active' : ''}`}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Video;
