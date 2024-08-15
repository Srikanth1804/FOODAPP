import React from "react";
import "../HOTELS/HotelStyles/Menucard.css";
import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/Nonveg.svg";
import star from "../../assets/Star.svg";
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
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card" id="menucard" style={{ width: "100%" }}>
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
              {FoodCategory === "veg" ? (
                <img
                  src={veg}
                  alt="Veg"
                  style={{ margin: "5px", width: "15px" }}
                />
              ) : (
                <img
                  src={nonveg}
                  alt="Non-Veg"
                  style={{ marginLeft: "1px", width: "20px" }}
                />
              )}
              {FoodCategory}
            </p>
            <p>
              <b>Price:</b> ₹{FoodPrice}
            </p>
            <p>
              <span class="badge bg-warning">
                {FoodRating}
                <img
                  src={star}
                  style={{ width: "10px", margin: "2px", marginBottom: "4px" }}
                />
              </span>
            </p>
            <a href="#" className="btn" id="menucard-btn">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
