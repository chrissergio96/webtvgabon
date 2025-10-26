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
  <button onClick={() => navigate('/admin/add-topstory')}>➕ Ajouter une Top Actu(page d'accueil)</button>
    <button onClick={() => navigate('/admin/liste-topstories')} id='listes'>📝 Gérer les Top Actus(page accueil)</button>

   <button onClick={() => navigate('/admin/add-video')}>➕ Ajouter une Vidéo(page d'accueil)</button>
     <button onClick={() => navigate('/admin/liste-videos')} id='listes'>📝 Gérer les Vidéos</button>


  <button onClick={() => navigate('/admin/add-focus')}>➕ Ajouter un article recent(page d'accueil)</button>
    <button onClick={() => navigate('/admin/liste-focus')} id='listes'>📝 Gérer les artiles recents(page accueil)</button>


    <button onClick={() => navigate('/admin/add-carousel')}>➕ Ajouter une info internationnal ou autres (1er carousel)</button>

  <button onClick={() => navigate('/admin/add-caroussele')}>➕ Ajouter une annonce , fait divers , vente(2e carousel)</button>
  <button onClick={() => navigate('/admin/liste-caroussele')} id='listes'>📝 Gérer les annonces(page accueil)</button>

  <button onClick={() => navigate('/admin/add-live')}>➕ Ajouter un Live</button>
<button onClick={() => navigate('/admin/liste-live')} id='listes'>📝 Gérer les Lives</button>


    <button onClick={() => navigate('/admin/add-article')}>➕ Ajouter un article(page article)</button>
      <button onClick={() => navigate('/admin/liste-articles')} id='listes'>📝 Gérer les articles(Tous les articles de la page article)</button>

        <button onClick={() => navigate('/admin/add-sante-article')}>➕ Ajouter un article santé(page Santé)</button>
          <button onClick={() => navigate('/admin/liste-sante')} id='listes'>📝 Gérer les articles santé</button>


    <button onClick={() => navigate('/admin/add-allvideo')}>➕ Ajouter une Vidéo ( page video)</button>
      <button onClick={() => navigate('/admin/liste-allvideos')} id='listes'>📝 Gérer les Vidéos (Toutes les videos de la page video)</button>


    

  <button onClick={() => navigate('/admin/add-pub')}>➕ Ajouter une publicité</button>
    <button onClick={() => navigate('/admin/liste-publicite')} id='listes'>📝 Gérer les Publicités</button>

  <button onClick={() => navigate('/admin/add-podcast')}>➕ Ajouter un Podcast(pas dispo)</button>
  <button onClick={() => navigate('/admin/liste-podcasts')} id='listes'>📝 Gerer les Podcasts(pas dispo)</button>



<button onClick={() => navigate('/admin/add-breakingnews')}>➕ Ajouter une Breaking News</button>
<button onClick={() => navigate('/admin/liste-breakingnews')} id='listes'>📝 Gérer les Breaking News</button>


  <button onClick={handleLogout} className="danger">🚪 Se déconnecter</button>
</div>

    </div>
  );
};

export default Dashboard;
