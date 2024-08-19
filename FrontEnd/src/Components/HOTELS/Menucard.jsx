import React, { useState } from "react";
import "../HOTELS/HotelStyles/Menucard.css";
import veg from "../../assets/Veg.svg";
import nonveg from "../../assets/Nonveg.svg";
import star from "../../assets/Star.svg";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
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

  let [showModal, setShowModal] = useState(false);

  let HandleCart = (e) => {
    e.preventDefault();

    let CartData = {
      FoodImg,
      FoodCategory,
      FoodDesc,
      FoodName,
      FoodPrice,
    };

    axios
      .post(`${API_EndPoint}/cart/addcart`, CartData)
      .then((res) => {
        setShowModal(res.data.info);
        console.log(res.data.info);
      })
      .catch((e) => {
        console.log("Error TO Added Cart");
      });
  };

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
              <span class="badge bg-primary">
                {FoodRating}
                <img
                  src={star}
                  style={{ width: "10px", margin: "2px", marginBottom: "4px" }}
                />
              </span>
            </p>
            <button className="btn" id="menucard-btn" onClick={HandleCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          id="myModal"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Thank You!</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">Cart Successfully Added!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menucard;
