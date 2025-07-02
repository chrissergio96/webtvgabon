import React, { useEffect, useState } from 'react';
import './CarousseleAnnonce.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConf';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const CarousseleAnnonce = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      const q = query(collection(db, 'carousseleAnnonce'), orderBy('order', 'asc'));
      const snap = await getDocs(q);
      setSlides(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  const prevSlide = () => setIndex(prev => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex(prev => (prev + 1) % slides.length);

  if (slides.length === 0) return null;

  return (
    <div className="carousels">
      <div className="carousel-inners" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-items" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="captions">
           
              <h2 className="secteur">{slide.secteur}</h2>
              <h3>{slide.title}</h3>
              <Link to={slide.link}>Lire l'article</Link>
              {slide.date && <p>{slide.date}</p>}
            </div>
          </div>
        ))}
      </div>
      <button className="arrow lefts" onClick={prevSlide}>&#10094;</button>
      <button className="arrow rights" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default CarousseleAnnonce;
