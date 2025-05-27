import React from 'react';

import Article from '../Components/Articles/Article.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';


function Articles() {

    return (
      <div>
       <Navbar />
       <Article/>
       <BackButton/>

      </div>
      
    );
  }
  
  export default Articles;
  