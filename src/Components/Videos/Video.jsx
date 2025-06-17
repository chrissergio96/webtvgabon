import React, { useState } from 'react';
import './Video.css';

const videos = [
   {
    titre: "  Conférence d'Orientation Annuelle à ISTA",
    description: "Le 14 juin 2025, un événement crucial s'est déroulé pour les jeunes esprits de l’ISTA Institut des Sciences Techniques et Appliquées.",
    lien: "https://www.youtube.com/embed/ReLKHndzkWc?si=s_iOL6gzyxCIAqIl",
    miniature: "https://www.youtube.com/embed/ReLKHndzkWc?si=s_iOL6gzyxCIAqIl",
    categorie: "Education",
  },
   {
    titre: "𝗨𝗻𝗲 𝗠𝗼𝗯𝗶𝗹𝗶𝘀𝗮𝘁𝗶𝗼𝗻 𝗥𝗲𝗰𝗼𝗿𝗱 𝗲𝘁 𝘂𝗻𝗲 𝗩𝗶𝘀𝗶𝗯𝗶𝗹𝗶𝘁é 𝗔𝗰𝗰𝗿𝘂𝗲 𝗽𝗼𝘂𝗿 𝗹𝗲 𝗖𝗣𝗘𝗚",
    description: "Avec près d'une trentaine d'exposants et une forte mobilisation de la population port-gentillaise, la Chambre de Commerce n'a pas désempli la semaine du 24 au 31 mai 2025. ",
    lien: "https://www.youtube.com/embed/pf-xpwrhN4Q?si=xkp19ZMtroUN2ae_",
    miniature: "https://www.youtube.com/embed/pf-xpwrhN4Q?si=xkp19ZMtroUN2ae_",
    categorie: "Institutionnel",
  },
  {
    titre: "Port-Gentil",
    description: "FIN DES JEUX SCOLAIRES édition 2025",
    lien: "https://www.youtube.com/embed/urlspq7gI3E?si=iQyXOrc-Xzp9zSmc",
    miniature: "https://www.youtube.com/embed/urlspq7gI3E?si=iQyXOrc-Xzp9zSmc",
    categorie: "Culture",
  },
   {
    titre: "Environnement",
    description: "C𝗼𝘂𝗽 𝗱'𝗲𝗻𝘃𝗼𝗶 𝗱𝗲 𝗹𝗮 𝗦𝗲𝗺𝗮𝗶𝗻𝗲 𝗱𝗲 𝗹'𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗻𝗲𝗺𝗲𝗻𝘁 à 𝗣𝗼𝗿𝘁-𝗚𝗲𝗻𝘁𝗶𝗹",
    lien: "https://www.youtube.com/embed/q_NosOEQCm8?si=GDOHi3O7O0VcLzGu",
    miniature: "https://www.youtube.com/embed/q_NosOEQCm8?si=GDOHi3O7O0VcLzGu",
    categorie: "Environnement",
  },
    {
    titre: "Culture",
    description: "COUPE MWANAS OGOOUEE MARITIME 2025𝗹",
    lien: "https://www.youtube.com/embed/OU5mXZEB_wk?si=11ObJdQzAkn1Sy9r",
    miniature: "https://www.youtube.com/embed/OU5mXZEB_wk?si=11ObJdQzAkn1Sy9r",
    categorie: "Culture",
  },
 
  {
    titre: "Gabon Religion :",
    description: " 𝗟'É𝗴𝗹𝗶𝘀𝗲 𝗠𝗗𝗢 𝗠𝗼𝗻𝘁 𝗱𝗲𝘀 𝗢𝗹𝗶𝘃𝗶𝗲𝗿𝘀 𝗖é𝗹è𝗯𝗿𝗲 𝘂𝗻 𝗔𝗻 𝗱𝗲 𝗙𝗼𝗶 à 𝗢𝗺𝗯𝗼𝘂é.",
    lien: "https://www.youtube.com/embed/jNNAJjHe6kQ?si=Fz3qulkvl8zl2iLO",
    miniature: "https://www.youtube.com/embed/jNNAJjHe6kQ?si=Fz3qulkvl8zl2iLO",
    categorie: "Religion",
  },
  {
    titre: "Interview avec les jeunes entrepreneurs",
    description: "Les projets locaux accompagnés par la mairie.",
    lien: "https://www.youtube.com/embed/tgbNymZ7vqY",
    miniature: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    categorie: "Économie",
  },
    {
    titre: "Journee Sportive",
    description: "CSB 0 - 1 MANGASPORT national foot 21è journée",
    lien: "https://www.youtube.com/embed/4R-lx3OmwpM?si=tjiH90f4lLfXhOW4",
    miniature: "https://www.youtube.com/embed/4R-lx3OmwpM?si=tjiH90f4lLfXhOW4",
    categorie: "Sport",
  },
  {
    titre: "Social",
    description: "L'Association NCTINA’ZIZO au chevet des jeunes mères et de la communauté",
    lien: "https://www.youtube.com/embed/bSczeDLRu34?si=lJ9u14YEa1LWEatO",
    miniature: "https://www.youtube.com/embed/bSczeDLRu34?si=lJ9u14YEa1LWEatO",
    categorie: "Social",
  },
  {
    titre: "Environnement",
    description: "𝗦𝗲𝗺𝗮𝗶𝗻𝗲 𝗱𝗲 𝗹'𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗻𝗲𝗺𝗲𝗻𝘁 dans la commune d'Omboué",
    lien: "https://www.youtube.com/embed/MPXzMKoN9n8?si=ZGdFVGmZTh276yig",
    miniature: "https://www.youtube.com/embed/MPXzMKoN9n8?si=ZGdFVGmZTh276yig",
    categorie: "Environnement",
  },
  {
    titre: "Îlots disputés : ",
    description: "Îlots disputés : la CIJ donne raison à la Guinée équatoriale face au Gabon",
    lien: "https://www.youtube.com/embed/oq2XgME-JBw?si=AkLHSTjd-kRGKdOX" ,
    miniature: "https://www.youtube.com/embed/oq2XgME-JBw?si=AkLHSTjd-kRGKdOX" ,
    categorie: "Politique",
  },
  {
    titre: "Elections Presidentielles",
    description: "𝗨𝗻 𝗰𝗮𝗻𝗱𝗶𝗱𝗮𝘁, 𝘂𝗻 𝗽𝗿𝗼𝗷𝗲𝘁: 𝗹'𝗢𝗴𝗼𝗼𝘂é-𝗠𝗮𝗿𝗶𝘁𝗶𝗺𝗲 é𝘁𝗮𝗶𝘁 à 𝗹'é𝗰𝗼𝘂𝘁𝗲",
    lien: "https://www.youtube.com/embed/ZgYnkxeQBjg?si=1pGvOeTPn_vCT5zE",
    miniature: "https://www.youtube.com/embed/ZgYnkxeQBjg?si=1pGvOeTPn_vCT5zE",
    categorie: "Politique",
  },
  {
    titre: "GABON / FAIT-DIVERS :",
    description: "Un individu profane la tombe de son père et s’empare du crâne",
    lien: "https://www.youtube.com/embed/lD1bAseBlRY?si=Bibu2akPLKyfDUIj",
    miniature: "https://www.youtube.com/embed/lD1bAseBlRY?si=Bibu2akPLKyfDUIj",
    categorie: "Faits Divers",
  },
  {
    titre: "GABON / Elections Presidentielles :",
    description: "Investiture du nouveau Président Élu du Gabon/ Arrivée du Président de la République à Libreville.",
    lien: "https://www.youtube.com/embed/c5VKRt__bEw?si=a9R5Shv3AMPhVG6r",
    miniature: "https://www.youtube.com/embed/c5VKRt__bEw?si=a9R5Shv3AMPhVG6r",
    categorie: "Politique",
  },
   {
    titre: "REVELATION WEB-TV/AU GABON:",
    description: "DES PROCHES COLLABORATEURS D'ALI BONGO ÉPINGLÉS AVEC DES SACS",
    lien: "https://www.youtube.com/embed/8Jvb0_pzmYw?si=Zp0YGuPpX64DUH8y",
    miniature: "https://www.youtube.com/embed/8Jvb0_pzmYw?si=Zp0YGuPpX64DUH8y",
    categorie: "Faits Divers",
  },

];


const Video = () => {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [search, setSearch] = useState('');

  const filteredVideos = videos.filter(video => {
    const matchCategory =
      selectedCategory === 'Toutes' || video.categorie === selectedCategory;
    const matchSearch =
      video.titre.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="videos-section">
      <h1 className="videos-title">Nos Vidéos</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher une vidéo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Filtrage par catégorie */}
      <div className="filter-bar">
        {['Toutes', 'Institutionnel','Culture', 'Économie','Faits Divers', 'Religion','Environnement','Social'  ,'Politique'].map((cat) => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de vidéos */}
      <div className="videos-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video.id} className="video-card video-card-modern">
              <iframe
                src={video.lien}
                title={video.titre}
                className="video-frame"
                allowFullScreen
              ></iframe>
              <div className="video-info">
                <h2>{video.titre}</h2>
                <p>{video.description}</p>
              </div>
              
            </div>
          ))
        ) : (
          <p className="no-results">Aucune vidéo ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
};

export default Video;
