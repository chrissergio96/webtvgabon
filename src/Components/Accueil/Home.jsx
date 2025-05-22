import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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
        style={{ backgroundImage: `url("${currentImage.src}")` }}
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
    " Adéquation Formation – Emploi : Levée de voile sur les métiers de l’Enseignement technique et Professionnel",
    "Sylvia Bongo et Nourredine Bongo Valentin en liberté provisoire pour des raisons médicales",
    "Climat : sommet international à Paris"
  ];

  
  const imagesWithTitles = [
    {
      src: "https://www.gabonreview.com/wp-content/uploads/2025/05/forestiere1.jpg",
      title: "La Forestière : les épouses des paramilitaires des Eaux et Forêts s’organisent pour agir",
    },
    {
      src: "https://www.gabonreview.com/wp-content/uploads/2025/05/Charles-Street-Mayfair_Ali-Bongo.jpg",
      title: "De Libreville à Mayfair à Londres : l’exil doré du clan Bongo prend forme",
    },
    {
      src: "https://www.gabonreview.com/wp-content/uploads/2025/05/FB_IMG_1747398524351.jpg",
      title: "Diplomatie : Régis Immongault reçoit les orientations d’Oligui Nguema",
    },
  ];
 

  return (
    <div className="home-container">
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
              title: 'Sécurité - Société',
              image: 'https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-20-at-14.20.18.jpeg',
              description: 'Gabon : Immongault appelle les policiers à proscrire le racket et les contrôles abusifs',
              date: '20 mai 2025 à 12h13min',

            },
            {
              title: 'International - Justice - Politique',
              image: 'https://gabonactu.com/wp-content/uploads/2023/09/drapeau-gabonais.jpg',
              description: 'Affaire Île Mbanié : Le Gabon appelle au bon voisinage, la population sous le choc',
              date: '20 mai 2025 ',

            },
            {
              title: 'Economie',
              image: 'https://gabonactu.com/wp-content/uploads/2025/05/Kouakoua.jpg',
              description: 'Alain Claude Kouakoua désigné président de la FEG',
              date: '20 mai 2025 ',
            },
          ].map((story, index) => (
            <article key={index} className="story-card">
              <img src={story.image} alt={story.title} />
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <p>{story.date}</p>
            </article>
          ))}
        </div>
      </section>

      {/* À la loupe */}
      <section className="focus-section" data-aos="fade-up">
        <h2>Actualités récentes</h2>

        <div className='focusmere'>
        <div className="focus-card">
        <div className='focusimg1' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>Sécurité - Société </h3>
            <p>Racket: Les policiers dans le collimateur du ministre de tutelle</p>  <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
        </div>

        <div className="focus-card">
        <div className='focusimg2' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>Education</h3>
            <p>Le Gabon lance son premier Concours national de dictée</p>  <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
          </div>

          
        <div className="focus-card">
        <div className='focusimg3' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>Football - Sport</h3>
            <p>La FIFA clôt l’enquête sur le transfert d’Aaron Boupendza de Zamalek au Rapid Bucarest</p> <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
          </div>
         
          
        </div>
        <div className='focusmere2'>

        <div className="focus-card">
        <div className='focusimg4' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>⁠Coopération Education</h3>
            <p>  Gabon-Japon : des salles de classe pour les écoles de Ntoum 1 et Kango 2</p> <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
        </div>

        <div className="focus-card">
        <div className='focusimg5' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>Société</h3>
            <p> SOGEVAL : Marthe Eunice Bakoukou aux commandes</p> <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
          </div>

          
        <div className="focus-card">
        <div className='focusimg6' ></div>

          <div className='focustext'>
          <Link to='articles'>

            <h3>International Justice Politique</h3>
            <p>Affaire Île Mbanié : Le Gabon appelle au bon voisinage, la population sous le choc</p> <br />
            </Link>

            <div className='date'>20 Mai 2025</div>
          </div>
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
                loading="lazy"
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

      <section className="newsletter-section" data-aos="fade-up">
  <h2>Inscription à la newsletter</h2>
  <p>Recevez les dernières actualités directement dans votre boîte mail.</p>
  <form
    className="newsletter-form"
    action="https://formspree.io/f/mldbbjkq"
    method="POST"
  >
    <label>
      Adresse mail:
      <input
        type="email"
        name="email"
        placeholder="Votre adresse e-mail"
        required
        aria-label="Adresse e-mail"
      />
    </label>

    {/* reCAPTCHA */}
    <div
      className="g-recaptcha"
      data-sitekey="6LdOXz4rAAAAAFuiTr3Vn_Fnvk468JJH0hjaBw4K"
    ></div>

    <label>
      <input type="checkbox" name="consent" required />
      En soumettant ce formulaire, j’accepte de recevoir les newsletters sélectionnées.
    </label>

    <button type="submit">S'inscrire</button>
  </form>
</section>


      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <hr />
        <p>&copy; 2025 Votre Média. Tous droits réservés.</p>
        <div className="social-links">
          
          <a href="https://www.facebook.com/RADIOTELEVISIONTOPBENDJE"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg></a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/><stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg></a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
