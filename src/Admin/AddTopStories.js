import React, { useState, useEffect } from 'react';
import '../admin.css';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConf';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AdminNavButtons from './AdminNavButtons';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const AddTopStories = () => {
  const navigate = useNavigate();

  const [story, setStory] = useState({
    titre: '',
    category: '',
    categoryColor: '',
    image: '',
    description: '',
    date: '',
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      setStory(prev => ({
        ...prev,
        description: editor.getHTML(),
      }));
    },
  });

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "topStories"), {
        ...story,
        createdAt: serverTimestamp(),
      });

      alert('Top Story ajoutée avec succès !');

      setStory({
        titre: '',
        category: '',
        categoryColor: '',
        image: '',
        description: '',
        date: '',
      });

      editor.commands.setContent('');

    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <div className="admin-login-container">
      <AdminNavButtons />

      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Ajouter une Top Actu</h2>

        <input
          type="text"
          name="titre"
          placeholder="Titre"
          value={story.titre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Catégorie"
          value={story.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="categoryColor"
          placeholder="Couleur catégorie (ex: red, #ff0000)"
          value={story.categoryColor}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="URL de l’image"
          value={story.image}
          onChange={handleChange}
          required
        />

        <h3>Description</h3>

        <div className="toolbar">
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
            Gras
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italique
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            Titre
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
            Liste
          </button>
        </div>

        <div className="editor-container">
          <EditorContent editor={editor} />
            <textarea
          name="description"
          placeholder="Description"
          rows="4"
          value={story.description}
          onChange={handleChange}
          required
        />
        </div>

        <input
          type="date"
          name="date"
          value={story.date}
          onChange={handleChange}
          required
        />

        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default AddTopStories;
