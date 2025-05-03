import React from 'react';
import './Live.css';

const Live = () => {
  return (
    <div className="live-container">
      <h2>🔴 En Direct</h2>
      <div className="live-video">
        <iframe
          src="https://www.youtube.com/embed/tZyEV76ahH0"
          title="Live Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          width="100%"
          height="500px"
        ></iframe>
      </div>

      <p>Suivez en temps réel les événements.</p>

      <h3>Prochains Lives</h3>
      <ul className="upcoming-lives">
        <li>Pas encore de live prévu</li>
      </ul>
    </div>
  );
};

export default Live;
