import React, { useState } from "react";
import HotelSearch from "./HotelSearch";
import HotelFiles from "./HotelFiles";
import Carousels from "./Carousel";
import HotelDetails from "./HotelDetails";

const HotelList = () => {
  let [Hotel, setHotel] = useState([]);

  return (
    <div>
      <HotelSearch setHotel={setHotel} />
      {Hotel.length > 0 ? <HotelFiles Hotel={Hotel} /> : <Carousels />}
    </div>
  );
};

export default HotelList;
