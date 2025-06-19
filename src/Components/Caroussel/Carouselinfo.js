// src/components/Caroussel/Carouselinfo.js
import React, { useState, useEffect } from 'react';
import './Carouselinfo.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConf';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const Carouselinfo = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      const q = query(collection(db, 'carouselSlides'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      setSlides(snapshot.docs.map(doc => doc.data()));
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-item" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="caption">
              <h2 className="slide-secteur">{slide.secteur}</h2>
              <h3>{slide.title}</h3>
              <Link to={slide.link}>Lire l'article</Link>
              {slide.date && <p>{slide.date}</p>}
            </div>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={() => setIndex((index-1+slides.length)%slides.length)}>&#10094;</button>
      <button className="arrow right" onClick={() => setIndex((index+1)%slides.length)}>&#10095;</button>
    </div>
  );
};

export default Carouselinfo;
