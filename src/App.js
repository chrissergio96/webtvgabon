// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages publiques
import Accueil from './Pages/Accueil';
import Articles from './Pages/Articles';
import DetailsArticles from './Pages/DetailsArticles';
import Podcasts from './Pages/Podcasts';
import Videos from './Pages/Videos';
import Directe from './Pages/Directe';
import Santé from './Pages/Santé';
import Économie from './Pages/Économie';
import PolitiqueDetail from './Components/PolitiqueDetail/PolitiqueDetail';
import SanteDetail from './Components/SanteDetail/SanteDetail';
import EconomieDetail from './Components/EconomieDetail/EconomieDetail';
import TopStoryDetail from './Components/TopStoryDetail/TopStoryDetail';

// Composants globaux
import AllNav from './Components/AllNav/AllNav';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import PopUp from './Components/PopUp/PopUp';
import { SearchProvider } from './Components/SearchContent/SearchContent';

// Pages / composants admin
import Login from './login';
import Dashboard from './Admin/Dashboard';
import AddArticle from './Admin/AddArticle';
import EditArticle from './Admin/EditArticle';
import ListeArticles from './Admin/ListeArticles';
import AddTopStories from './Admin/AddTopStories';
import ListeTopStories from './Admin/ListeTopStories';
import EditTopStory from './Admin/EditTopStory';
import AddFocusArticle from './Admin/AddFocusArticle';
import ListeFocus from './Admin/ListeFocus';
import AddVideo from './Admin/AddVideo';
import ListeVideos from './Admin/ListeVideos';
import EditVideo from './Admin/EditVideo';
import EditFocusArticle from './Admin/EditFocusArticle';
import AddAllVideo from './Admin/AddAllVideo';
import EditAllVideo from './Admin/EditAllVideo';
import ListeAllVideo from './Admin/ListeAllVideo';
import AddCarouselItem from './Admin/AddCarouselItem';
import AddPublicite from './Admin/AddPublicite';
import ListePublicite from './Admin/ListePublicite';
import AddCarousseleAnnonce from './Admin/AddCarousseleAnnonce';
import ListeCarousseleAnnonce from './Admin/ListeCarousseleAnnonce';
import AddPodcast from './Admin/AddPodcast';
import ListePodcasts from './Admin/ListePodcasts';
import AddSanteArticle from './Admin/AddSanteArticle';
import EditSanteArticle from './Admin/EditSanteArticle';
import ListeArticleSante from './Admin/ListeArticleSante';
import AddBreakingNews from './Admin/AddBreakingNews';
import AddLive from './Admin/AddLive';
import ListeLive from './Admin/ListeLive';
import AddEconomieArticle from './Admin/AddEconomieArticle';
import ListeEconomie from './Admin/ListeEconomie';
import EditEconomieArticle from './Admin/EditEconomieArticle';
import AddPolitiqueArticle from './Admin/AddPolitiqueArticle';
import EditPolitiqueArticle from './Admin/EditPolitiqueArticle';
import ListePolitique from './Admin/ListePolitique';

// Route privée pour admin
import PrivateRoute from './PrivateRoute';
import PolitiquePage from './Pages/PolitiquePage.js';
import PageContact from './Pages/PageContact.js';

