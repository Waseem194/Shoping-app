import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import "./Navbar.css";
const Header = () => {
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
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
              <Link to="/login" className="btn btn-outline-dark">
              <i class="fa-solid fa-user-plus"></i>
                Login
              </Link>
              <Link to="/Register" className="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i>
                Register
              </Link>
              <a href="" className="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i>
                Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;