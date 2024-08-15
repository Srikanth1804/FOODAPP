import React from "react";
import "./HotelStyles/Hotelfile.css";
import Wine from "../../assets/wine.svg";
import parking from "../../assets/parking.svg";
import tablebar from "../../assets/tablebar.svg";
import { Link } from "react-router-dom";

const HotelFiles = (props) => {
  let { Hotel } = props;

  return (
    <div className="container">
      <div className="row">
        {Hotel.map((hotel, index) => (
          <div className="col-sm-4" key={index}>
            <Link
              to={`/hoteldetail/${hotel.HotelName}`}
              className="text-decoration-none"
            >
              <div
                className="card mt-4"
                id="hotelfile-card"
                style={{ border: "none" }}
              >
                <div className="container">
                  <img
                    className="card-img-top img-fluid mt-3"
                    src={hotel.HotelImg}
                    alt={`${hotel.HotelName} image`}
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
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
                      {hotel.HotelParking && (
                        <img
                          src={parking}
                          alt="parking available"
                          style={{ marginLeft: "8px" }}
                        />
                      )}
                      {hotel.HotelTableBooking && (
                        <img
                          src={tablebar}
                          alt="table-booking available"
                          style={{ marginLeft: "8px" }}
                        />
                      )}
                    </div>
                    <p style={{ fontSize: "small" }}>{hotel.HotelLocation}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelFiles;
