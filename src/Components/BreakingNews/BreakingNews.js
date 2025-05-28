import React, { useEffect } from 'react';
import './BreakingNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BreakingNews = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const breakingNews = [
    {
      text: "Zita Oligui Nguema célèbre la fête des mères avec les épouses des Personnels de la Garde Républicaine",
      image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-at-15.32.17.jpeg",
    },
    {
      text: "Sylvia Bongo et Nourredine Bongo Valentin en liberté provisoire pour des raisons médicales",
      image: "https://gabonactu.com/wp-content/uploads/2025/05/murielle-2.jpg",
    },
    {
      text: "Femmes et jeunes : L’Etat, le PNUD et l’IBSA poussent à l’indépendance financière",
      image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-27-at-14.03.59.jpeg",
    }
  ];
  

  return (
    <div className="home-containe">
      <section className="breaking-news" data-aos="fade-down">
        <div className="news-ticker">
          <span className="flash-icon"></span>
          <span className="ticker-label">FLASH INFO :</span>
          <div className="ticker-wrapper">
            <div className="ticker-content">
            {breakingNews.map((item, index) => (
             <span key={index} className="ticker-item">
              <img src={item.image} alt="news" className="news-icon" />
                  {item.text}
                 </span>
    ))}
 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreakingNews;
