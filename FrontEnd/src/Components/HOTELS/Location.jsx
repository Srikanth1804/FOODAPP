import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_EndPoint } from "../GeneralData";

const Location = ({ name }) => {
  const [Data, setData] = useState([]);
  console.log(Data);

  useEffect(() => {
    if (name) {
      axios
        .get(`${API_EndPoint}/hotel/location`, { params: { name } })
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [name]); // Adding name as a dependency

  return (
    <div>
      {Data.length > 0 ? (
        Data.map((hotel, index) => (
          <div key={index}>
            <iframe
              src={hotel.HotelLocationURL}
              width="800"
              height="600"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ))
      ) : (
        <p>No data found or loading...</p>
      )}
    </div>
  );
};

export default Location;
