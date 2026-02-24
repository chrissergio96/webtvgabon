import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConf";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./Podcast.css";
import AdsSidebar from "../AdsSidebar/AdsSidebar";

const Podcast = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    const fetchPods = async () => {
      const q = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setPods(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchPods();
  }, []);

  return (
  <div className="podcast-layout">

    <div className="podcast-main">
      <div className="podcast-page">
        <h2>Podcasts</h2>

        <div className="podcast-list">
          {pods.map(p => (
            <div className="podcast-card" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              {p.type === "youtube" && (
                <iframe
                  height="200"
                  src={p.mediaUrl.replace("watch?v=", "embed/")}
                  title={p.title}
                  frameBorder="0"
                  allowFullScreen
                />
              )}

              {p.type === "audio" && (
                <audio controls src={p.mediaUrl} className="pod-audio" />
              )}

              {p.type === "video" && (
                <video controls src={p.mediaUrl} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

    <AdsSidebar />

  </div>
);
};

export default Podcast;
