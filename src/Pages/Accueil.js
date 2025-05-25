import React from 'react';
import Home from '../Components/Accueil/Home.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BreakingNews from '../Components/BreakingNews/BreakingNews.js';



function Accueil() {

    return (
      <div>
       <Navbar />
       <BreakingNews/>
       <Home/>

      </div>
      
    );
  }
  
  export default Accueil;
  