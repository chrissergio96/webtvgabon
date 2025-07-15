import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './Pages/Articles.js';
import Podcasts from './Pages/Podcasts.js';
import DetailsArticles from './Pages/DetailsArticles.js';
import Accueil from './Pages/Accueil.js';
import Videos from './Pages/Videos.js';
import Directe from './Pages/Directe.js';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.js';
import { SearchProvider } from './Components/SearchContent/SearchContent.js';
import AllNav from './Components/AllNav/AllNav.js';
import Footer from './Components/Footer/Footer.js';
import Santé from './Pages/Santé.js';
import Économie from './Pages/Économie.js';
import PopUp from './Components/PopUp/PopUp.js';
import Login from './login.js';
import Dashboard from './Admin/Dashboard.js';
import AddArticle from './Admin/AddArticle.js';
import EditArticle from './Admin/EditArticle.js';
import ListeArticles from './Admin/ListeArticles.js';
import AddTopStories from './Admin/AddTopStories.js';
import ListeTopStories from './Admin/ListeTopStories.js';
import EditTopStory from './Admin/EditTopStory.js';
import TopStoryDetail from './Components/TopStoryDetail/TopStoryDetail.js';
import AddFocusArticle from './Admin/AddFocusArticle.js';
import ListeFocus from './Admin/ListeFocus.js';
import AddVideo from './Admin/AddVideo.js';
import ListeVideos from './Admin/ListeVideos.js';
import EditVideo from './Admin/EditVideo.js';
import EditFocusArticle from './Admin/EditFocusArticle.js';
import AddAllVideo from './Admin/AddAllVideo.js';
import EditAllVideo from './Admin/EditAllVideo.js';
import ListeAllVideo from './Admin/ListeAllVideo.js';
import AddCarouselItem from './Admin/AddCarouselItem.js';
import AddPublicite from './Admin/AddPublicite.js';
import ListePublicite from './Admin/ListePublicite.js';
import AddCarousseleAnnonce from './Admin/AddCarousseleAnnonce.js';
import ListeCarousseleAnnonce from './Admin/ListeCarousseleAnnonce.js';
import AddPodcast from './Admin/AddPodcast.js';
import ListePodcasts from './Admin/ListePodcasts.js';
import SanteDetail from './Components/SanteDetail/SanteDetail.js';
import AddSanteArticle from './Admin/AddSanteArticle.js';
import EditSanteArticle from './Admin/EditSanteArticle.js';
import ListeArticleSante from './Admin/ListeArticleSante.js';
import PrivateRoute from './PrivateRoute.js';
import AddBreakingNews from './Admin/AddBreakingNews.js';

function App() {
  return (
    <SearchProvider>
    <Router>
      <ScrollToTop />
      <AllNav/>
      <PopUp />
      <Routes>
      <Route path="/admin/liste-articles" element={<ListeArticles />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/add-article" element={<AddArticle />} />
      <Route path="/admin/edit-article/:id" element={<EditArticle />} />
      <Route path="/admin/add-topstory" element={<AddTopStories />} />
      <Route path="/admin/liste-topstories" element={<ListeTopStories />} />
      <Route path="/admin/edit-topstory/:id" element={<EditTopStory />} />
      <Route path="/topstory/:id" element={<TopStoryDetail />} />
      <Route path="/admin/add-focus" element={<AddFocusArticle />} />
      <Route path="/admin/liste-focus" element={<ListeFocus />} />
      <Route path="/admin/add-video" element={<AddVideo />} />
      <Route path="/admin/liste-videos" element={<ListeVideos />} />
      <Route path="/admin/modifier-video/:id" element={<EditVideo />} />
      <Route path="/admin/modifier-focus/:id" element={<EditFocusArticle />} />
      <Route path="/admin/add-allvideo" element={<AddAllVideo />} />
      <Route path="/admin/modifier-allvideo/:id" element={<EditAllVideo />} />
      <Route path="/admin/liste-allvideos" element={<ListeAllVideo />} />
      <Route path="/admin/add-carousel" element={<AddCarouselItem />} />
      <Route path="/admin/add-pub" element={<AddPublicite />} />
      <Route path="/admin/liste-publicite" element={<ListePublicite />} />
      <Route path="/admin/add-caroussele" element={<AddCarousseleAnnonce />} />
      <Route path="/admin/liste-caroussele" element={<ListeCarousseleAnnonce />} />
      <Route path="/admin/add-podcast" element={<AddPodcast />} />
      <Route path="/admin/liste-podcasts" element={<ListePodcasts />} />
      <Route path="/admin/add-sante-article" element={<AddSanteArticle />} />
      <Route path="/admin/liste-sante" element={<ListeArticleSante />} />


      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
  path="/admin/add-breakingnews"
  element={
    <PrivateRoute>
      <AddBreakingNews />
    </PrivateRoute>
  }
/>
<Route
  path="/admin/liste-breakingnews"
  element={
    <PrivateRoute>
      <AddBreakingNews /> {/* tu peux réutiliser le même composant */}
    </PrivateRoute>
  }
/>

      <Route path="/" element={<Accueil />} />
      <Route path="/santé" element={<Santé />} />
      <Route path="/sante/:id" element={<SanteDetail />} />
      <Route path="/économie" element={< Économie/>} />
      <Route path="/articles" element={<Articles />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/article/:id" element={<DetailsArticles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/live" element={<Directe />} />
        <Route path="/admin/modifier-article/:id" element={<EditArticle />} />
        <Route path="/admin/sante/edit/:id" element={<EditSanteArticle />} />


      </Routes>
      <Footer/>
    </Router>
    </SearchProvider>
  );
}

export default App;
