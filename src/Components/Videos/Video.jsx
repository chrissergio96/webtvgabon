import React, { useState } from 'react';
import './Video.css';

const videos = [
  {
    id: 1,
    titre: "Discours du Maire – Rentrée 2025",
    description: "Message du Maire sur les perspectives de l’année à venir.",
    lien: "https://www.youtube.com/embed/8pUi7s2QwwI",
  },
  {
    id: 2,
    titre: "Documentaire sur le patrimoine du 2e arrondissement",
    description: "Retour sur les trésors culturels et historiques.",
    lien: "https://www.youtube.com/embed/kQ_mnaEAZ5I",
  },
  {
    id: 3,
    titre: "Interview avec les jeunes entrepreneurs locaux",
    description: "Focus sur les porteurs de projets accompagnés par la mairie.",
    lien: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-container">
      <h1 className="videos-title">📹 Nos Vidéos</h1>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-frame">
              <iframe
                src={video.lien}
                title={video.titre}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h2>{video.titre}</h2>
              <p>{video.description}</p>
              <button className="btn-watch" onClick={() => openModal(video)}>
                ▶ Regarder
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre modale */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selectedVideo.lien + "?autoplay=1"}
              title={selectedVideo.titre}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="modal-close" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
