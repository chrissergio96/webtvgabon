import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConf";
import "./Live.css";

const Live = () => {
  const [lives, setLives] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("facebook.com")) return url;
    if (url.includes("twitch.tv/")) {
      const channel = url.split("twitch.tv/")[1];
      return `https://player.twitch.tv/?channel=${channel}&parent=localhost`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  useEffect(() => {
    const fetchLives = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "live"));
        const data = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            ...docData,
            date: docData.date?.toDate ? docData.date.toDate().toLocaleString("fr-FR") : ""
          };
        });
        setLives(data);
      } catch (error) {
        console.error("Erreur lors du chargement des lives :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLives();
  }, []);

  if (loading) return <p>Chargement du direct...</p>;

  const liveActif = lives.find((live) => live.actif);
  const prochainsLives = lives.filter((live) => !live.actif);

  return (
    <div className="live-container">
      <h2>🔴 En Direct</h2>

      {liveActif ? (
        <div className="live-video">
          <iframe
            src={getEmbedUrl(liveActif.url)}
            title={liveActif.titre}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            width="100%"
            height="500px"
          ></iframe>
        </div>
      ) : (
        <p>Aucun live en cours pour le moment.</p>
      )}

      <h3>Prochains Lives</h3>
      {prochainsLives.length > 0 ? (
        <ul className="upcoming-lives">
          {prochainsLives.map((live) => (
            <li key={live.id}>
              <strong>{live.titre}</strong> – {live.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>Pas encore de live prévu</p>
      )}
    </div>
  );
};

export default Live;
