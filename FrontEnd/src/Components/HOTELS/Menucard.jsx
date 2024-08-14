import React from "react";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "../HOTELS/HotelStyles/Menucard.css";
const Menucard = (props) => {
  let {
    FoodImg,
    FoodCategory,
    FoodDesc,
    FoodName,
    FoodPrice,
    FoodRating,
    FoodAvailable,
  } = props;
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="card" id="menucard">
            <div className="container">
              <img
                className="card-img-top img-fluid mt-2"
                src={FoodImg}
                alt="Card image"
                style={{ borderRadius: "8px" }}
              />
              <div className="card-body">
                <h4 className="card-title">{FoodName}</h4>
                <p className="card-text">{FoodDesc}</p>
                <p>
                  <b>Category:</b>
                  {FoodCategory}
                </p>
                <p>
                  <b>Price:</b>₹{FoodPrice}
                </p>
                <p>{FoodRating}</p>
                <a href="#" className="btn" id="menucard-btn">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
