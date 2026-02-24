import React, { useEffect, useState } from 'react';
import '../admin.css';
import { auth } from '../firebaseConf';
import { signOut, onAuthStateChanged } from 'firebase/auth';

/* Imports composants admin */
import AddTopStories from './AddTopStories';
import ListeTopStories from './ListeTopStories';
import AddVideo from './AddVideo';
import ListeVideos from './ListeVideos';
import AddFocusArticle from './AddFocusArticle';
import ListeFocus from './ListeFocus';
import AddCarouselItem from './AddCarouselItem';
import AddCarousseleAnnonce from './AddCarousseleAnnonce';
import ListeCarousseleAnnonce from './ListeCarousseleAnnonce';
import AddLive from './AddLive';
import ListeLive from './ListeLive';
import AddArticle from './AddArticle';
import ListeArticles from './ListeArticles';
import AddSanteArticle from './AddSanteArticle';
import ListeArticleSante from './ListeArticleSante';
import AddAllVideo from './AddAllVideo';
import ListeAllVideo from './ListeAllVideo';
import AddPolitiqueArticle from './AddPolitiqueArticle';
import ListePolitique from './ListePolitique';
import AddEconomieArticle from './AddEconomieArticle';
import ListeEconomie from './ListeEconomie';
import AddPublicite from './AddPublicite';
import ListePublicite from './ListePublicite';
import AddPodcast from './AddPodcast';
import ListePodcasts from './ListePodcasts';
import AddBreakingNews from './AddBreakingNews';

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [activeView, setActiveView] = useState('home');

  const handleLogout = async () => {
    await signOut(auth);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userEmail');
    window.location.href = '/admin/login';
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
        window.location.href = '/admin/login';
      }
    });

    return () => unsubscribe();
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'add-topstory': return <AddTopStories />;
      case 'list-topstory': return <ListeTopStories />;
      case 'add-video': return <AddVideo />;
      case 'list-video': return <ListeVideos />;
      case 'add-focus': return <AddFocusArticle />;
      case 'list-focus': return <ListeFocus />;
      case 'add-carousel': return <AddCarouselItem />;
      case 'add-annonce': return <AddCarousseleAnnonce />;
      case 'list-annonce': return <ListeCarousseleAnnonce />;
      case 'add-live': return <AddLive />;
      case 'list-live': return <ListeLive />;
      case 'add-article': return <AddArticle />;
      case 'list-article': return <ListeArticles />;
      case 'add-sante': return <AddSanteArticle />;
      case 'list-sante': return <ListeArticleSante />;
      case 'add-allvideo': return <AddAllVideo />;
      case 'list-allvideo': return <ListeAllVideo />;
      case 'add-politique': return <AddPolitiqueArticle />;
      case 'list-politique': return <ListePolitique />;
      case 'add-economie': return <AddEconomieArticle />;
      case 'list-economie': return <ListeEconomie />;
      case 'add-pub': return <AddPublicite />;
      case 'list-pub': return <ListePublicite />;
      case 'add-podcast': return <AddPodcast />;
      case 'list-podcast': return <ListePodcasts />;
      case 'add-breaking': return <AddBreakingNews />;
      default:
        return (
          <div>
            <h1>Tableau de bord</h1>
            {userEmail && (
              <p>
                Connecté en tant que : <strong>{userEmail}</strong>
              </p>
            )}
            <p>Sélectionnez une action dans le menu à gauche.</p>
          </div>
        );
    }
  };

  const menuButton = (key, label) => (
    <button
      className={activeView === key ? 'active' : ''}
      onClick={() => setActiveView(key)}
    >
      {label}
    </button>
  );

  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">
        <h2>WEB TV GABON</h2>

        {menuButton('add-topstory', '📰 Ajouter Top Actu')}
        {menuButton('list-topstory', '📋 Gérer Top Actus')}

        {menuButton('add-video', '🎬 Ajouter Vidéo Accueil')}
        {menuButton('list-video', '📋 Gérer Vidéos')}

        {menuButton('add-focus', '🆕 Ajouter Article Récent')}
        {menuButton('list-focus', '📋 Gérer Articles Récents')}

        {menuButton('add-carousel', '🌍 Ajouter Carousel Info')}
        {menuButton('add-annonce', '📢 Ajouter Annonce')}
        {menuButton('list-annonce', '📋 Gérer Annonces')}

        {menuButton('add-live', '📡 Ajouter Live')}
        {menuButton('list-live', '📋 Gérer Lives')}

        {menuButton('add-article', '✍️ Ajouter Article')}
        {menuButton('list-article', '📋 Gérer Articles')}

        {menuButton('add-sante', '🏥 Ajouter Santé')}
        {menuButton('list-sante', '📋 Gérer Santé')}

        {menuButton('add-allvideo', '🎥 Ajouter Vidéo Page Vidéo')}
        {menuButton('list-allvideo', '📋 Gérer Toutes Vidéos')}

        {menuButton('add-politique', '🏛 Ajouter Politique')}
        {menuButton('list-politique', '📋 Gérer Politique')}

        {menuButton('add-economie', '💼 Ajouter Économie')}
        {menuButton('list-economie', '📋 Gérer Économie')}

        {menuButton('add-pub', '📢 Ajouter Publicité')}
        {menuButton('list-pub', '📋 Gérer Publicités')}

        {menuButton('add-podcast', '🎧 Ajouter Podcast')}
        {menuButton('list-podcast', '📋 Gérer Podcasts')}

        {menuButton('add-breaking', '🚨 Ajouter Breaking News')}

        <button onClick={handleLogout} className="danger">🚪 Déconnexion</button>
      </aside>

      {/* CONTENU DYNAMIQUE */}
      <main className="dashboard-main">
        {renderView()}
      </main>

    </div>
  );
};

export default Dashboard;
