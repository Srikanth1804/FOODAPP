import React from "react";
import imgG1 from "/src/assets/imagegallery-1.webp";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "../HOTELS/HotelStyles/Hoteldetails.css";
import Menucard from "./Menucard";
const HotelDetails = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12" id="image-container">
          <img src={imgG1} alt="" className="img-fluid img-gallery" />
          <div id="overlay">
            <h1>The Great Kabab Factory - Radisson Blu</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12" style={{ fontVariant: "small-caps" }}>
          <p>North Indian, Mughlai, Kebab, Desserts...</p>
          <p>
            <b>Category:</b>Veg & Non-veg
          </p>
          <p>Radisson Blu, Egmore, Chennai</p>
        </div>
      </div>

      <div style={{ fontVariant: "small-caps" }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link " data-bs-toggle="tab" href="#review">
              Review
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#book-table">
              Book Table
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane container fade mt-3" id="review">
            <h5 style={{ fontWeight: "700" }}>
              The Great Kabab Factory - Radisson Blu Reviews
            </h5>
            <div className="form-floating">
              <textarea
                className="form-control"
                id="comment"
                name="text"
                placeholder="Comment goes here"
                defaultValue={""}
              />
              <label htmlFor="comment">Comments</label>
            </div>
          </div>

          <div className="tab-pane container active" id="menu">
            <Menucard />
          </div>

          <div className="tab-pane container fade" id="book-table">
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
