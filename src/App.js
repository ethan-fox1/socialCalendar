import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useRoutes, redirect } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
import AddEventForm from './AddEventForm';
import MiddleContainer from './MiddleContainer';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import { auth } from './firebase/firebase';
import { db } from './firebase/firebase';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from './firebase/auth';
import './fonts.css';

function App() {
  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }
  , []);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleSignUp = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  return (
    <Router>
      <div className="App">
        <header className="Header">
          <h1 className='h3'>PlanMate</h1>
          <nav>
            <ul className='h4'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        </header>
        <main className="MainContent">
          <Routes>
            { // if user is logged in, display the user's email or else navigate to the login page
            }
            <Route path="/" element={user ? <HomePage /> : <LoginPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/create" element={<MiddleContainer />}/>
            <Route path="/events" element={<CalendarContainer events={events} />}/>
          </Routes>
        </main>
        <footer className="Footer">
          <p>&copy; 2024 PlanMate</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
