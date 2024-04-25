import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from './firebase/auth';
import { db } from './firebase/firebase';
import { ref, set } from 'firebase/database';

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
      <h2 className='h2'>Sign Up</h2>
      <div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignUp}>Sign Up</button>
        {error && <p>{error}</p>}
      </div>
      <p>Already have an account? <Link to="/login">Login</Link></p> {/* Link to the login page */}
    </section>
  );
}

export default SignupPage;