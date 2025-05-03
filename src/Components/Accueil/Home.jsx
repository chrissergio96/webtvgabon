import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Breaking News */}
      <section className="breaking-news" data-aos="fade-down">
        <div className="ticker">
          <span>FLASH INFO :</span>
          <marquee behavior="scroll" direction="left">
            Élections présidentielles : taux de participation record | Coupe du Monde : la France en finale | Climat : sommet international à Paris
          </marquee>
        </div>
      </section>

      {/* À la Une */}
      <section className="top-stories" data-aos="fade-up">
        <h2>À la Une</h2>
        <div className="stories-grid">
          <article className="story-card">
            <img src="https://www.gabonreview.com/wp-content/uploads/2025/05/passation1.jpg" alt="Politique" />
            <h3>Politique</h3>
            <p>Libreville : Adrien Nguema Mba succède à Rapontchombo à la tête de l’hôtel de ville</p>
          </article>
          <article className="story-card">
            <img src="https://www.gabonreview.com/wp-content/uploads/2025/04/Akanda-FC-1536x864.jpeg" alt="Sport" />
            <h3>Sport</h3>
            <p>National Foot 2 : Avec six mois d’impayés de salaire, Akanda FC vit la dure</p>
          </article>
          <article className="story-card">
            <img src="https://www.gabonreview.com/wp-content/uploads/2025/04/Wani25430.jpg" alt="Environnement" />
            <h3>Environnement</h3>
            <p>Gabon, la Green and Blue Valley d’Afrique en devenir</p>
          </article>
        </div>
      </section>

      {/* Vidéos */}
      <section className="video-section" data-aos="fade-up">
        <h2>Dernières Vidéos</h2>
        <div className="video-grid">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/c5VKRt__bEw"
              title="Vidéo d'actualité"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Investiture du nouveau Président Élu du Gabon / Arrivée du Président de la République à Libreville.</p>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/LFYw1UB1nZo"
              title="Vidéo d'actualité"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Gabon : Quelle suite pour le Gabon ?</p>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/Ixm3hiLIQUA"
              title="Vidéo d'actualité"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Communiqué n°072 du CTRI du 01 mai 2025</p>
          </div>
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/Ixm3hiLIQUA"
              title="Vidéo d'actualité"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Communiqué n°072 du CTRI du 01 mai 2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <p>&copy; 2025 Votre Média. Tous droits réservés.</p>
        <div className="social-links">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
