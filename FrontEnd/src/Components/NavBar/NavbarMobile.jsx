import React from "react";
import logo from "/src/assets/Elogo.png";
import "./NavbarStyles/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
const NavbarMobile = () => {
  return (
    <div id="navBg-mobile">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <img className="img-fluid" src={logo} alt="" />
          </a>
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">FoodHub!</h1>
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
              </Link>
              <br />
              <Link className="nav-link font icon" to="/contact">
                <FontAwesomeIcon icon={faAddressBook} />
                <b> Contact</b>
              </Link>

              <br />
              <a className="nav-link font icon" href="#">
                <FontAwesomeIcon icon={faRightToBracket} />
                <b> SignUp</b>
              </a>
            </div>
          </div>
          <div>
            <h1 id="Brand_Mobile">
              <b>FOODHUB</b>
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
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
