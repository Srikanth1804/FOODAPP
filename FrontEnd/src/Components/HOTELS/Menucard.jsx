import React from "react";
import Dummyimg from "/src/assets/Dummyimg.avif";
import "../HOTELS/HotelStyles/Menucard.css";
const Menucard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: 400 }} id="menucard">
            <div className="container">
              <img
                className="card-img-top img-fluid mt-2"
                src={Dummyimg}
                alt="Card image"
                style={{ borderRadius: "8px" }}
              />
              <div className="card-body">
                <h4 className="card-title">Chicken rice</h4>
                <p className="card-text">
                  North Indian, Mughlai, Kebab, Desserts...
                </p>
                <p>
                  <b>Category:</b>Veg & Non-veg
                </p>
                <p>
                  <b>Price:</b>₹ 300
                </p>
                <p>Radisson Blu, Egmore, Chennai</p>
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
