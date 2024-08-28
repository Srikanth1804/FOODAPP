import React, { useEffect, useState } from "react";
import imgG1 from "/src/assets/imagegallery-1.webp";
import "../HOTELS/HotelStyles/Hoteldetails.css";
import Menucard from "./Menucard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
import Review from "./Review";
import ShowReview from "./Show";
import TableSelection from "../Table/Table";

const HotelDetails = () => {
  let { name } = useParams();
  let [SingleHotel, setSingleHotel] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getfood`, { params: { name } })
      .then((res) => {
        setSingleHotel(res.data.info);
      })
      .catch((e) => {
        console.log("Error To Get Data");
      });
  }, [name]);

  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-12" id="image-container">
            <img
              src={imgG1}
              alt=""
              className="img-fluid img-gallery"
              style={{ borderRadius: "10px" }}
            />

            <div id="overlay">
              <h1 style={{ fontSize: "2.5rem", margin: 0 }}>{name}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12" style={{ fontVariant: "small-caps" }}>
            <p>North Indian, Mughlai, Kebab, Desserts...</p>
            <p>
              <b>Category:</b> Veg & Non-veg
            </p>
            <p>Radisson Blu, Egmore, Chennai</p>
          </div>
        </div>

        <div style={{ fontVariant: "small-caps" }}>
          <ul className="nav nav-tabs " id="nav-tabs">
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#review">
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
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#location">
                Location
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane container fade mt-3" id="review">
              <div className="row">
                <div className="col-sm-6">
                  <Review name={name} />
                </div>
                <div className="col-sm-6">
                  <ShowReview name={name} />
                </div>
              </div>
            </div>

            <div className="tab-pane container active" id="menu">
              <div className="row">
                {SingleHotel.map((SH, index) => (
                  <Menucard
                    key={index}
                    FoodId={SH._id}
                    FoodImg={SH.FoodImg}
                    FoodCategory={SH.FoodCategory}
                    FoodDesc={SH.FoodDesc}
                    FoodName={SH.FoodName}
                    FoodPrice={SH.FoodPrice}
                    FoodRating={SH.FoodRating}
                    FoodAvailable={SH.FoodAvailable}
                  />
                ))}
              </div>
            </div>

            <div className="tab-pane container fade" id="book-table">
              <TableSelection name={name} />
            </div>
            <div className="tab-pane container fade" id="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497512.15964081715!2d79.61796152360365!3d13.047524494280966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723740476701!5m2!1sen!2sin"
                width={400}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
