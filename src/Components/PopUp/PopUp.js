import React, { useState, useEffect } from 'react';
import './PopUp.css';

const PopUp = () => {
  const [showPop, setShowPop] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const ads = [
    {
      image: 'https://gabonactu.com/wp-content/uploads/2024/11/GABON-ACTU-500x600-1.jpg',
      link: 'https://moov-africa.ga/',
      alt: 'Pub Moov Africa'
    },
    {
      image: 'https://gabonactu.com/wp-content/uploads/2024/12/GVA_300x300H-2.jpg',
      link: 'https://www.canalplus-afrique.com/gabon',
      alt: 'Pub Canal+ Gabon'
    },
    {
      image: 'https://cdn-webportal.airtelstream.net/website/gabon/assets/images/recevez.png',
      link: 'https://www.airtel.ga/',
      alt: 'Pub Airtel Gabon'
    }
  ];

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('popupSeen');
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        const randomAd = ads[Math.floor(Math.random() * ads.length)];
        setSelectedAd(randomAd);
        setShowPop(true);
        sessionStorage.setItem('popupSeen', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPop && selectedAd && (
        <div className="popup-ad">
          <button className="close-btn" onClick={() => setShowPop(false)}>×</button>
          <a href={selectedAd.link} target="_blank" rel="noopener noreferrer">
            <img src={selectedAd.image} alt={selectedAd.alt} />
          </a>
        </div>
      )}
    </>
  );
};

export default PopUp;
