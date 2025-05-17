import React from 'react';
import { Link } from 'react-router-dom';  // Pour le routage
import './Articles.css';
import { div } from 'framer-motion/client';

const articles = [
  {
    id: 1,
    titre: "Libreville-Rome: Oligui Nguema à l’inauguration du pontificat du pape Léon XIV",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui1_n.jpg",
    resume: "Le président de la République, Brice Clotaire Oligui Nguema, prendra part le 18 mai 2025, à Rome...",
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
const articl = [
  {
    id: 6,
    titre: "Port-Gentil : il vole pour assurer le trousseau de sa copine",
    image: "https://urlr.me/QmRaYB",
    resume: "Un compatriote répondant au nom de Yorith Christian Nzaou Moundounga a opté pour le vol... ",
  },
  {
    id: 7,
    titre: "Interview exclusive du Ministre de l'Éducation",
    image: "https://i.ytimg.com/vi/8pUi7s2QwwI/hq720.jpg",
    resume: "Le Ministre évoque les réformes majeures prévues cette année scolaire.",
  },
  {
    id: 8,
    titre: "Sport : Les Panthères en route pour la CAN",
    image: "https://urlr.me/69rNXe", // tronqué ici
    resume: "L’équipe nationale se prépare activement pour la Coupe d’Afrique.",
  },
  {
    id: 9,
    titre: "[Tribune] Nationaliser le transport urbain pour garantir des emplois décents et durables aux Gabonais",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/IMG-20250501-WA0033-1536x940.jpg",
    resume: "Retour sur les débats actuels autour de la politique de transport public.",
  },
  {
    id: 10,
    titre: "Retour du Gabon dans l’Union africaine : «Plus qu’un symbole», selon Oligui Nguema",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui.jpg", 
    resume: "voir",
  },
];

const Articles = () => {
  return (
    <div>
    <div className="articles-container">
    <div className='artic'>
    {articles.map(article => (
        <div key={article.id} className="article-card">
          <img src={article.image} alt={article.titre} className="article-image" />
          <div className="article-content">
            <h2>{article.titre}</h2>
            <p>{article.resume}</p>
            <Link to={`/article/${article.id}`} className="btn-voir-plus">
              <span>
                Voir plus
              <svg id='svgy' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="green" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
              </span> 
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className='artic'>
    {articl.map(article => (
        <div key={article.id} className="article-card">
          <img src={article.image} alt={article.titre} className="article-image" />
          <div className="article-content">
            <h2>{article.titre}</h2>
            <p>{article.resume}</p>
            <Link to={`/article/${article.id}`} className="btn-voir-plus">
            <span>
                Voir plus
              <svg id='svgy' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="green" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
              </span> 
            </Link>
          </div>
        </div>
      ))}
    </div>
     
    </div>
     {/* Bouton retour à la page d'accueil */}
     <div className="retour-accueil">
     <Link to="/" className="btn-retour">← Retour à l'accueil</Link>
   </div>
   </div>
  );
};

export default Articles;
