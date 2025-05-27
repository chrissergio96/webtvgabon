import React, { useEffect, useState } from 'react';
import './TopStories.css'

const TopStories = () => {
  const allStories = [
    {
      title: 'Economie-Société',
      image: 'https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-27-at-02.45.33.jpeg',
      description: 'Ouverture des travaux de la 2ᵉ édition des Rencontres Africaines de Libreville sur la Prévention des Risques Professionnels (RALI PRP)',
      date: '27 mai 2025 à 12h13min',
    },
    {
      title: 'Economie',
      image: 'https://gabonactu.com/wp-content/uploads/2021/05/Afrijet.jpg',
      description: 'Vie chère : AFRIJET / FLYGABON appelle à la révision des taxes passagers',
      date: '27 mai 2025',
    },
    {
      title: 'Football - Sport ',
      image: 'https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-at-18.12.08.jpeg',
      description: 'Le Gabon accueille la dépouille d’Aaron Boupendza dans une profonde émotion nationale',
      date: '26 mai 2025',
    },
    {
      title: 'Nécrologie',
      image: 'https://gabonactu.com/wp-content/uploads/2025/05/idriss.jpg',
      description: 'Idriss Firmin Ngari s’est éteint',
      date: '27 mai 2025',
    },
    {
      title: 'Politique',
      image: 'https://gabonactu.com/wp-content/uploads/2025/05/murielle-2.jpg',
      description: 'SEEG : l’État met fin à la gestion provisoire, la société retrouve son autonomie',
      date: '27 mai 2025',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % allStories.length);
    }, 5000); // toutes les 20 secondes

    return () => clearInterval(interval);
  }, [allStories.length]);

  // Afficher 3 éléments à la fois
  const visibleStories = [
    allStories[startIndex % allStories.length],
    allStories[(startIndex + 1) % allStories.length],
    allStories[(startIndex + 2) % allStories.length],
  ];

  return (
    <section className="top-stories">
      <h2 style={{ textTransform: 'uppercase' }}>Politique</h2>
      <div className="stories-grid animated-slide">
        {visibleStories.map((story, index) => (
          <article key={index} className="story-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <p>{story.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopStories;
