import React from "react";
import NavBar from "./NavBar/NavBar";
import HotelList from "./HOTELS/HotelList";
import Footer from "./Footer/Footer";
import Carousel from "./HOTELS/Carousel";

const Home = ({ Cl }) => {
  return (
    <div>
      <NavBar Cl={Cl} />
      <HotelList />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
