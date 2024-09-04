import React from "react";
import logo from "/src/assets/Elogo.png";
import "./NavbarStyles/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faAddressBook,
  faHouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const NavbarMobile = ({ Cl = [] }) => {
  return (
    <div id="navBg-mobile">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <img
              className="img-fluid"
              src={logo}
              alt="Logo"
              style={{ width: "100px" }}
            />
          </a>
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">FoodyHub!</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Link className="nav-link font icon" to="/cart">
                <FontAwesomeIcon icon={faCartPlus} />
                <b> Cart</b>
                <span className="badge bg-danger">
                  {Cl.length > 0 ? Cl.length : ""}
                </span>
              </Link>
              <br />
              <Link className="nav-link font icon" to="/contact">
                <FontAwesomeIcon icon={faAddressBook} />
                <b> Contact</b>
              </Link>
              <br />
              <Link className="nav-link font icon" to="/hotelinfo">
                <FontAwesomeIcon icon={faPlus} />
                <b> Add Restaurant</b>
              </Link>
              <br />
              <Link className="nav-link font icon" to="/">
                <FontAwesomeIcon icon={faHouse} />
                <b> Home</b>
              </Link>
            </div>
          </div>
          <div>
            <h1 id="Brand_Mobile">
              <b>FOODYHUB</b>
            </h1>
          </div>
          <button
            className="btn"
            id="toggle-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span className="navbar-toggler-icon" />
            <span className="badge bg-danger">
              {Cl.length > 0 ? Cl.length : ""}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
