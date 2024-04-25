import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './firebase/auth';

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
      <h2 className='h2'>Login</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Login</button>
        {error && <p>{error}</p>}
      </div>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to the signup page */}
    </section>
  );
}

export default LoginPage;