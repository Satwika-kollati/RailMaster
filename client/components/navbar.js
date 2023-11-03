import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">RailMaster</Link> 
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/shift-schedule">Shift Schedule</Link></li>
        <li><Link to="/train-schedules">Train Schedules</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
