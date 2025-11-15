import React from 'react';

import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';
import Contact from '../Components/Contact/Contact.js';


function PageContact() {

    return (
      <div>
       <Navbar />
       <Contact/>
       <BackButton/>

      </div>
      
    );
  }
  
  export default PageContact;
  