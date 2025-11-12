import React from 'react';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';
import Politique from '../Components/Politique/Politique.js';

function Politiques() {
  return (
    <div>
      <Navbar />
      <Politique />
      <BackButton />
    </div>
  );
}

export default Politiques;
