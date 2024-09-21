import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import Logo from "../assets/images/logo.png";
import { cart } from "../Data.jsx";

const Navbar = () => {
  const navbarRef = useRef();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>

          <div className="account-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Account &#9662;
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;