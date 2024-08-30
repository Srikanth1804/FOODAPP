import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import "./NavbarStyles/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";

const NavBar = () => {
  let [Cl, setCl] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getcart`)
      .then((res) => {
        setCl(res.data.info);
      })
      .catch((e) => {
        console.log("Failed To Add Card!");
      });
  }, [Cl]);

  return (
    <div>
      <div id="NavDesktop">
        <NavbarDesktop Cl={Cl} />
      </div>
      <div id="NavMobile">
        <NavbarMobile Cl={Cl} />
      </div>
    </div>
  );
};

export default NavBar;
