import React from "react";
import logo from "/src/assets/Elogo.png";
import "./NavbarStyles/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const NavbarMobile = ({ Cl = [] }) => {
  return (
    <div id="navBg-mobile">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <img
              className="img-fluid"
              src={logo}
              alt=""
              style={{ width: "100px" }}
            />
          </a>
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">FoodyHub!</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div class="offcanvas-body">
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
              <Link className="nav-link font icon" href="#" to="/hotelinfo">
                <FontAwesomeIcon icon={faRightToBracket} />
                <b>Add Restaurant</b>
              </Link>
              <br />
              <Link className="nav-link font icon" href="#" to="/">
                <FontAwesomeIcon icon={faRightToBracket} />
                <b>Home</b>
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
