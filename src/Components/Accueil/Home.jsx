import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Carouselinfo from '../Caroussel/Carouselinfo';
import Caroussele from '../Caroussele/Caroussele';
import TopStories from '../TopStories/TopStories';
import Newlester from '../Newlester/Newlester';
import { db } from '../../firebaseConf';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
  const [focusArticles, setFocusArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchFocusArticles = async () => {
      const snapshot = await getDocs(collection(db, 'focusArticles'));
      const data = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          // Conversion du timestamp Firestore en date lisible
          date: docData.date?.toDate 
            ? docData.date.toDate().toLocaleDateString('fr-FR') 
            : docData.date || ''
        };
      });
      setFocusArticles(data);
    };

    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, 'videos'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(data);
    };

    fetchFocusArticles();
    fetchVideos();
  }, []);

  return (
    <div className="home-container">
      <section className="meresection">
        <section className='plusieurs'>
          <div className='plus1'>
            <h2>À LA UNE</h2>
            <Carouselinfo />
          </div>
          <div className='plus21'>
            <h2>SANTÉ</h2>
            <div className='plus2'>
              <Link to='/santé'>
                <h1>SANTÉ - SOCIÉTÉ</h1>
                <h4>Insalubrité dans les marchés : Le mythe de Sisyphe</h4>
                <p>24 mai 2025 </p>
              </Link>
            </div>
          </div>
          <div className='plus3'>
            <h2>ÉCONOMIE</h2>
            <div className='plus3enf'>
              <Link to='/économie'>
                <h1>ÉCONOMIE</h1>
                <h4>Après la suspension des missions, Oyima tape dans le portemonnaie des anciens du régime</h4>
                <p>24 mai 2025 </p>
              </Link>
            </div>
            <div className='plus3en'>
              <Link to='/économie'>
                <h1>ÉCONOMIE</h1>
                <h4>Bonne cadence pour les chantiers présidentiels à Akébé</h4>
                <p>23 mai 2025 </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="editorial-section" style={{ display: 'flex' }}>
          <div>
            <h2 style={{ textTransform: 'uppercase' }}>Annonces</h2>
            <Caroussele />
          </div>
        </section>

        {/* À la Une */}
        <TopStories />

        {/* À la loupe */}
        <section className="focus-section">
          <h2 style={{ textTransform: 'uppercase' }}>Actualités récentes</h2>
          <div className="focusmere">
            {focusArticles.slice(0, 2).map((article) => (
              <div className="focus-card" key={article.id}>
                <div
                  className="focusimg1"
                  style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover' }}
                ></div>
                <div className="focustext">
                  <Link to="/articles">
                    <h3>{article.categorie}</h3>
                    <p>{article.titre}</p>
                  </Link>
                  <div className="date"><em>{article.date} / {article.auteur}</em></div>
                </div>
              </div>
            ))}
          </div>
          <div className="focusmere2">
            {focusArticles.slice(2, 4).map((article) => (
              <div className="focus-card" key={article.id}>
                <div
                  className="focusimg1"
                  style={{ backgroundImage: `url(${article.image})`, backgroundSize: 'cover' }}
                ></div>
                <div className="focustext">
                  <Link to="/articles">
                    <h3>{article.categorie}</h3>
                    <p>{article.titre}</p>
                  </Link>
                  <div className="date"><em>{article.date} / {article.auteur}</em></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="video-section">
          <h2 style={{ textTransform: 'uppercase' }}>Dernières Vidéos</h2>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div key={video.id} className="video-card">
                <iframe
                  loading="lazy"
                  src={video.url}
                  title={`Vidéo ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Newlester />

      </section>
   {/* Espace pour les pubs */}
<aside className="sidebar-ads">
  {/* Ici tu peux afficher un slot Ads, popup ou iframe */}
  <a data-no-instant="1" href="http://www.canalplus-afrique.com/gabon" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2025/06/GABON_ACTU_300X300.jpg" alt="" />
  </a>
  <a data-no-instant="1" href="https://comilog.eramet.com/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2025/04/ERAMET_Campagne_2025_300x250px.jpg" alt="" />
  </a>
  <a data-no-instant="1" href="https://e.cnss.ga/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2025/03/WEB-eCNSS-1.png" alt="" />
  </a>
  <a data-no-instant="1" href="http://economiesafricainesmagazine.com/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2025/01/COUV-Insert-EA20-Kiosque-actuellement.png" alt="" />
  </a>
  <a data-no-instant="1" href="https://www.moov-africa.ga/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2024/11/GABON-ACTU-500x600-1.jpg" alt="" />
  </a>
  <a data-no-instant="1" href="https://www.flygabon.online/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2024/10/GIF-FLYGABON.gif" alt="" />
  </a>
  <a data-no-instant="1" href="https://moovbox.ga/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2024/08/GABON-ACTU-1.jpg" alt="" />
  </a>
  <a data-no-instant="1" href="https://africa.visa.com/products/visa-spend-clarity.html" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-23-at-10.51.52.jpeg" alt="" />
  </a>
  <a data-no-instant="1" href="https://comilog.eramet.com/" rel="noopener" className="a2t-link" target="_blank" aria-label="GABON_ACTU_300X300">
    <img decoding="async" id="pubimg" src="https://gabonactu.com/wp-content/uploads/2023/12/300x250px-1-2.jpg" alt="" />
  </a>
</aside>
  

    </div>
  );
};

export default Home;