function App() {
  return (
    <SearchProvider>
      <Router>
        <ScrollToTop />
        <AllNav />
        <PopUp />

        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Accueil />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<DetailsArticles />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/live" element={<Directe />} />
          <Route path="/santé" element={<Santé />} />
          <Route path="/sante/:id" element={<SanteDetail />} />
          <Route path="/économie" element={<Économie />} />
          <Route path="/economie/:id" element={<EconomieDetail />} />
          <Route path="/politique" element={<PolitiquePage />} />
          <Route path="/politique/:id" element={<PolitiqueDetail />} />
          <Route path="/topstory/:id" element={<TopStoryDetail />} />
          <Route path="/contact" element={<PageContact />} />

          {/* Routes admin (protégées) */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />

          <Route path="/admin/liste-articles" element={
            <PrivateRoute><ListeArticles /></PrivateRoute>
          } />
          <Route path="/admin/add-article" element={
            <PrivateRoute><AddArticle /></PrivateRoute>
          } />
          <Route path="/admin/edit-article/:id" element={
            <PrivateRoute><EditArticle /></PrivateRoute>
          } />

          <Route path="/admin/add-topstory" element={
            <PrivateRoute><AddTopStories /></PrivateRoute>
          } />
          <Route path="/admin/liste-topstories" element={
            <PrivateRoute><ListeTopStories /></PrivateRoute>
          } />
          <Route path="/admin/edit-topstory/:id" element={
            <PrivateRoute><EditTopStory /></PrivateRoute>
          } />

          <Route path="/admin/add-focus" element={
            <PrivateRoute><AddFocusArticle /></PrivateRoute>
          } />
          <Route path="/admin/liste-focus" element={
            <PrivateRoute><ListeFocus /></PrivateRoute>
          } />
          <Route path="/admin/add-video" element={
            <PrivateRoute><AddVideo /></PrivateRoute>
          } />
          <Route path="/admin/liste-videos" element={
            <PrivateRoute><ListeVideos /></PrivateRoute>
          } />
          <Route path="/admin/modifier-video/:id" element={
            <PrivateRoute><EditVideo /></PrivateRoute>
          } />
          <Route path="/admin/modifier-focus/:id" element={
            <PrivateRoute><EditFocusArticle /></PrivateRoute>
          } />
          <Route path="/admin/add-allvideo" element={
            <PrivateRoute><AddAllVideo /></PrivateRoute>
          } />
          <Route path="/admin/modifier-allvideo/:id" element={
            <PrivateRoute><EditAllVideo /></PrivateRoute>
          } />
          <Route path="/admin/liste-allvideos" element={
            <PrivateRoute><ListeAllVideo /></PrivateRoute>
          } />

          <Route path="/admin/add-carousel" element={
            <PrivateRoute><AddCarouselItem /></PrivateRoute>
          } />
          <Route path="/admin/add-pub" element={
            <PrivateRoute><AddPublicite /></PrivateRoute>
          } />
          <Route path="/admin/liste-publicite" element={
            <PrivateRoute><ListePublicite /></PrivateRoute>
          } />
          <Route path="/admin/add-caroussele" element={
            <PrivateRoute><AddCarousseleAnnonce /></PrivateRoute>
          } />
          <Route path="/admin/liste-caroussele" element={
            <PrivateRoute><ListeCarousseleAnnonce /></PrivateRoute>
          } />

          <Route path="/admin/add-podcast" element={
            <PrivateRoute><AddPodcast /></PrivateRoute>
          } />
          <Route path="/admin/liste-podcasts" element={
            <PrivateRoute><ListePodcasts /></PrivateRoute>
          } />

          <Route path="/admin/add-sante-article" element={
            <PrivateRoute><AddSanteArticle /></PrivateRoute>
          } />
          <Route path="/admin/liste-sante" element={
            <PrivateRoute><ListeArticleSante /></PrivateRoute>
          } />
          <Route path="/admin/sante/edit/:id" element={
            <PrivateRoute><EditSanteArticle /></PrivateRoute>
          } />

          <Route path="/admin/add-breakingnews" element={
            <PrivateRoute><AddBreakingNews /></PrivateRoute>
          } />
          <Route path="/admin/add-live" element={
            <PrivateRoute><AddLive /></PrivateRoute>
          } />
          <Route path="/admin/liste-live" element={
            <PrivateRoute><ListeLive /></PrivateRoute>
          } />

          <Route path="/admin/add-economie-article" element={
            <PrivateRoute><AddEconomieArticle /></PrivateRoute>
          } />
          <Route path="/admin/liste-economie" element={
            <PrivateRoute><ListeEconomie /></PrivateRoute>
          } />
          <Route path="/admin/economie/edit/:id" element={
            <PrivateRoute><EditEconomieArticle /></PrivateRoute>
          } />

          <Route path="/admin/add-politique-article" element={
            <PrivateRoute><AddPolitiqueArticle /></PrivateRoute>
          } />
          <Route path="/admin/liste-politique" element={
            <PrivateRoute><ListePolitique /></PrivateRoute>
          } />
          <Route path="/admin/politique/edit/:id" element={
            <PrivateRoute><EditPolitiqueArticle /></PrivateRoute>
          } />
        </Routes>

        <Footer />
      </Router>
    </SearchProvider>
  );
}

export default App;
