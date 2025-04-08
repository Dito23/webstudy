// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

function App() {
  // Check localStorage for authentication state on page load
  const storedAuthState = localStorage.getItem('isAuthenticated');
  const initialAuthState = storedAuthState ? JSON.parse(storedAuthState) : false;

  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
  const [loggingOut, setLoggingOut] = useState(false); // State to show "Logging out..." message

  const handleSignIn = () => {
    setIsAuthenticated(true); // Simulate successful login
    localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Store auth state in localStorage
  };

  const handleLogout = () => {
    setLoggingOut(true); // Show the "Logging out..." message
    setTimeout(() => {
      setIsAuthenticated(false); // Log the user out after 1 second
      localStorage.removeItem('isAuthenticated'); // Remove auth state from localStorage
      setLoggingOut(false); // Hide the "Logging out..." message
    }, 1000); // 1-second delay
  };

  useEffect(() => {
    // Listen for changes in authentication status and update localStorage
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <GoogleOAuthProvider clientId="492541872630-m4p6i45b3me650i6gf75dp82keing3vl.apps.googleusercontent.com">
      <Router>
        <div className="App">
          {isAuthenticated && (
            <Header onLogout={handleLogout} />
          )}

          <Routes>
            <Route
              path="/"
              element={!isAuthenticated ? <SignIn onSignIn={handleSignIn} /> : <Navigate to="/home" />}
            />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
            <Route path="/courses" element={isAuthenticated ? <Courses /> : <Navigate to="/" />} />
            <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" />} />
          </Routes>

          {/* Display the "Logging out..." message if loggingOut state is true */}
          {loggingOut && <div className="logging-out-message">Logging out..</div>}

          {isAuthenticated && <Footer />}
          {isAuthenticated && <ScrollToTopButton />}
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
