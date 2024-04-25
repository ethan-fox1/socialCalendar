import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase/firebase';

// get user name if user is logged in
function HomePage() {
    const user = auth.currentUser;
    
  return (
    <section id="home">
      <h2 className='h2'>Welcome to PlanMate</h2>
        {user && <p>Hello, {user.email}</p>}
      <Link to="/login">Login</Link> {/* Link to the login page */}
    </section>
  );
}

export default HomePage;