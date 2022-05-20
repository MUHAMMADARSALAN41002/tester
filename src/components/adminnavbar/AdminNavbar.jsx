import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Adminnavbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">SMIT</span>
      <div className={`nav-items ${isOpen && "open"}`}>
          <Link to='/homeadmin' > Admin </Link>
          <Link to='/usersadmin' > Users </Link>
          <Link to='/showcourses' > Courses </Link>
          <Link to='/changepassword' > Change Password </Link>
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