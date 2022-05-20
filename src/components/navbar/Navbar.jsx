import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">SMIT</span>
      <div className={`nav-items ${isOpen && "open"}`}>
          <Link to='/login' > Login </Link>
          <Link to='/signup' > Signup </Link>
        {/* <a href="/login">Login</a>
        <a href="/signup">Signup</a> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;