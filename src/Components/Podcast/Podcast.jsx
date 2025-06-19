// src/components/Podcast.js
import React, { useState, useEffect } from 'react';
import './Podcast.css';

const PODCASTS = [
  {
    id: 1,
    title: "L'avenir du numérique au Gabon",
    desc: "Un podcast sur les enjeux et opportunités du digital dans le pays.",
    mediaUrl: "https://www.youtube.com/embed/vAaeie-kg0Y"
  },
  {
    id: 2,
    title: "Activités Portuaires",
    desc: "L'urgence de réglementer le métier de transitaire au Gabon",
    mediaUrl: "https://www.youtube.com/embed/vAaeie-kg0Y"
  },
];

const Podcast = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    setPods(PODCASTS);
  }, []);

  return (
    <div className="podcast-page">
      <h2>Podcasts</h2>
      <div className="podcast-list">
        {pods.map(p => (
          <div className="podcast-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.mediaUrl && (
              p.mediaUrl.includes("youtube.com/embed") ? (
                <iframe
                  width="100%"
                  height="200"
                  src={p.mediaUrl}
                  title={p.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : p.mediaUrl.match(/\.(mp3|wav)$/i) ? (
                <audio controls src={p.mediaUrl} className="pod-audio" />
              ) : (
                <video controls src={p.mediaUrl} style={{ maxWidth: '100%' }} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
