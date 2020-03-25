import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" dark expand="sm">
      <div className="container">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/">Shop</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
          <Link to="/LogIn">Log In</Link>
          <br />
          <Link to="/CartView">Cart</Link>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
