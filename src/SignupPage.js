import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from './firebase/auth';
import { db } from './firebase/firebase';
import { ref, set } from 'firebase/database';
import './SignupPage.css'; // Assuming you have a CSS file for styling

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Add the user to the database
      const dbRef = ref(db, 'users/' + email.replace('.', ''));
      await set(dbRef, {
        email: email,
        role: 'user'
      });      
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="signup">
      <h2 className="h2">Sign Up</h2>
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
        <button onClick={handleSignUp} className="signup-button">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>
    </section>
  );
}

export default SignupPage;
