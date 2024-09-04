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
          <a className="navbar-brand">
            <img src={logo} alt="" style={{ width: "80px" }} />
          </a>
          <h2
            id="mobile-header"
            style={{
              fontVariant: "all-small-caps",
              fontWeight: "900",
              color: "white",
            }}
          >
            FOODYHUB
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            style={{ backgroundColor: "white", color: "white" }}
          >
            <span className="navbar-toggler-icon" />
            <span className="badge bg-danger">
              {Cl.length > 0 ? Cl.length : ""}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav" style={{ marginLeft: "10px" }}>
              <li className="nav-item">
                <Link to="/cart" className="nav-link txt-color">
                  <FontAwesomeIcon icon={faCartPlus} />
                  <b>
                    Cart
                    <span className="badge bg-danger">
                      {Cl.length > 0 ? Cl.length : ""}
                    </span>
                  </b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link txt-color" to="/contact">
                  <FontAwesomeIcon icon={faAddressBook} />
                  <b> Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link txt-color" href="#">
                  <FontAwesomeIcon icon={faHouse} />
                  <b> Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotelinfo" className="nav-link txt-color" href="#">
                  <FontAwesomeIcon icon={faPlus} />
                  <b> Add Restaurant</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
