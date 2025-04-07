// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>My Courses</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </header>
  );
}

export default Header;
