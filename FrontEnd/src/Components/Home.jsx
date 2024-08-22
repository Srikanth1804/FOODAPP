import React from "react";
import NavBar from "./NavBar/NavBar";
import HotelList from "./HOTELS/HotelList";
import Footer from "./Footer/Footer";

const Home = ({ Cl }) => {
  return (
    <div>
      <NavBar Cl={Cl} />
      <HotelList />
      <Footer />
    </div>
  );
};

export default Home;
