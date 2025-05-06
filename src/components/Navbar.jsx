import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Lootify</div>
      <div className="nav-links">
        <Link to="/home">Earn</Link> {/* Link to /home */}
        <Link to="/dashboard">Cashout</Link>
        <Link to="/rewards">Rewards</Link>
        <Link to="/profilepage">ProfilePage</Link>
      </div>
    </nav>
  );
};

export default Navbar;
