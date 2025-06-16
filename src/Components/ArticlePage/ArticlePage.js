import React from 'react';
import { useParams } from 'react-router-dom'; // Permet de récupérer les paramètres dans l'URL
import './ArticlePage.css';


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
<img id='imgdeux' src='https://www.gabonreview.com/wp-content/uploads/2025/05/oLIGUI2_n.jpg' alt=''></img>
<em>Le déplacement du président gabonais s’inscrirait dans une démarche de respect des liens historiques unissant le Gabon au Saint-Siège. © D.R.</em> <br/><br/>
En assistant à cette cérémonie de haute portée spirituelle, Brice Clotaire Oligui Nguema réaffirme également l’ancrage du Gabon dans une tradition de respect des croyances et de reconnaissance des figures d’autorité morale sur la scène internationale. Dans un monde traversé par de nombreuses fractures, la présence du président gabonais à Rome s’inscrit comme un acte de diplomatie douce, où la foi, la culture et la politique se rejoignent pour affirmer les principes universels de fraternité et d’espérance. <br/><br/>
<strong>Une cérémonie riche de symboles et de traditions</strong> <br/>
<p>La messe d’ouverture du pontificat, prévue à 10 heures, marque l’entrée officielle du pape Léon XIV dans ses fonctions de pasteur de l’Église universelle. Cette cérémonie rassemblera quelque 250 000 fidèles, ainsi que plus de 200 délégations étrangères. Parmi les dirigeants annoncés figurent la présidente de la Commission européenne Ursula von der Leyen, le président israélien Isaac Herzog, le président ukrainien Volodymyr Zelensky, ou encore le premier ministre français François Bayrou.</p>
<p>Le rite d’inauguration débute dans la basilique, devant le tombeau de saint Pierre, avant de se poursuivre sur la place Saint-Pierre. Pendant la liturgie, le pape reçoit le pallium, étole en laine symbolisant son rôle de bon pasteur, et l’anneau du pêcheur, emblème de sa mission apostolique. Le Collège des cardinaux lui prête ensuite obéissance, dans un geste d’unité et de communion ecclésiale, avant que le souverain pontife ne délivre la bénédiction Urbi et Orbi, adressée à la ville de Rome et au monde entier.</p>
</p>,
    },
    {
      id: 2,
      titre: "La dépouille de Boupendza arrive à Libreville le 26 mai",
      image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-20-at-12.41.24.jpeg",
      resume: "La dépouille de l’ancien international gabonais, Aaron Boupendza arrive à Libreville le lundi 26 mai prochain par un vol régulier de la compagnie Turkish, selon une source familiale.",
      contenu: <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Société - Sports </strong> <br/>
        <em>Port-Gentil le, 22 mai 2025</em> <br/><br/>
        <strong>La dépouille de l’ancien international gabonais, Aaron Boupendza arrive à Libreville le lundi 26 mai prochain par un vol régulier de la compagnie Turkish, selon une source familiale.</strong><br/>
        <p>Des obsèques dignes seront organisées en mémoire des services que ce talentueux footballeur gabonais a rendu à la nation, a récemment annoncé le ministre des Sports Patrick Barbera Isaac.</p> <br/>
        <p>Le gouvernement gabonais et la famille biologique du défunt ont planifié le programme qui prévoit des cérémonies officielles, des hommages sportifs et une mobilisation populaire attendue autour de ce moment de mémoire collective.</p> <br/>
        <p>Né à Moanda (sud-est) en 1996 Boupendza est décédé le 16 avril dernier en Chine à la suite d’une chute du 11e étage de son immeuble d’habitation.
        Aaron Boupendza a marqué le football national par son talent, notamment avec ses 35 sélections et 8 buts en équipe nationale ; surtout un passage remarqué à la CAN 2023 au Cameroun.
        </p>

      </p>
    },
    {
        id: 3,
        titre: "Mbanié : un compte rendu exhaustif sera présenté au Parlement et au gouvernement (Oligui Nguema)",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/carte-Gabon-Guinee-equatoriale.jpg", // tronqué ici
        resume: "Dans une publication sur son compte Facebook, le président gabonais Brice Clotaire Oligui Nguema a promis qu’un compte rendu exhaustif sera présenté aux deux chambres du Parlement ainsi qu’au gouvernement, dans une démarche de transparence totale suite à la décision de la Cour de justice international (CJI) qui a dans sa décision le 19 mai dernier attribué l’île Mbanié et les îlots Cocotier et Cogna à la Guinée Equatoriale.",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Politique </strong><br/>
        <em>Port-Gentil le, 22 mai 2025</em> <br/><br/>
        <strong>Dans une publication sur son compte Facebook, le président gabonais Brice Clotaire Oligui Nguema a promis qu’un compte rendu exhaustif sera présenté aux deux chambres du Parlement ainsi qu’au gouvernement, dans une démarche de transparence totale suite à la décision de la Cour de justice international (CJI) qui a dans sa décision le 19 mai dernier attribué l’île Mbanié et les îlots Cocotier et Cogna à la Guinée Equatoriale.</strong><br/>
        <p>
        « Un compte rendu exhaustif sera présenté aux deux chambres du Parlement ainsi qu’au gouvernement, dans une démarche de transparence totale que notre administration s’est engagée à maintenir. Je vous demande, en attendant, de faire preuve de retenue et de sagesse », a notamment écrit le président gabonais.

Oligui Nguema dit attendre auparavant « le retour de nos deux vaillants experts gabonais qui ont participé aux délibérations et qui suivent ce dossier depuis près de 20 ans » pour ce compte rendu.
          </p> <br/>
        <p>« L’heure n’est pas aux déclarations précipitées ni aux réactions passionnelles », a conseillé le numéro un gabonais.
          </p> <br/>
        <p>
        « Tout sera mis en œuvre pour préserver la paix dans notre région et défendre les intérêts de notre nation. Nous privilégierons toujours le dialogue et la concertation avec nos voisins équato-guinéens avec qui nous partageons des liens historiques et fraternels », a-t-il assuré.
        </p>

      </p>

      },
      {
        id: 4,
        titre: "Pétrole : BW Energy reprend le contrôle du navire de production FPSO BW Adolo",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-16.08.25.jpeg",
        resume: "Depuis ce mardi, la gestion opérationnelle du FPSO BW Adolo, navire de production pétrolière offshore situé au large de Port-Gentil, est assurée par BW Energy Gabon SA. La filiale locale reprend le contrôle de cette infrastructure stratégique, en service depuis 2018.",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Economie </strong><br/>
        <em>Port-Gentil le, 22 mai 2025</em> <br/><br/>
        <strong>Depuis ce mardi, la gestion opérationnelle du FPSO BW Adolo, navire de production pétrolière offshore situé au large de Port-Gentil, est assurée par BW Energy Gabon SA. La filiale locale reprend le contrôle de cette infrastructure stratégique, en service depuis 2018.</strong><br/>
        <p>
        L’information relayée sur le site d’information spécialisé GlobeNewswire, indique que BW Energy Gabon prend désormais en main les opérations et la maintenance du navire, à la place de BW Offshore, ancien exploitant norvégien qui conserve la propriété du FPSO et poursuit sa location dans les mêmes conditions, hors services techniques.        
          </p> <br/>
        <p>
        Ce transfert marque une étape importante dans la montée en puissance de BW Energy Gabon sur le permis marin de Dussafu, au large de Port-Gentil.  
        </p> <br/>
        <p>    
        Autre point clé : le contrat prévoit une option d’achat du FPSO en 2028, pour un montant de 100 millions de dollars. De quoi poser les bases d’un engagement encore plus durable sur le long terme.

L’objectif affiché est clair : permettre à BW Energy Gabon de mieux piloter ses activités sur place, d’optimiser les performances du champ pétrolier et de renforcer les synergies au niveau local. Une phase de transition est prévue jusqu’au 30 juin prochain, le temps pour les équipes de s’assurer d’un passage de relais sécurisé et sans heurts.     
          </p>
          <p>
          Ce changement s’inscrit dans une volonté plus large de renforcer l’ancrage local des grands projets énergétiques au Gabon. Déjà majoritaire sur le permis de Dussafu, BW Energy confirme son rôle de premier plan dans le développement du secteur pétrolier national.
          </p>


      </p>
      },
      {
        id: 5,
        titre: "UA – UE : Le Gabon sur la table des discussions ministérielles à Bruxelles",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-12.25.54.jpeg", 
        resume: "Le Gabon, aux côtés de la Commission de la Communauté économique des États de l’Afrique Centrale (CEEAC), dont le siège est basé à Libreville et plusieurs autres délégations africaines prennent part, ce mercredi à Bruxelles, à la troisième réunion ministérielle, préparatoire du prochain Sommet Union africaine (UA) et Union européenne (UE).",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>⁠Coopération - Diplomatie</strong><br/>
        <em>Port-Gentil le, 21 mai 2025</em> <br/><br/>
        <strong>Le Gabon, aux côtés de la Commission de la Communauté économique des États de l’Afrique Centrale (CEEAC), dont le siège est basé à Libreville et plusieurs autres délégations africaines prennent part, ce mercredi à Bruxelles, à la troisième réunion ministérielle, préparatoire du prochain Sommet Union africaine (UA) et Union européenne (UE).</strong><br/>
        <img src='	https://gabonactu.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-21-at-12.26.55.jpeg' alt='' style={{width:'60%'}}></img> <br/>
        <p> Une séquence des discussions UA – UE à Bruxelles @ DR          </p> <br/>
        <p>
        Ce rendez-vous diplomatique de haut niveau permet aux ministres des Affaires étrangères des deux continents de faire le point sur les engagements pris lors du sommet Union africaine – Union européenne de février 2022, et d’évaluer les progrès réalisés depuis lors.      
        </p> <br/>
        <p>    
        Autre point clé : le contrat prévoit une option d’achat du FPSO en 2028, pour un montant de 100 millions de dollars. De quoi poser les bases d’un engagement encore plus durable sur le long terme.

          </p><br/>
          <p>
          Les discussions portent notamment sur des thématiques majeures pour les deux continents : la paix et la sécurité, la gouvernance, le multilatéralisme, la prospérité partagée, mais aussi les enjeux liés aux migrations, à la mobilité et à la croissance démographique sur le continent.
          </p>
          <p>
          La réunion est coprésidée par Kaja Kallas, Haute représentante de l’UE pour les affaires étrangères et la politique de sécurité, et par Tete António, ministre angolais des Relations extérieures et président du Conseil exécutif de l’Union africaine.
          </p> <br/>
          <p>
          La présence du Gabon et de la CEEAC à cette réunion traduit l’importance stratégique de la région Afrique Centrale dans les partenariats Afrique-Europe. Pour Libreville, ce type de forum constitue aussi une occasion de renforcer sa diplomatie multilatérale, de consolider son rôle au sein des grandes instances régionales et d’affirmer son retour sur la scène internationale.
          </p>

      </p>

      },
      {
        id: 6,
        titre: "Pétrole et gaz : Quelles solutions pour renforcer la sécurité au travail ?",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/Petrole.jpg",
        resume: "La capitale gabonaise abritera du 25 au 29 mai 2025, la 2ᵉ édition des Rencontres Africaines de Libreville sur la Prévention des Risques Professionnels (RALI PRP) dans le secteur pétrolier et les activités connexes. ",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Economie - Environnement</strong><br/>
        <em> Port-Gentil le, 22 mai 2025</em> <br/><br/>
        <strong>La capitale gabonaise abritera du 25 au 29 mai 2025, la 2ᵉ édition des Rencontres Africaines de Libreville sur la Prévention des Risques Professionnels (RALI PRP) dans le secteur pétrolier et les activités connexes.</strong><br/>
        <p> Cet atelier sous-régional portera sur le thème : <strong> « La gouvernance de la sécurité et santé au travail dans l’industrie du pétrole, du gaz et activités connexes : état des lieux et perspectives en 2025 ».  </strong>      </p> <br/>
        <p>
        Objectif :<strong> offrir un cadre d’échange et de réflexion pour promouvoir des environnements de travail plus sûrs et plus sains dans une industrie à haut risque. </strong>       </p> <br/>
        <p>    
        Plusieurs thématiques seront abordées, notamment : l’évaluation des recommandations de la première édition tenue en 2014 ; l’état d’application des normes juridiques en matière de santé et sécurité au travail ; l’analyse des risques physiques, chimiques, biologiques ou psychosociaux ; les méthodes de prévention et de gestion des urgences.
          </p><br/>
          <p>
          Cette initiative vise à encourager la mise en place de mécanismes de signalement des accidents du travail, à renforcer la prévention et à partager les bonnes pratiques pour une meilleure gouvernance des risques dans le secteur extractif en Afrique centrale.      
         </p>
        

      </p>
      },
      
      {
        id: 7,
        titre: "Modèle économique du projet eGabon-SIS : les experts proposent un prélèvement de 10% dans les recettes propres des structures hospitalières ",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/eGabon1.jpg",
        resume: "Les experts participants à l’atelier de validation du modèle économique du projet eGabon-SIS tenu mercredi 21 mai 2025 à Libreville, ont proposé un prélèvement de 10% dans les recettes propres des structures hospitalières du Gabon pour maintenir le financement de ce système d’information de santé après le financement de la Banque Mondiale qui arrivera à échéance dans quelques années.",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Santé</strong><br/>
        <em>Port-Gentil le, 21 mai 2025 </em> <br/><br/>
        <strong>Les experts participants à l’atelier de validation du modèle économique du projet eGabon-SIS tenu mercredi 21 mai 2025 à Libreville, ont proposé un prélèvement de 10% dans les recettes propres des structures hospitalières du Gabon pour maintenir le financement de ce système d’information de santé après le financement de la Banque Mondiale qui arrivera à échéance dans quelques années.</strong><br/>
        <p> « Ce que nous retenons dans ce modèle économique c’est que nous faisons une proposition d’un prélèvement de 10% des recettes propres des différentes structures hospitalières impactées par le système », a indiqué le Dr Gaétan Moukoumbi Lipenghet, spécialiste en économie de santé.    </p> <br/>
        <p>
        L’atelier avait pour but de présenter aux directeurs généraux des structures de santé et aux médecins chefs de centre de santé de Libreville qui sont présentement impactés par le système d’information de santé mis en place par le projet eGabon SIS, le modèle économique qui permettra de maintenir ce système après la phase de déploiement.
         </p> <br/>
         <img src='		https://gabonactu.com/wp-content/uploads/2025/05/eGabon3.jpg' alt='' style={{width:'60%'}}></img> <br/>
         <p> La phase pilote concerne une douzaine des structures sanitaires du Grand Libreville.  Il s’agit notamment du CHU mère enfant, du CHU d’Owendo, les hôpitaux d’instructions des armées (Pk9 et Akanda)  et  d’autres centres de santé. Lancé en janvier dernier, le système améliore désormais la gestion financière et humaine des structures sanitaires.       </p> <br/>
        <p>    
        « Par rapport aux retombées, tous les malades sont identifiés,  tout est informatisé ;  de cette façon il y a moins de perdu de vues », a indiqué Dr Obone, médecin chef du centre de santé de glass, un des hôpitaux impactés par le projet.            </p><br/>
          <p>
          Ce système d’information de santé devra couvrir l’ensemble des structures de santé du Gabon quel que soit l’endroit où la structure se situe, indique-t-on.     <br/>
          « Le Gabon s’est engagé dans une transformation profonde de son système de santé. Cela ne saurait se faire sans une base informationnelle robuste et sans un financement innovant, durable et inclusif. C’est que nous construction aujourd’hui c’est le socle d’un avenir meilleur pour les générations futures », a expliqué en présidant les travaux, Alain Charles Rotimbo, Secrétaire générale du Ministère de la santé.
        </p>

        

      </p>
      }
      ,
      {
        id: 8,
        titre: "Noureddin Bongo à Londres, Ali Bongo et Sylvia toujours à Luanda",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/Noureddin-a-Londres-.jpg",
        resume: "La capitale gabonaise abritera du 25 au 29 mai 2025, la 2ᵉ édition des Rencontres Africaines de Libreville sur la Prévention des Risques Professionnels (RALI PRP) dans le secteur pétrolier et les activités connexes. ",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>International - Politique</strong><br/>
        <em>Port-Gentil le, 20 mai 2025</em> <br/><br/>
        <strong>Noureddin Bongo Valentin est arrivé à Londres vendredi soir en provenance de Luanda en Angola où se trouvent toujours son père Ali Bongo et sa mère Sylvia Bongo, a confié à la rédaction de Gabonactu.com une source bien informée.</strong><br/>
        <p> « Il est arrivé vendredi soir à Londres. Il a retrouvé son épouse et ses garçons », a précisé la source qui a préféré l’anonymat.   </p> <br/>
        <p>
        Arrêté puis jeté en prison au lendemain du coup d’Etat du 30 août 2023, Noureddin Bongo Valentin et sa mère Sylvia Bongo également incarcéré ont été mis en liberté provisoire le 14 mai dernier, selon Eddy Minang, procureur général de la Cour d’appel de Libreville.
       </p> <br/>
        <p>    
        Dans la nuit du 15 au 16 mai dernier, la famille (Ali Bongo, Sylvia Bongo et Noureddin) s’est envolée discrètement pour Luanda.       
       </p><br/>
          <p>
          L’exfiltration de l’ancienne famille présidentielle a suscité la controverse. Certains gabonais ont regretté la sortie du territoire de Noureddin et sa mère sans procès. Le procureur général a assuré qu’un procès aura bel et bien lieu. Ils ont été libérés pour des raisons médicales. <br/>
          Ali Bongo, l’ancien président gabonais n’est cependant pas inquiété par la justice. Il est libre de ses mouvements.
         </p>
        

      </p>
      }
      ,
      {
        id: 9,
        titre: "Une voiture s’encastre dans un transfo de la SEEG et plonge une partie des Charbonnages dans le noir",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/Transfo.jpg",
        resume: "La capitale gabonaise abritera du 25 au 29 mai 2025, la 2ᵉ édition des Rencontres Africaines de Libreville sur la Prévention des Risques Professionnels (RALI PRP) dans le secteur pétrolier et les activités connexes. ",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Economie - Environnement</strong> <br/>
        <em>20 mai 2025</em> <br/> <br/>
        <strong>Un véhicule a violemment percuté mardi un poste de distribution d’électricité de la SEEG au Camp de Gaulle plongeant une partie du quartier Charbonnages dans le noir.</strong><br/>
        <p>
          Selon un communiqué de la SEEG, le choc a détruit tous les équipements du poste dont un transformateur de 630 Kva. La destruction de ces équipements a provoqué une coupure d’électricité dans la zone située entre le rond-point Camp de Gaulle et les Charbonnages. <br/> <br/>
          Les équipes techniques SEEG s’attèlent en ce moment au remplacement des équipements avariés, en vue d’un rétablissement de la fourniture en électricité qui devrait intervenir dans les meilleurs délais.
        </p>
       
        

      </p>
      }
      ,
      {
        id: 10,
        titre: " Rappel : liste des membres du gouvernement gabonais (5 mai 2025)",
        image: "https://gabonactu.com/wp-content/uploads/2024/01/Barro1.jpg",
        resume: "Voici la liste des membres du gouvernement nommé par décret présidentiel par le chef de l’Etat, Brice Clotaire Oligui Nguema dont le Vice-Président du gouvernement est Alexandre Barro Chambrier.",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Politique</strong> <br/>
                <em>Port-Gentil le, 22 mai 2025</em><br/><br/>
        <h1>Voici la liste des membres du gouvernement nommé par décret présidentiel par le chef de l’Etat, Brice Clotaire Oligui Nguema dont le Vice-Président du gouvernement est Alexandre Barro Chambrier.</h1>
         <br/>
        
        <p>1 - Ministre d’Etat, ministre de l’Economie, des Finances, de la Dette et des Participations, chargé de la lutte contre la vie chère : Henri-Claude Oyima </p> <br/>
        <p>2 - Ministre d’Etat, ministre de l’Education nationale, de l’Instruction civique et de la formation professionnelle : Camélia Ntoutoume-Leclercq </p> <br/>
        <p>3 - Ministre d’Etat, ministre des transports, de la Marine Marchande et de la logistique : Ulrich Manfoumbi Manfoumbi </p> <br/>
        <p>4 - Ministre de la Réforme et des Relations avec les institutions : François Ndong Obiang </p> <br/>
        <p>5 - Ministre des Affaires étrangères et de la Coopération, chargé de la diaspora : Régis Onanga Ndiaye </p> <br/>
        <p>6 - Ministre de la Défense nationale : Brigitte Onkanowa </p> <br/>
        <p>7 - Ministre de l’Intérieur, de la Sécurité et de la Décentralisation : Hermann Immongault </p> <br/>
        <p>8 - Ministre de la Justice, Garde des sceaux, chargé des Droits humains : Séraphin Akure-Davain </p> <br/>
        <p>9 - Ministre de l’Accès universel à l’eau et à l’énergie : Philippe Tonangoye </p> <br/>
        <p>10 - Ministre de la Communication et des Médias : Paul-Marie Gondjout  </p> <br/>
        <p>11 - Ministre des Eaux et Forêts, chargé du conflit Homme-faune : Maurice Ntossui Allogo </p> <br/>
        <p>12 - Ministre de l’Environnement, de l’Ecologie et du Climat : Mays Mouissi </p> <br/>
        <p>13 - Ministre de la Mer, de la Pêche et de l’Economie bleue, porte-parole du gouvernement : Laurence Ndong</p> <br/>
        <p>14 - Ministre des Mines et des Ressources géologiques : Gilles Nembé </p> <br/>
        <p>15 - Ministre du Pétrole et du Gaz : Sosthène Nguema Nguema </p> <br/>
        <p>16 - Ministre de la Santé : Pr Adrien Mougougou </p> <br/>
        <p>17 - Ministre du Logement, de l’Habitat, de l’Urbanisme et du Cadastre : Ludovic Menié </p> <br/>
        <p>18 - Ministre du Tourisme durable et de l’Artisanat : Pascal Ogowe Siffon </p> <br/>
        <p>19 - Ministre de la Planification et de la Prospective : Louise Ovono </p> <br/>
        <p>20 - Ministre des Affaires sociales et de l’Inclusion : Nadine Nathalie Awanang </p> <br/>
        <p>21 - Ministre de l’Enseignement supérieur et de la Recherche scientifique : Simplice Désiré Mamboula </p> <br/>
        <p>22 - Ministre de la Fonction publique et du Renforcement des capacités : Pr Marcelle Ibounda </p> <br/>
        <p>23 - Ministre du Travail, du Plein-emploi et du Dialogue social : Patrick Barbera Isaac </p> <br/>
        <p>24 - Ministre de l’Industrie et de la Transformation locale : Me Lubin Ntoutoume </p> <br/>
        <p>25 - Ministre des Travaux publics et de la Construction : Edgard Moukoumbi </p> <br/>
        <p>26 - Ministre de l’Economie numérique, de la Digitalisation et de l’Innovation : Mark-Alexandre Doumba </p> <br/>
        <p>27 - Ministre de l’Entrepreneuriat, du Commerce et des PME-PMI : Zenaba Gninga Chaning </p> <br/>
        <p>28 - Ministre de l’Agriculture, de l’Elevage et du Développement rural : Odette Polo </p> <br/>
        <p>29 - Ministre de la Femme, de la Famille et de la Protection de l’enfance : Elodie Diane Fouefoue </p> <br/>
        <p>30 - Ministre de la Jeunesse, des Sports, du Rayonnement culturel et des Arts, chargé de la vie associative : Dr. Armande Longo .</p> 
        
      </p>
      },
      
      {
        id: 11,
        titre: "[🔴𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗘] 𝗨𝗻𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘀𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝗰𝗼𝗿𝗱 𝗲𝘁 𝘂𝗻𝗲 𝗩𝗶𝘀𝗶𝗯𝗶𝗹𝗶𝘁é 𝗔𝗰𝗰𝗿𝘂𝗲 𝗽𝗼𝘂𝗿 𝗹𝗲 𝗖𝗣𝗘𝗚",
        image: "https://gabonactu.com/wp-content/uploads/2025/05/Transfo.jpg",
        resume: "Avec près d'une trentaine d'exposants et une forte mobilisation de la population port-gentillaise, la Chambre de Commerce n'a pas désempli la semaine du 24 au 31 mai 2025. ",
        contenu:  <p>
        <strong style={{color:'red',textTransform:'uppercase' }}>Faits Divers</strong> <br/>
        <h1>Une voiture s’encastre dans un transfo de la SEEG et plonge une partie des Charbonnages dans le noir</h1>
         <br/>
        <strong>Un véhicule a violemment percuté mardi un poste de distribution d’électricité de la SEEG au Camp de Gaulle plongeant une partie du quartier Charbonnages dans le noir.</strong><br/>
        <p>
      L'objectif du CPEG Collectif des Petites Entreprises Gabonaises  était clair : 
       offrir une visibilité maximale aux exposants et aux entrepreneurs locaux, et force est de constater que la mission a été accomplie.        </p><br/>
       <em>11 juin 2025</em>      </p>
      
      }
      




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
