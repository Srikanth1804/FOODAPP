import React, { useState } from "react";
import HotelSearch from "./HotelSearch";
import HotelFiles from "./HotelFiles";

const HotelList = () => {
  let [Hotel, setHotel] = useState([]);

  return (
    <div>
      <HotelSearch setHotel={setHotel} />
      <HotelFiles Hotel={Hotel} />
    </div>
  );
};

export default HotelList;
