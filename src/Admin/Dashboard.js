// src/Dashboard.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../admin.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    navigate('/admin/login');
  };
  useEffect(() => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    navigate('/admin/login');
  }
}, []);

  return (
    <div className="dashboard-container">
      <h1>Tableau de bord Administrateur</h1>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/admin/add-article')}>➕ Ajouter un article</button>
        <button onClick={() => navigate('/admin/liste-articles')}>📝 Gérer les articles</button>
        <button onClick={handleLogout} className="danger">🚪 Se déconnecter</button>
      </div>
    </div>
  );
};

export default Dashboard;
