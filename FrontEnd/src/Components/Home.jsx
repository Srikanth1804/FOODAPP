import React from "react";
import NavBar from "./NavBar/NavBar";
import HotelList from "./HOTELS/HotelList";
import Footer from "./Footer/Footer";

const Home = ({ Cl }) => {
  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "10" }}>
        <NavBar Cl={Cl} />
      </div>
      <HotelList />

      <Footer />
    </div>
  );
};

export default Home;
