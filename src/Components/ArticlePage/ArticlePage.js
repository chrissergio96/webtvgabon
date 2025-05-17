import React from 'react';
import { useParams } from 'react-router-dom'; // Permet de récupérer les paramètres dans l'URL
import './ArticlePage.css';
import { Link } from 'react-router-dom';

// Définir une fonction pour récupérer un article par son id
const ArticlePage = () => {
  const { id } = useParams(); // Récupérer l'id de l'article depuis l'URL
  const articles = [
    {
      id: 1,
      titre: "Libreville-Rome: Oligui Nguema à l’inauguration du pontificat du pape Léon XIV",
      image: "https://www.gabonreview.com/wp-content/uploads/2025/05/Oligui1_n.jpg",
      resume: "Le président de la République, Brice Clotaire Oligui Nguema, prendra part le 18 mai 2025, à Rome, à la messe inaugurale du pontificat du pape Léon XIV. Une cérémonie liturgique de grande portée symbolique, à laquelle assistent de nombreux chefs d’État et représentants internationaux, soulignant l’importance diplomatique et spirituelle de l’événement.",
      contenu: <p>
Le président de la République, Brice Clotaire Oligui Nguema, prendra part le 18 mai 2025, à Rome, à la messe inaugurale du pontificat du pape Léon XIV. © D.R. <br/>
Le dimanche 18 mai 2025, la basilique Saint-Pierre de Rome et l’esplanade attenante accueillent l’un des événements les plus solennels de la vie de l’Église catholique : l’inauguration officielle du pontificat du pape Léon XIV, 267e successeur de l’apôtre Pierre. À cette occasion, le chef de l’État gabonais, Brice Clotaire Oligui Nguema, fait partie des nombreuses personnalités présentes au Vatican pour accompagner ce moment fondateur du nouveau ministère pétrinien.<br/>
Le déplacement du président gabonais s’inscrirait dans une démarche de respect des liens historiques unissant le Gabon au Saint-Siège, mais aussi dans une volonté d’affirmer la place du pays dans les grandes rencontres internationales à caractère spirituel et diplomatique.<br/><br/>
<strong>Une présence politique à forte portée symbolique</strong> <br/>
La participation du président gabonais à cet événement témoigne de l’intérêt accordé par les autorités gabonaises aux dynamiques religieuses internationales, mais aussi de leur engagement envers le dialogue interreligieux et les valeurs de paix, de justice et de solidarité portées par l’Église catholique. Le Gabon, dont une large part de la population est de confession catholique, entretient des relations diplomatiques stables avec le Saint-Siège depuis plus de cinquante ans.
<img src='https://www.gabonreview.com/wp-content/uploads/2025/05/oLIGUI2_n.jpg' alt=''></img>
<em>Le déplacement du président gabonais s’inscrirait dans une démarche de respect des liens historiques unissant le Gabon au Saint-Siège. © D.R.</em> <br/><br/>
En assistant à cette cérémonie de haute portée spirituelle, Brice Clotaire Oligui Nguema réaffirme également l’ancrage du Gabon dans une tradition de respect des croyances et de reconnaissance des figures d’autorité morale sur la scène internationale. Dans un monde traversé par de nombreuses fractures, la présence du président gabonais à Rome s’inscrit comme un acte de diplomatie douce, où la foi, la culture et la politique se rejoignent pour affirmer les principes universels de fraternité et d’espérance. <br/><br/>
<strong>Une cérémonie riche de symboles et de traditions</strong> <br/>
<p>La messe d’ouverture du pontificat, prévue à 10 heures, marque l’entrée officielle du pape Léon XIV dans ses fonctions de pasteur de l’Église universelle. Cette cérémonie rassemblera quelque 250 000 fidèles, ainsi que plus de 200 délégations étrangères. Parmi les dirigeants annoncés figurent la présidente de la Commission européenne Ursula von der Leyen, le président israélien Isaac Herzog, le président ukrainien Volodymyr Zelensky, ou encore le premier ministre français François Bayrou.</p>
<p>Le rite d’inauguration débute dans la basilique, devant le tombeau de saint Pierre, avant de se poursuivre sur la place Saint-Pierre. Pendant la liturgie, le pape reçoit le pallium, étole en laine symbolisant son rôle de bon pasteur, et l’anneau du pêcheur, emblème de sa mission apostolique. Le Collège des cardinaux lui prête ensuite obéissance, dans un geste d’unité et de communion ecclésiale, avant que le souverain pontife ne délivre la bénédiction Urbi et Orbi, adressée à la ville de Rome et au monde entier.</p>
</p>,
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
      {
        id: 6,
        titre: "Port-Gentil : il vole pour assurer le trousseau de sa copine",
        image: "https://urlr.me/QmRaYB", 
        resume: "Un compatriote répondant au nom de Yorith Christian Nzaou Moundounga a opté pour le vol afin de payer les soins médicaux nécessaires pour la naissance de son futur enfant. Un acte dont il en paye désormais les frais à la prison du Château à Port-Gentil dans la province de l’Ogooué-Maritime nous apprend le site d’information Ogooué-Maritime Infos dans son article publié ce 30 avril 2025. ",
        contenu: <p>
           Déterminé à accompagner sa compagne jusqu’à l’accouchement malgré l’absence de moyens financiers, Yorith Christian Nzaou Moundounga, un compatriote résidant à Port-Gentil n’a eu d’autre choix que de mettre à voler. Au cours de son interrogatoire à la Police judiciaire après son interpellation, ce dernier à reconnu avoir dérobé un matelas à ressorts et un sac d’ustensiles de cuisine dans une maison en construction dans son quartier, derrière la SEEG. Un acte pourtant puni et condamné par le législateur gabonais. <br/>
           <strong>La facilité, un mauvais conseiller</strong> <br/>
A la question de savoir les raisons qui l’ont motivé à agir de la sorte, Yorith Christian Nzaou Moundounga a expliqué que son intention était de revendre les objets pour obtenir l’argent permettant de couvrir les examens médicaux de sa petite amie, enceinte de huit mois.<strong> « En ce moment, je ne fais aucune activité. Elle n’a fait aucun suivi médical, et cela peut être dangereux. J’ai volé pour éviter cela. Mais je regrette mon acte » </strong>, a poursuivi le futur papa en reconnaissant avec amertume qu’il a fait une grossière erreur en volant ces effets. <br/>
Selon le récit livré par OMI, le jeune homme âgé de 24 ans a été interpellé après que le propriétaire du domicile ai constaté qu’il était l’autre du cambriolage qu’il avait subi. Après avoir déposé une plainte auprès de la Police judiciaire, Yorith Christian Nzaou Moundounga a été interpellé à son domicile, où il vit avec ses parents. Il a reconnu les faits devant les enquêteurs. Malgré ses remords, le jeune homme  été placé sous mandat de dépôt à la prison centrale de Port-Gentil, où il devra méditer sur son sort.
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
       {/* Bouton retour à la page d'accueil */}
     <div className="retour-accueil">
     <Link to="/articles" className="btn-retour">← Page précédente</Link>
   </div>
    </div>
  );
};

export default ArticlePage;
