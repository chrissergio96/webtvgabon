import React, { useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConf';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
   const handleForgotPassword = () => {
    alert("Fonction mot de passe oublié à implémenter !");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const allowedEmails = [
        'rmct2020@gmail.com',
        'safou.christiansergio@gmail.com'
      ];

      if (!allowedEmails.includes(user.email)) {
        setError("Vous n'êtes pas autorisé à accéder à l'administration.");
        return;
      }

      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userEmail', user.email); // stocker l'email
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Erreur de connexion :', error.message);
      setError('Identifiants incorrects');
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Veuillez entrer votre adresse email pour réinitialiser le mot de passe.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Un lien de réinitialisation a été envoyé à votre adresse email.");
    } catch (error) {
      console.error('Erreur lors de la réinitialisation :', error.message);
      setError("Impossible d'envoyer l'email. Vérifiez l'adresse.");
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Connexion Admin</h2>
        {error && <p className="error-msg">{error}</p>}
        {message && <p className="success-msg">{message}</p>}
        <input
          type="email"
          placeholder="Adresse mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
    <a href="#" className="forgot-password" onClick={(e) => {
    e.preventDefault();
    handlePasswordReset();
    }}>
    Mot de passe oublié ?
   </a>

      </form>
    </div>
  );
};

export default Login;
