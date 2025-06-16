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
      text: "Le Gabon sur la liste noire de 25 nouveaux pays africains interdits d’entrer aux USA",
      image: "https://gabonactu.com/wp-content/uploads/2020/12/passeport-Gabonais.jpg",
    },
    {
      text: "Plaine Orety : Oligui Nguema nuitamment sur les ruines et face aux sans abris",
      image: "https://gabonactu.com/wp-content/uploads/2025/06/plaine-orety.jpg",
    },
    {
      text: "La 1 Gabonaise : Streaming made in Gabon",
      image: "https://gabonactu.com/wp-content/uploads/2025/06/Capture-decran-2025-06-15-a-21.36.12.png",
    }
    ,
    {
      text: "Appel à candidature pour Alassane Dramane Ouattara : la diaspora Ivoirienne au Gabon mobilisée",
      image: "https://gabonactu.com/wp-content/uploads/2025/06/IMG-20250615-WA0030.jpg",
    }
      ,
    {
      text: "Déguerpissement à Plaine Oréty : Ndong Sima portera plainte contre les acteurs de la société civile",
      image: "https://gabonactu.com/wp-content/uploads/2025/06/RNS1.jpg",
    }
  ];
  

  return (
    <div className="home-containe">
      <section className="breaking-news" data-aos="fade-down">
        <div className="news-ticker">
          <span className="flash-icon"></span>
          <span className="ticker-label"><h4>FLASH INFO :</h4></span>
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
