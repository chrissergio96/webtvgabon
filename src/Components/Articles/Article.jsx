import React from 'react';
import { Link } from 'react-router-dom';  // Pour le routage
import './Articles.css';

const articles = [
  {
    id: 1,
    titre: "Lancement du Mois de la Culture Gabonaise",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWRrJUmuYy26kWAsW_wFGvRFcaDRwLyhomg&s",
    resume: "Retour sur les moments forts de l'ouverture officielle à Libreville...",
  },
  {
    id: 2,
    titre: "Interview exclusive du Ministre de l'Éducation",
    image: "https://i.ytimg.com/vi/8pUi7s2QwwI/hq720.jpg",
    resume: "Le Ministre évoque les réformes majeures prévues cette année scolaire.",
  },
  {
    id: 3,
    titre: "Sport : Les Panthères en route pour la CAN",
    image: "https://urlr.me/69rNXe", // tronqué ici
    resume: "L’équipe nationale se prépare activement pour la Coupe d’Afrique.",
  },
  {
    id: 4,
    titre: "[Tribune] Nationaliser le transport urbain pour garantir des emplois décents et durables aux Gabonais",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/IMG-20250501-WA0033-1536x940.jpg",
    resume: "Retour sur les débats actuels autour de la politique de transport public.",
  },
  {
    id: 5,
    titre: "Retour du Gabon dans l’Union africaine : «Plus qu’un symbole», selon Oligui Nguema",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui.jpg", 
    resume: "voir",
  },
];

const Articles = () => {
  return (
    <div className="articles-container">
    <div className='artic'>
    {articles.map(article => (
        <div key={article.id} className="article-card">
          <img src={article.image} alt={article.titre} className="article-image" />
          <div className="article-content">
            <h2>{article.titre}</h2>
            <p>{article.resume}</p>
            <Link to={`/article/${article.id}`} className="btn-voir-plus">
              Voir plus
            </Link>
          </div>
        </div>
      ))}
    </div>
     
    </div>
  );
};

export default Articles;
