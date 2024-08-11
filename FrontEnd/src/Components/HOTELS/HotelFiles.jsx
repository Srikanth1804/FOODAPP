import React from "react";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "./HotelStyles/Hotelfile.css";
const HotelFiles = (props) => {
  // let {HotelName,HotelImgO,HotelLocation,HotelDesc,HotelCategory} = props
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div id="hotelfile-card">
            <div className="card mt-4" style={{ border: "none" }}>
              <div className="container">
                <img
                  className="card-img-top img-fluid mt-3"
                  src={Dummyimg}
                  alt="Card image"
                  style={{ borderRadius: "8px" }}
                />
                <div className="card-body">
                  <h4>A2B</h4>
                  <p>American, Continental, Italian...</p>
                  <p>
                    <b>Category:</b>Veg
                  </p>
                  <p>Nungambakkam, Chennai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelFiles;
