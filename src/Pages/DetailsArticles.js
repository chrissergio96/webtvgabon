import React from 'react';
import ArticlePage from '../Components/ArticlePage/ArticlePage';
import Navbar from '../Components/Navbar/Navbar';
import BackButton from '../Components/BackButton/BackButton';



function DetailsArticles() {

    return (
      <div>
        <Navbar />
       <ArticlePage/>
       <BackButton/>

      </div>
      
    );
  }
  
  export default DetailsArticles;
  