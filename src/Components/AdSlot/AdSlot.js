// src/components/AdSlot.js
import React from 'react';
import './AdSlot.css';

const AdSlot = ({ format, imageUrl, altText = "Publicité", onClose }) => {
  const formatClass = `ad-slot ${format}`;

  return (
    <div className={formatClass}>
      {onClose && <button className="close-btn" onClick={onClose}>×</button>}
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default AdSlot;
