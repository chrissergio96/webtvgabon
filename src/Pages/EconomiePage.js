import React from 'react';
import Navbar from '../Components/Navbar/Navbar.jsx';
import BackButton from '../Components/BackButton/BackButton.js';
import Economie from '../Components/Economie/Economie.js';

function EconomiePage() {
  return (
    <div>
      <Navbar />
      <Economie />
      <BackButton />
    </div>
  );
}

export default EconomiePage;
