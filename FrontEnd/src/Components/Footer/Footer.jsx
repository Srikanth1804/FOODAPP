import React from "react";
import "../Footer/Footerstyles/Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/Elogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      id="footer-container"
      className="mt-5"
      style={{ fontVariant: "small-caps" }}
    >
      <div className="container">
        <img src={logo} alt="" style={{ width: "120px" }} />
        {/* <h2 style={{ fontWeight: "800", fontSize: "2.5rem" }}>Foodhub</h2> */}
        <div className="row">
          <div className="col">
            <h4 style={{ fontWeight: "700" }}>Customer Service</h4>
            <div>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>

              <a href="" className="nav-link">
                FAQs
              </a>
              <a href="" className="nav-link">
                Order Tracking
              </a>
              <a href="" className="nav-link">
                Refund Policy
              </a>
            </div>
          </div>

          <div className="col">
            <h4 style={{ fontWeight: "700" }}>Legal</h4>
            <div>
              <a href="" className="nav-link">
                Terms of Service
              </a>
              <a href="" className="nav-link">
                Privacy Policy
              </a>
              <a href="" className="nav-link">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="col">
            <h4 style={{ fontWeight: "700" }}>Contact With Us</h4>
            <div>
              <a href="" className="nav-link">
                <img src={facebook} style={{ width: "20px" }} alt="" />{" "}
                <span className="ms-1">Facebook</span>
              </a>
              <a href="" className="nav-link">
                <img src={instagram} style={{ width: "20px" }} />{" "}
                <span className="ms-1">Instagram</span>
              </a>
              <a href="" className="nav-link">
                <img src={twitter} style={{ width: "20px" }} />{" "}
                <span className="ms-1">Twitter</span>
              </a>
              <a href="" className="nav-link">
                <img src={linkedin} style={{ width: "20px" }} />{" "}
                <span className="ms-1">Linked In</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <p style={{ textAlign: "center", fontWeight: "500" }}>
              © 2024 [Foodhub]. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
