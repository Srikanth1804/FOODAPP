import React from "react";
import HotelForm from "./HotelForm";
import FoodForm from "./FoodForm";
import NavBar from "../NavBar/NavBar";
import "../HOTELS/HotelStyles/Hotelstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
export const HotelInfo = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div id="accordion">
          <div className="card hotelinfo-card">
            <div className="card-header text-center">
              <a
                className="collapsed btn hotel-info"
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                <FontAwesomeIcon icon={faHotel} /> Add a Hotel
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <HotelForm />
              </div>
            </div>
          </div>
          <div className="card mt-4 hotelinfo-card">
            <div className="card-header text-center">
              <a
                className="collapsed btn hotel-info"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                <FontAwesomeIcon icon={faBowlFood} /> Add A Food
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <FoodForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
