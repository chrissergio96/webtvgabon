import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';

const slides = [
  {
    secteur:'Football - sport',
    image: 'https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-25-at-13.26.57.jpeg',
    title: 'Etoile Rouge de Belgrade : Les adieux à Guélor Kanga',
    link: '/articles/1'
  },
  {
    secteur:'Société',
    image: 'https://gabonactu.com/wp-content/uploads/2025/05/mercuriale.jpg',
    title: 'Port-Gentil : une nouvelle mercuriale pour alléger le panier de la ménagère',
    date: '24 Mai 2025',
    link: '/articles/2'
  },
  {
    secteur:'Non classé',
    image: 'https://gabonactu.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-06-at-12.22.19.jpeg',
    title: "« L’IA, au cœur des rédactions et du journalisme",
    date: '24 Mai 2025',
    link: '/articles/3'
  },
  {
    secteur:'Economie',
    image: 'https://gabonactu.com/wp-content/uploads/2025/05/Henri-Claude-Oyima-1.jpg',
    title: "« Après la suspension des missions, Oyima tape dans le portemonnaie des anciens du régime",
    date: '24 Mai 2025',
    link: '/articles/4'
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const prevSlide = () => setIndex((index - 1 + total) % total);
  const nextSlide = () => setIndex((index + 1) % total);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-item" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="caption">
              <h2 style={{textTransform:'uppercase',backgroundColor:'red',width:'max-content', padding:'5px',textAlign:'center',fontSize:'16px'}}>{slide.secteur}</h2>
              <h3>{slide.title}</h3>
              <Link to={slide.link}>Lire l'article</Link>
              <p>{slide.date}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
