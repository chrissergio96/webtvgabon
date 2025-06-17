import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import BackButton from '../Components/BackButton/BackButton';
import DetailsArticle from '../Components/ArticlePage/DetailsArticle';



function DetailsArticles() {

    return (
      <div>
        <Navbar />
       <DetailsArticle/>
       <BackButton/>

      </div>
      
    );
  }
  
  export default DetailsArticles;
  