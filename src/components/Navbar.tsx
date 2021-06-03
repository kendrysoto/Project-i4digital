import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Navbar = (): ReactElement => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h1 className="navbar-brand">I4DIGITAL</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/User"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Album"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Publication"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
