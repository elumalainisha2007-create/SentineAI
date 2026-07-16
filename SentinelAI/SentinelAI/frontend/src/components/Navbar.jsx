import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling

function Navbar() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>SentinelAI</h1>
      </div>
      <div className="navbar-time">
        <p>{currentTime}</p>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/users">Users</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div className="navbar-profile">
        <p>Admin Profile</p>
      </div>
    </nav>
  );
}

export default Navbar;