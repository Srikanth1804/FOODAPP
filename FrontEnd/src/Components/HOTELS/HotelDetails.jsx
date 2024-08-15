import React, { useEffect, useState } from "react";
import imgG1 from "/src/assets/imagegallery-1.webp";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "../HOTELS/HotelStyles/Hoteldetails.css";
import Menucard from "./Menucard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
const HotelDetails = () => {
  let { name } = useParams();

  let [SingleHotel, setSingleHotel] = useState([]);
  console.log(SingleHotel);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getfood`, { params: { name } })
      .then((res) => {
        setSingleHotel(res.data.info);
      })
      .catch((e) => {
        console.log("Error To Get DAta");
      });
  }, [name]);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-12" id="image-container">
          <img src={imgG1} alt="" className="img-fluid img-gallery" />
          <div id="overlay">
            <h1>{SingleHotel[0].HotelName}</h1>
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
            {SingleHotel.map((SH) => {
              return (
                <Menucard
                  FoodImg={SH.FoodImg}
                  FoodCategory={SH.FoodCategory}
                  FoodDesc={SH.FoodDesc}
                  FoodName={SH.FoodName}
                  FoodPrice={SH.FoodPrice}
                  FoodRating={SH.FoodRating}
                  FoodAvailable={SH.FoodAvailable}
                />
              );
            })}
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
