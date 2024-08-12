import React from "react";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "./HotelStyles/Hotelfile.css";
import { Link } from "react-router-dom";

const HotelFiles = (props) => {
  let { Hotel } = props; // Hotel is expected to be an array

  return (
    <div className="container">
      <div className="row">
        {Hotel.map((hotel, index) => (
          <Link className="text-decoration-none">
            <div className="col-sm-4" key={index}>
              <div id="hotelfile-card">
                <div className="card mt-4" style={{ border: "none" }}>
                  <div className="container">
                    <img
                      className="card-img-top img-fluid mt-3"
                      src={hotel.HotelImg || Dummyimg} // Use Dummyimg if HotelImg is not provided
                      alt="Card image"
                      style={{ borderRadius: "8px" }}
                    />
                    <div className="card-body">
                      <h4>{hotel.HotelName}</h4>
                      <p>{hotel.HotelDescription}</p>
                      <p>
                        <b>Category:</b> {hotel.HotelCategory}
                      </p>
                      <p>{hotel.HotelLocation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotelFiles;
