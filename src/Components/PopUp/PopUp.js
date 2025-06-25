import React, { useState, useEffect } from 'react';
import './PopUp.css';
import AdSlot from '../AdSlot/AdSlot';

const PopUp = () => {
  const [showPop, setShowPop] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    console.log('PopUp useEffect, popupSeen:', sessionStorage.getItem('popupSeen'));
    if (!sessionStorage.getItem('popupSeen')) {
      const timer = setTimeout(() => {
              const ads = [
    {
      image: 'https://gabonactu.com/wp-content/uploads/2024/11/GABON-ACTU-500x600-1.jpg',
      link: 'https://moov-africa.ga/',
      alt: 'Pub Moov Africa'
    },
    {
      image: 'https://afgbankgabon.com/wp-content/uploads/2025/03/Visuel-RS1.jpg',
      link: 'https://afgbankgabon.com/en/',
      alt: 'Pub Afg Bank Gabon'
    },
    {
      image: 'https://cdn-webportal.airtelstream.net/website/gabon/assets/images/recevez.png',
      link: 'https://www.airtel.ga/',
      alt: 'Pub Airtel Gabon'
    }
  ];
        setSelectedAd(ads[Math.floor(Math.random() * ads.length)]);
        setShowPop(true);
        sessionStorage.setItem('popupSeen', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPop || !selectedAd) return null;

  return (
    <div className="popup-ad">
      <button className="close-btn" onClick={() => setShowPop(false)}>×</button>
      <a href={selectedAd.link} target="_blank" rel="noopener noreferrer">
        <img src={selectedAd.image} alt={selectedAd.alt} />
      </a>
    </div>
  );
};

export default PopUp;
