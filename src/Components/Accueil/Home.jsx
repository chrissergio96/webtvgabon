import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Carouselinfo from '../Caroussel/Carouselinfo';
import TopStories from '../TopStories/TopStories';
import Newlester from '../Newlester/Newlester';
import { db } from '../../firebaseConf';
import { collection, getDocs } from 'firebase/firestore';
import AdsSidebar from '../AdsSidebar/AdsSidebar';
import CarousseleAnnonce from '../Caroussele/CarousseleAnnonce';

const Home = () => {
  const [focusArticles, setFocusArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [ads, setAds] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

     const fetchFocusArticles = async () => {
      const snapshot = await getDocs(collection(db, 'focusArticles'));
      const data = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          date: docData.date?.toDate 
            ? docData.date.toDate().toLocaleDateString('fr-FR') 
            : docData.date || ''
        };
      });
      setFocusArticles(data);
    };

    const fetchAds = async () => {
      const snapshot = await getDocs(collection(db, 'publicite'));
      const data = snapshot.docs.map(doc => {
        const d = doc.data();
        return {
          id: doc.id,
          image: d.image,
          url: d.url,
          date: d.date?.toDate ? d.date.toDate() : null
        };
      });
      setAds(data);
    };

    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, 'videos'));
      const data = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          date: docData.date?.toDate ? docData.date.toDate() : null
        };
      });

      // Tri par date décroissante : les plus récentes en premier
      data.sort((a, b) => b.date - a.date);

      // Formatage pour affichage
      const formattedData = data.map(video => ({
        ...video,
        date: video.date ? video.date.toLocaleString('fr-FR') : ''
      }));

      setVideos(formattedData);
    };

    fetchFocusArticles();
    fetchAds();
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
                <h1>SANTÉ</h1>
                <h4>Des potences, unité de production d’oxygène, groupe électrogène pour le CHR de Port-Gentil</h4>
                <p>10 août 2025</p>
              </Link>
            </div>
          </div>
          <div className='plus3'>
            <h2>ÉCO - POLITIQUE</h2>
            <div className='plus3enf'>
              <Link to='/économie'>
                <h1>ÉCONOMIE</h1>
                <h4>Trésor Public : 𝗶𝗻𝗮𝘂𝗴𝘂𝗿ation d𝗲 𝗹𝗮 p𝗲𝗿𝗰𝗲𝗽𝘁𝗶𝗼𝗻 𝗱𝗲 𝗞𝗮𝗻𝗴𝗼</h4>
                <p>14 août 2025 </p>
              </Link>
            </div>
            <div className='plus3en'>
             
              <Link to='/politique'>
                <h1>POLITIQUE</h1>
                <h4>Lutte contre la vie chère : le Gabon créé une centrale d’achat des denrées alimentaires</h4>
                <p>13 août 2025 </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="editorial-section" style={{ display: 'flex' }}>
          <div>
            <h2 style={{ textTransform: 'uppercase' }}>Annonces - Faits Divers - Ventes</h2>
   
            <CarousseleAnnonce />
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
                <small style={{ color: '#555' }}>
                  Publié le : {video.date}
                </small>
              </div>
            ))}
          </div>
        </section>

        <Newlester />

      </section>

     <AdsSidebar/>
  

    </div>
  );
};

export default Home;
