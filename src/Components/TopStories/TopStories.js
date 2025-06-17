import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConf';
import { useNavigate } from 'react-router-dom';
import './TopStories.css';

const TopStories = () => {
  const [stories, setStories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStories = async () => {
      const q = query(collection(db, 'topStories'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStories(data);
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => (prevIndex + 1) % (stories.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const visibleStories = [
    stories[startIndex % stories.length],
    stories[(startIndex + 1) % stories.length],
    stories[(startIndex + 2) % stories.length],
  ].filter(Boolean);

  return (
    <section className="top-stories">
      <h2 style={{ textTransform: 'uppercase' }}>Top Actu</h2>
      <div className="stories-grid">
        {visibleStories.map((story) => (
          <article
            key={story.id}
            className="story-card"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/topstory/${story.id}`)}
          >
            <img src={story.image} alt={story.category} />
            <h3 style={{ background: story.categoryColor, padding: '5px' }}>{story.category}</h3>
            <h1 style={{ background: 'none', padding: '5px' }}>{story.titre}</h1>
            <p>
              {story.description.length > 100
                ? story.description.slice(0, 100) + '...'
                : story.description
              }
            </p>
            <strong ><p style={{color:"gray", fontFamily:'italic'}}>{story.date}</p></strong>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TopStories;
