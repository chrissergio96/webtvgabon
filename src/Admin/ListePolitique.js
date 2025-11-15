import React, { useEffect, useState } from "react";
import "../admin.css";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConf";
import AdminNavButtons from "./AdminNavButtons";

const ListePolitique = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }

    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "politique"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Supprimer cet article ?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "politique", id));
      fetchArticles();
      alert("Article supprimé avec succès !");
    } catch (error) {
      console.error("Erreur suppression :", error);
    }
  };

  return (
    <div className="admin-list-section">
          <AdminNavButtons /> {/* <-- boutons permanents */}
      <h2>Liste des articles Politique</h2>

      {articles.length === 0 ? (
        <p>Aucun article politique disponible.</p>
      ) : (
        <ul>
          {articles.map((a) => (
            <li key={a.id} className="admin-article-item">
              <div>
                <strong>{a.titre}</strong> — {a.date}
              </div>
              <div>
                <button
                  onClick={() => navigate(`/admin/politique/edit/${a.id}`)}
                  className="edit-btn"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="delete-btn"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListePolitique;
