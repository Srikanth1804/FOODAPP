import React from "react";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "./HotelStyles/Hotelfile.css";
import Wine from "../../assets/wine.svg";
import parking from "../../assets/parking.svg";
import { Link } from "react-router-dom";

const HotelFiles = (props) => {
  let { Hotel } = props;

  return (
    <div className="container">
      <div className="row d-flex flex-wrap">
        {Hotel.map((hotel, index) => (
          <Link
            to={`/hoteldetail`}
            className="text-decoration-none"
            key={index}
            style={{ flex: "0 0 30%", margin: "10px", textAlign: "left" }} // Set textAlign to left
          >
            <div
              className="card mt-4"
              id="hotelfile-card"
              style={{ border: "none", height: "100%" }}
            >
              <div className="container" style={{ height: "100%" }}>
                <img
                  className="card-img-top img-fluid mt-3"
                  src={hotel.HotelImg || Dummyimg}
                  alt={`${hotel.HotelName} image`}
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h4>{hotel.HotelName}</h4>
                  <p style={{ fontSize: "small", flexGrow: 1 }}>
                    {hotel.HotelDescription}
                  </p>
                  <div>
                    <span
                      className={
                        hotel.HotelCategory.toLowerCase() === "veg"
                          ? "badge bg-success m-2"
                          : "badge bg-secondary m-2"
                      }
                    >
                      {hotel.HotelCategory}
                    </span>
                    {hotel.HotelBar && (
                      <img
                        src={Wine}
                        alt="Bar available"
                        style={{ marginLeft: "8px" }}
                      />
                    )}
                    {hotel.Hotel && (
                      <img
                        src={parking}
                        alt="parking available"
                        style={{ marginLeft: "8px" }}
                      />
                    )}
                    {hotel.HotelTableBooking && (
                      <img
                        src={parking}
                        alt="parking available"
                        style={{ marginLeft: "8px" }}
                      />
                    )}
                  </div>
                  <p style={{ fontSize: "small" }}>{hotel.HotelLocation}</p>
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
