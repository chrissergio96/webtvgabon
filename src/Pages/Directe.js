import React from 'react';

import Live from '../Components/Live/Live.js';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';


function Directe() {

    return (
      <div>
        <Navbar />
       <Live/>
       <BackButton/>

      </div>
      
    );
  }
  
  export default Directe;
  