import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './firebase/auth';
import './LoginPage.css'; // Assuming you have a CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="login">
      <h2 className="h2">Login</h2>
      <div className="form-group">
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <button onClick={handleSignIn} className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <p className="signup-text">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </section>
  );
}

export default LoginPage;
