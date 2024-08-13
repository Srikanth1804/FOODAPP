import React from "react";
import imgG1 from "/src/assets/imagegallery-1.webp";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "../HOTELS/HotelStyles/Hoteldetails.css";
import Menucard from "./Menucard";
const HotelDetails = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-12" id="image-container">
          <img src={imgG1} alt="" className="img-fluid img-gallery" />
          <div id="opacity-div"></div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>The Great Kabab Factory - Radisson Blu</h3>
          <p>North Indian, Mughlai, Kebab, Desserts...</p>
          <p>
            <b>Category:</b>Veg & Non-veg
          </p>
          <p>Radisson Blu, Egmore, Chennai</p>
        </div>
      </div>

      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link " data-bs-toggle="tab" href="#review">
              Review
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#menu">
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
          <div className="tab-pane container fade" id="review">
            <h2>The Great Kabab Factory - Radisson Blu Reviews</h2>
            <div class="form-floating">
              <textarea
                class="form-control"
                id="comment"
                name="text"
                placeholder="Comment goes here"
              ></textarea>
              <label for="comment">Comments</label>
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
