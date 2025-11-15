// src/admin/AdminNavButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-nav-buttons">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Retour
      </button>
      <button onClick={() => navigate('/admin/dashboard')} className="dashboard-btn">
        🏠 Tableau de bord
      </button>
    </div>
  );
};

export default AdminNavButtons;
