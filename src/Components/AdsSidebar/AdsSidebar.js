import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConf';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const AdsSidebar = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const q = query(collection(db, 'publicite'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      setAds(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchAds();
  }, []);

  if (ads.length === 0) return null;

  return (
   
  <aside className="sidebar-ads">
    <div className="ads-list">
      {ads.map((ad, idx) => (
        <a key={idx} href={ad.link} target="_blank" rel="noopener noreferrer">
          <img
            decoding="async"
            src={ad.imageUrl}
            alt={ad.altText || 'Publicité'}
            className="ad-img"
          />
        </a>
      ))}
    </div>
  </aside>
);

};

export default AdsSidebar;
