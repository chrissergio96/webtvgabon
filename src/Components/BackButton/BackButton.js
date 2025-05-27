import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      ⬅ Retour
    </button>
  );
};

export default BackButton;
