import React from "react";
import HotelForm from "./HotelForm";
import FoodForm from "./FoodForm";

const HotelInfo = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", display: "block" }}>
      <div id="accordion">
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseTwo"
            >
              Add a Hotel
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
        <div className="card">
          <div className="card-header">
            <a
              className="collapsed btn"
              data-bs-toggle="collapse"
              href="#collapseThree"
            >
              Add A Food
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
  );
};

export default HotelInfo;
