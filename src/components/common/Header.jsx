import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import logo from "../imgs/logo.png";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="dropdown"
              title="SHOP"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/souvenirs">
                <p className="dropdown-item">Regalos</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/">
                <p className="dropdown-item">Productos</p>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={`logo ${scroll ? "scrolled" : ""}`} id="logo-container">
        <NavLink exact to="/">
          <img className="logoimg" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="icons">
        <NavLink to="/register">
          <i className="registro fas fa-user-plus"></i>
        </NavLink>
        <NavLink to="/cart">
          <i className="carrito fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

window.addEventListener("scroll", () => {
  const image = document.querySelector(".logoimg");
  if (window.scrollY > 0) {
    image.classList.add("scrolled");
  } else {
    image.classList.remove("scrolled");
  }
});
