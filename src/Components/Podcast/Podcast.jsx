import React from 'react';
import './Podcast.css';

const podcasts = [
  {
    id: 1,
    photo:"https://www.gabonreview.com/wp-content/uploads/2025/05/numeriq1.jpg",
    titre: "L'avenir du numérique au Gabon",
    audio: "./EP01_Laika_Mba_la_transformation_digitale_entre_Libreville_et_10_28_2024-15.mp3",
    description: "Un podcast sur les enjeux et opportunités du digital dans le pays.",
  },
  {
    id: 2,
    titre: "Paroles de Jeunes",
    audio: "/audios/jeunes.mp3",
    description: "Les jeunes gabonais s'expriment sur leurs ambitions et défis.",
  },
];

const Podcast = () => {
  return (
    <div className="podcast-page">
      <h2>Podcasts</h2>
      <div className="podcast-list">
        {podcasts.map((podcast) => (
          <div className="podcast-card" key={podcast.id}>
            <h3>{podcast.titre}</h3>
            <p>{podcast.description}</p>
            <img src={podcast.photo} alt=""></img>
            <audio controls src={podcast.audio}></audio>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Podcast;
