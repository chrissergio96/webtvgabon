// src/admin/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css';
import { auth } from '../firebaseConf';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  const handleLogout = async () => {
    await signOut(auth);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    navigate('/admin/login');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', user.email);
      } else {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userEmail');
        navigate('/admin/login');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1>Tableau de bord Administrateur</h1>
      {userEmail && (
        <p>
          Connecté en tant que : <strong>{userEmail}</strong>
        </p>
      )}
     <div className="dashboard-buttons">
  <button onClick={() => navigate('/admin/add-article')}>➕ Ajouter un article(page article)</button>
  <button onClick={() => navigate('/admin/add-topstory')}>➕ Ajouter une Top Story(page d'accueil)</button>
  <button onClick={() => navigate('/admin/add-allvideo')}>➕ Ajouter une Vidéo ( page video)</button>
   <button onClick={() => navigate('/admin/add-video')}>➕ Ajouter une Vidéo(page d'accueil)</button>
  <button onClick={() => navigate('/admin/add-focus')}>➕ Ajouter un article recent(page d'accueil)</button>
  <button onClick={() => navigate('/admin/add-carousel')}>➕ Ajouter un slide Carousel Info</button>
  <button onClick={() => navigate('/admin/add-pub')}>➕ Ajouter une publicité</button>
  <button onClick={() => navigate('/admin/add-podcast')}>➕ Ajouter un Podcast</button>
  <button onClick={() => navigate('/admin/liste-podcasts')}>📝 Gerer les Podcasts</button>

<button onClick={() => navigate('/admin/add-caroussele')}>➕ Ajouter une annonce</button>
<button onClick={() => navigate('/admin/liste-caroussele')}>📝 Gérer les annonces</button>

  <button onClick={() => navigate('/admin/liste-topstories')}>📝 Gérer les Top Stories</button>
  <button onClick={() => navigate('/admin/liste-focus')}>📝 Gérer les artiles recents</button>

  <button onClick={() => navigate('/admin/liste-videos')}>📝 Gérer les Vidéos</button>

  <button onClick={() => navigate('/admin/liste-allvideos')}>📝 Gérer les Vidéos (Toutes les videos de la page video)</button>
  <button onClick={() => navigate('/admin/liste-publicite')}>📝 Gérer les Publicités</button>

  <button onClick={() => navigate('/admin/liste-articles')}>📝 Gérer les articles(Tous les articles de la page article)</button>
  <button onClick={handleLogout} className="danger">🚪 Se déconnecter</button>
</div>

    </div>
  );
};

export default Dashboard;
