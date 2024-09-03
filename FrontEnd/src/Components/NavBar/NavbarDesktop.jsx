import React from "react";
import logo from "/src/assets/Elogo.png";
import "./NavbarStyles/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faAddressBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const NavbarDesktop = ({ Cl = [] }) => {
  // Default to an empty array
  return (
    <div id="navBg-desk">
      <nav className="navbar navbar-expand-sm font">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              id="logo"
              src={logo}
              alt=""
              style={{ height: "120px" }}
            />
          </a>
          <h3 id="Brand_Desktop" className="header-font">
            FOODYHUB
          </h3>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cart" className="nav-link txt-color">
                  <FontAwesomeIcon icon={faCartPlus} />{" "}
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

export default NavbarDesktop;
