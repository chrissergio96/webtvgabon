import React, { useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    sessionStorage.setItem('isLoggedIn', 'true');
navigate('/admin/dashboard');


    // ⚠️ Identifiants en dur pour le test (remplacer par Firebase ou base plus tard)
    const adminUser = {
      email: 'admin@gabonactu.com',
      password: '123456'
    };

    if (email === adminUser.email && password === adminUser.password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Connexion Admin</h2>
        {error && <p className="error-msg">{error}</p>}
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
      </form>
    </div>
  );
};

export default Login;
