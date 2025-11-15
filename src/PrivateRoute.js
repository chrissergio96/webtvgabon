// src/PrivateRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Ici tu peux ajouter une vérification supplémentaire si tu veux distinguer admin / utilisateur normal
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // Affiche un loader pendant la vérification
    return <p>Chargement…</p>;
  }

  if (!user) {
    // Si pas connecté, redirige vers login
    return <Navigate to="/admin/login" replace />;
  }

  // Si connecté, autorise l’accès
  return children;
};

export default PrivateRoute;
