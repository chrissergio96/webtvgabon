import React, { useEffect } from 'react';
import './BreakingNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const BreakingNews = () => {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const breakingNews = [
    " Adéquation Formation – Emploi : Levée de voile sur les métiers de l’Enseignement technique et Professionnel",
    "Sylvia Bongo et Nourredine Bongo Valentin en liberté provisoire pour des raisons médicales",
    "Climat : sommet international à Paris"
  ];

  return (
    <div className="home-containe">
      {/* Breaking News - ticker moderne */}
      <section className="breaking-news" data-aos="fade-down">
        <div className="news-ticker">
        <span className="flash-icon"></span>
        <span className="ticker-label">FLASH INFO :</span>
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {breakingNews.map((item, index) => (
                <span key={index} className="ticker-item">• {item} • </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BreakingNews;
