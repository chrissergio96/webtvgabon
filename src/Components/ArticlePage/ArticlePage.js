import React from 'react';
import { useParams } from 'react-router-dom'; // Permet de récupérer les paramètres dans l'URL
import './ArticlePage.css'

// Définir une fonction pour récupérer un article par son id
const ArticlePage = () => {
  const { id } = useParams(); // Récupérer l'id de l'article depuis l'URL
  const articles = [
    {
      id: 1,
      titre: "Lancement du Mois de la Culture Gabonaise",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWRrJUmuYy26kWAsW_wFGvRFcaDRwLyhomg&s",
      resume: "Retour sur les moments forts de l'ouverture officielle à Libreville...",
      contenu: "Voici le contenu complet de l'article... [détails du Mois de la Culture Gabonaise]",
    },
    {
      id: 2,
      titre: "Interview exclusive du Ministre de l'Éducation",
      image: "https://i.ytimg.com/vi/8pUi7s2QwwI/hq720.jpg",
      resume: "Le Ministre évoque les réformes majeures prévues cette année scolaire.",
      contenu: "Voici le contenu complet de l'article... [détails de l'interview du ministre de l'éducation]",
    },
    {
        id: 3,
        titre: "Sport : Les Panthères en route pour la CAN",
        image: "https://urlr.me/69rNXe", // tronqué ici
        resume: "L’équipe nationale se prépare activement pour la Coupe d’Afrique.",
        contenu: "Voici le contenu complet de l'article... [détails de l'interview du ministre de l'éducation]",

      },
      {
        id: 4,
        titre: "[Tribune] Nationaliser le transport urbain pour garantir des emplois décents et durables aux Gabonais",
        image: "https://www.gabonreview.com/wp-content/uploads/2025/05/IMG-20250501-WA0033-1536x940.jpg",
        resume: "Retour sur les débats actuels autour de la politique de transport public.",
        contenu: "Voici le contenu complet de l'article... [détails de l'interview du ministre de l'éducation]",

      },
      {
        id: 5,
        titre: "Retour du Gabon dans l’Union africaine : «Plus qu’un symbole», selon Oligui Nguema",
        image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui.jpg", 
        resume: "La réintégration du Gabon au sein de l’Union africaine après plusieurs mois de diplomatie.",
        contenu: <p>
            À l’annonce, mercredi 30 avril, de la réintégration du Gabon au sein de l’Union africaine à l’issue de la dernière réunion du Conseil de paix et de sécurité (CPS) de l’institution à Addis-Abeba, en Éthiopie, Brice Clotaire Oligui Nguema a dit ressentir «une profonde fierté». Ces 20 derniers mois, le président sortant de la transition avait mené une offensive diplomatique intensive, aussi bien auprès de l’institution panafricaine qu’auprès des chefs d’État du continent susceptibles de l’aider à porter sa voix en vue de la levée des sanctions infligées à son pays au lendemain du coup d’État du 30 août 2023. Il faut dire que, contrairement à d’autres organisations internationales, l’UA s’était montrée intransigeante vis-à-vis de Libreville. D’autant que la prise de pouvoir par les militaires, bien que saluée par les populations, violait ses principes.

Or, «les principes cardinaux de la Charte africaine de la démocratie des élections et de la gouvernance, qui représentent le fil conducteur de la stabilité politique et le gage de l’alternance démocratique […] ne peuvent souffrir d’aucune complaisance ou de compromission si le continent devait s’engager à tourner définitivement la page des changements anticonstitutionnels», rappelait encore Mahmoud Ali Youssouf, le 30 avril, dans son discours devant le CPS. 

Un engagement collectif reconnu

Et si le président de la Commission de l’Union africaine a estimé que le Gabon «mérite de retrouver sa place au sein de la grande famille africaine», c’est en raison des nombreuses initiatives développées par le pays afin de conduire la transition à son terme ainsi que «les progrès engrangés» par ses autorités depuis plus d’un an  jusqu’au retour à l’ordre constitutionnel exigé par l’UA avant toute levée de sanctions. Pour Brice Clotaire Oligui Nguema, «ce retour est bien plus qu’un symbole». Il s’agit, considère-t-il, d’une «reconnaissance de notre engagement collectif à reconstruire notre pays dans la paix, l’ordre et la dignité».

Pour marquer définitivement le retour du Gabon au sein de l’Union africaine, le président de la Commission sera présent à la cérémonie d’investiture de samedi prochain au stade d’Angondjé, a annoncé l’organisation.


        </p>

      },
  ];

  // Trouver l'article correspondant à l'ID
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return <div>Article non trouvé</div>; // Gérer le cas où l'article n'existe pas
  }

  return (
    <div className="article-detail">
      <h1>{article.titre}</h1>
      <img src={article.image} alt={article.titre} className="article-detail-image" />
      <p>{article.contenu}</p>
    </div>
  );
};

export default ArticlePage;
