import React, { useEffect, useState } from "react";
import imgG1 from "../../assets/hotelimg-bg.png";
import "../HOTELS/HotelStyles/Hoteldetails.css";
import Menucard from "./Menucard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
import Review from "./Review";
import ShowReview from "./Show";
import TableSelection from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faBusinessTime,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const HotelDetails = () => {
  let { name } = useParams();
  let [SingleHotel, setSingleHotel] = useState([]);
  let [HotelDetail, SetHotelDetail] = useState([]);
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

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/hotel/gethotel`, { params: { name } })
      .then((res) => {
        SetHotelDetail(res.data.info);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [name]);

  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-12 unique-animation" id="image-container">
            <img
              src={imgG1}
              alt="Hotel"
              className="img-fluid img-gallery"
              style={{ borderRadius: "10px" }}
            />

            <div id="overlay">
              <div className="wrapper">
                <svg>
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    {name}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {HotelDetail.map((HD) => {
            return (
              <div className="col-sm-12" style={{ fontVariant: "small-caps" }}>
                <p>{HD.HotelDescription}</p>
                <div className="row">
                  <div className="col-sm-4 mt-2">
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <b> Category:</b> {HD.HotelCategory}
                  </div>
                  <div className="col-sm-4 mt-2">
                    <FontAwesomeIcon icon={faBusinessTime} />
                    <b> OpenTime:</b> {HD.HotelOpen}
                  </div>
                  <div className="col-sm-4 mt-2">
                    <FontAwesomeIcon icon={faBusinessTime} />
                    <b> CloseTime:</b> {HD.HotelClose}
                  </div>
                  <div className="col-sm-4 mt-2">
                    <FontAwesomeIcon icon={faStar} />
                    <b> HotelRating:</b> {HD.HotelRating}
                  </div>
                  <div className="col-sm-4 mt-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <b> Location:</b> {HD.HotelLocation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3" style={{ fontVariant: "small-caps" }}>
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
              <div className="map-container">
                <iframe
                  className="shadow-lg p-2 bg-white mt-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4017552.2817456108!2d75.38858150600761!3d10.469818835124608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1725100347137!5m2!1sen!2sin"
                  width={800}
                  height={600}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
