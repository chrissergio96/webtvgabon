import React from 'react';
import Video from '../Components/Videos/Video';
import Navbar from '../Components/Navbar/Navbar';
import BackButton from '../Components/BackButton/BackButton';



function Videos() {

    return (
      <div>
        <Navbar />
       <Video/>
       <BackButton/>

      </div> 
      
    );
  }
  
  export default Videos;
  