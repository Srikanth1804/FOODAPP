import React, { useState, useEffect } from "react";
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
    FoodId,
  } = props; // Assuming FoodId is passed as a prop

  let [showModal, setShowModal] = useState(false);
  let [inCart, setInCart] = useState(false); // New state to track if item is in cart

  // Check local storage to see if the item is already in the cart
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isInCart = cartItems.some((item) => item.FoodName === FoodName);
    setInCart(isInCart);
  }, [FoodName]);

  let HandleCart = (e) => {
    e.preventDefault();

    let CartData = {
      FoodImg,
      FoodCategory,
      FoodDesc,
      FoodName,
      FoodPrice,
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (!inCart) {
      // Add item to cart
      cartItems.push(CartData);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      setInCart(true);
      axios
        .post(`${API_EndPoint}/cart/addcart`, CartData)
        .then(() => {
          setShowModal("Item Added To Cart!");
        })
        .catch((e) => {
          alert("Error adding item to cart");
        });
    } else {
      // Remove item from cart
      cartItems = cartItems.filter((item) => item.FoodName !== FoodName);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Item removed from cart!");
      setInCart(false);

      // Make sure to send the FoodId in the delete request
      axios
        .delete(`${API_EndPoint}/cart/remove/${FoodName}`) // Assuming your API expects the ID in the URL
        .then(() => {
          console.log("Item removed from Cart!");
        })
        .catch((e) => {
          alert("Error removing item from cart");
        });
    }
  };

  return (
    <div className="col-md-4 mt-4">
      <div className="card" id="menucard" style={{ width: "100%" }}>
        <div className="container">
          <img
            className="card-img-top img-fluid mt-2"
            src={FoodImg}
            alt="Card image"
            id="food-img"
            style={{ borderRadius: "8px", height: "228px" }}
          />
          <div className="card-body">
            <h4 className="card-title" id="food-name">
              {FoodName}
            </h4>
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
              <span className="badge bg-success">
                {FoodRating}
                <img
                  src={star}
                  style={{ width: "10px", margin: "2px", marginBottom: "4px" }}
                />
              </span>
            </p>
            <button className="btn" id="menucard-btn" onClick={HandleCart}>
              {inCart ? "Remove from Cart" : "Add to Cart"}{" "}
              {/* Toggle button text */}
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
              <div className="modal-body">{showModal}</div>{" "}
              {/* Show dynamic message */}
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
