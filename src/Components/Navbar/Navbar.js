import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            AliExpress
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
              <Button variant="primary">
              <Link>
              
              </Link>
              Logout
              </Button>
              <Link to="/login" className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faUser} />
                Login
              </Link>
              <Link to="/Register" className="btn btn-outline-dark ms-2">
                <FontAwesomeIcon icon={faUser} />
                Register
              </Link>
              <Link to="/cart">
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                  <span>Cart({cart.length})</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
