import React from 'react';
import { Link } from 'react-router-dom';  // Pour le routage
import './Articles.css';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    titre: "Libreville-Rome: Oligui Nguema à l’inauguration du pontificat du pape Léon XIV",
    image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui1_n.jpg",
    resume: "Le président de la République, Brice Clotaire Oligui Nguema, prendra part le 18 mai 2025, à Rome...",
    date:"24 Mai 2025"
  },
  {
    id: 2,
    titre: "La dépouille de Boupendza arrive à Libreville le 26 mai",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-20-at-12.41.24.jpeg",
    resume: "La dépouille de l’ancien international gabonais, Aaron Boupendza arrive à Libreville le lundi 26 mai prochain par un vol régulier de la compagnie Turkish, selon une source familiale.",
    date:"22 Mai 2025"

  },
  {
    id: 3,
    titre: "Mbanié : un compte rendu exhaustif sera présenté au Parlement et au gouvernement (Oligui Nguema)",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/carte-Gabon-Guinee-equatoriale.jpg", // tronqué ici
    resume: "Dans une publication sur son compte Facebook, le président gabonais Brice Clotaire Oligui Nguema a promis qu’un compte rendu exhaustif ..." ,
    date:"22 Mai 2025"

  },
  {
    id: 4,
    titre: "Pétrole : BW Energy reprend le contrôle du navire de production FPSO BW Adolo",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-16.08.25.jpeg",
    resume: "Depuis ce mardi, la gestion opérationnelle du FPSO BW Adolo, navire de production pétrolière offshore situé au large de Port-Gentil...",
    date:"21 Mai 2025"

  },
  {
    id: 5,
    titre: "UA – UE : Le Gabon sur la table des discussions ministérielles à Bruxelles",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-12.25.54.jpeg", 
    resume: "Le Gabon, aux côtés de la Commission de la Communauté économique des États de l’Afrique Centrale (CEEAC)...",
    date:"21 Mai 2025"

  },
];
const articl = [
  {
    id: 6,
    titre: "Pétrole et gaz : Quelles solutions pour renforcer la sécurité au travail ?",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/Petrole.jpg",
    resume: "La capitale gabonaise abritera du 25 au 29 mai 2025, la 2ᵉ édition des Rencontres Africaines de Libreville... ",
    date:"22 Mai 2025"

  },
  {
    id: 7,
    titre: "Modèle économique du projet eGabon-SIS : les experts proposent un prélèvement de 10% dans les recettes propres des structures hospitalières ",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/eGabon1.jpg",
    resume: "Les experts participants à l’atelier de validation du modèle économique du projet eGabon-SIS...",
    date:"21 Mai 2025"

  },
  {
    id: 8,
    titre: "Noureddin Bongo à Londres, Ali Bongo et Sylvia toujours à Luanda",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/Noureddin-a-Londres-.jpg", // tronqué ici
    resume: "Noureddin Bongo Valentin est arrivé à Londres vendredi soir en provenance de Luanda en Angola...",
    date:"20 Mai 2025"

  },
  {
    id: 9,
    titre: "Une voiture s’encastre dans un transfo de la SEEG et plonge une partie des Charbonnages dans le noir",
    image: "https://gabonactu.com/wp-content/uploads/2025/05/Transfo.jpg",
    resume: "Un véhicule a violemment percuté mardi un poste de distribution d’électricité de la SEEG au Camp de Gaulle...",
    date:"20 Mai 2025"

  },
  {
    id: 10,
    titre: "Rappel : liste des membres du gouvernement gabonais (5 mai 2025)",
    image: "https://gabonactu.com/wp-content/uploads/2024/01/Barro1.jpg",
    resume: "Voici la liste des membres du gouvernement nommé par décret présidentiel par le chef de l’Etat...",
    date:"22 Mai 2025"

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
            <p style={{color:'gray', fontWeight:'bold', marginTop:'5px'}}>{article.date}</p>
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
            <p style={{color:'gray', fontWeight:'bold', marginTop:'5px'}}>{article.date}</p>
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
