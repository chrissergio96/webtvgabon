import React, { useEffect, useState } from 'react';
import './BreakingNews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../../firebaseConf';
import { collection, getDocs } from 'firebase/firestore';

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 3000 });

    const fetchBreakingNews = async () => {
      const querySnapshot = await getDocs(collection(db, "breakingnews"));
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setBreakingNews(data);
    };

    fetchBreakingNews();
  }, []);

  return (
    <div className="home-containe">
      <section className="breaking-news" data-aos="fade-down">
        <div className="news-ticker">
          <span className="flash-icon"></span>
          <span className="ticker-label"><h4>FLASH INFO :</h4></span>
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {breakingNews.map((item, index) => (
                <span key={index} className="ticker-item">
                  <img src={item.image} alt="news" className="news-icon" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BreakingNews;
