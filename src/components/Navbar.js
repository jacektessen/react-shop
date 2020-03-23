import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = e => {
    setOpenMenu(!openMenu);
  };

  return (
    <div id="nav">
      <div className="navbar container">
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
        <nav className={openMenu ? "displayNone" : null}>
          <Link to="/">Shop</Link>
          <Link className="link" to="/About">
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <nav className={openMenu ? "displayNone" : null}>
          <Link to="/LogIn">Log In</Link>
          <Link to="/CartView">Cart</Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
