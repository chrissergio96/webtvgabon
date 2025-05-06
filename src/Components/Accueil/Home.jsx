import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Composant séparé pour le carrousel
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

   return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex];
  return (
    <section className="carousel-container" data-aos="fade-up">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${currentImage.src})` }}
      >
        <div className="carousel-title">
          <h2>{currentImage.title}</h2>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const breakingNews = [
    "Élections présidentielles : taux de participation record",
    "Coupe du Monde : la France en finale",
    "Climat : sommet international à Paris"
  ];

  
  const imagesWithTitles = [
    {
      src: "https://i.la-croix.com/1400x933/smart/2025/05/03/2066068-le-president-elu-du-gabon-brice-clotaire-oligui-ng.jpg",
      title: "Actualité nationale",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3iiXtYWPzA675fZCH6yqz370y8JNgstv4AlTL9rRAlcj4GSEQ_WyYpfarzTSsNr1O3U&usqp=CAU",
      title: "Politique",
    },
    {
      src: "https://www.gabonreview.com/wp-content/uploads/2025/05/Adesina-Oligui-445x300.jpg",
      title: "Sport",
    },
    {
      src: "https://www.gabonreview.com/wp-content/uploads/2025/05/passation1.jpg",
      title: "Environnement",
    },
  ];
 

  return (
    <div className="home-container">
      {/* Breaking News - ticker moderne */}
      <section className="breaking-news" data-aos="fade-down">
        <div className="news-ticker">
          <span className="ticker-label">FLASH INFO :</span>
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {breakingNews.map((item, index) => (
                <span key={index} className="ticker-item">{item} • </span>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Carrousel */}
     <ImageCarousel images={imagesWithTitles} />

      {/* Editorial */}
      <section className="editorial-section" data-aos="fade-up">
        <h2>Éditorial</h2>
        <p>
          Découvrez l’analyse de nos experts sur les grands enjeux du moment : politique, société, environnement et économie. Chaque jour, un regard approfondi sur l’actualité nationale et internationale.
        </p>
      </section>

      {/* À la Une */}
      <section className="top-stories" data-aos="fade-up">
        <h2>À la Une</h2>
        <div className="stories-grid">
          {[
            {
              title: 'Politique',
              image: 'https://www.gabonreview.com/wp-content/uploads/2025/05/passation1.jpg',
              description: 'Libreville : Adrien Nguema Mba succède à Rapontchombo à la tête de l’hôtel de ville',
            },
            {
              title: 'Sport',
              image: 'https://www.gabonreview.com/wp-content/uploads/2025/04/Akanda-FC-1536x864.jpeg',
              description: 'National Foot 2 : Avec six mois d’impayés de salaire, Akanda FC vit la dure',
            },
            {
              title: 'Environnement',
              image: 'https://www.gabonreview.com/wp-content/uploads/2025/04/Wani25430.jpg',
              description: 'Gabon, la Green and Blue Valley d’Afrique en devenir',
            },
          ].map((story, index) => (
            <article key={index} className="story-card">
              <img src={story.image} alt={story.title} />
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* À la loupe */}
      <section className="focus-section" data-aos="fade-up">
        <h2>À la loupe</h2>
        <div className="focus-card">
          <img src="https://www.gabonreview.com/wp-content/uploads/2025/05/passation1.jpg" alt="Analyse" />
          <div>
            <h3>Analyse</h3>
            <p>Crise politique au Gabon : quels enjeux pour la stabilité sous-régionale ?</p>
          </div>
        </div>
      </section>

      {/* Vidéos */}
      <section className="video-section" data-aos="fade-up">
        <h2>Dernières Vidéos</h2>
        <div className="video-grid">
          {[
            { src: "https://www.youtube.com/embed/c5VKRt__bEw", desc: "Investiture du nouveau Président Élu du Gabon / Arrivée du Président de la République à Libreville." },
            { src: "https://www.youtube.com/embed/LFYw1UB1nZo", desc: "Gabon : Quelle suite pour le Gabon ?" },
            { src: "https://www.youtube.com/embed/Ixm3hiLIQUA", desc: "Communiqué n°072 du CTRI du 01 mai 2025" },
            { src: "https://www.youtube.com/embed/Ixm3hiLIQUA", desc: "Communiqué n°072 du CTRI du 01 mai 2025" },
          ].map((video, index) => (
            <div key={index} className="video-card">
              <iframe
                src={video.src}
                title={`Vidéo ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{video.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section" data-aos="fade-up">
        <h2>Inscription à la newsletter</h2>
        <p>Recevez les dernières actualités directement dans votre boîte mail.</p>
        <form className="newsletter-form" action="https://formspree.io/f/mldbbjkq" method="POST">
          <input
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            required
            aria-label="Adresse e-mail"
          />
          <button type="submit">S'inscrire</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <hr />
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
