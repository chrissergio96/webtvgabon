import React from 'react';

import Podcast from '../Components/Podcast/Podcast.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';


function Podcasts() {

    return (
      <div>
        <Navbar />
       <Podcast/>
       <BackButton/>
      </div>
      
    );
  }
  
  export default Podcasts;
  