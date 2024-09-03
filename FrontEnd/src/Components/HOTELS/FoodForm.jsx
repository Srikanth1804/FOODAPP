import React from "react";
import { useState } from "react";
import "./HotelStyles/FoodForm.css";
import logo from "/src/assets/Elogo.png";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
const FoodForm = () => {
  let [Response, setResponse] = useState();
  let [showModal, setShowModal] = useState(false);

  // state for Food Information

  let [foodname, setfoodname] = useState();
  let [foodimg, setfoodimg] = useState();
  let [foodcategory, setfoodcategory] = useState("veg");
  let [fooddesc, setfooddesc] = useState();
  let [hotelname, sethotelname] = useState();
  let [price, setprice] = useState();
  let [rating, setrating] = useState(1);
  let [notes, setnotes] = useState();
  let [isavailable, setisavailable] = useState();

  let HandleSubmit = (e) => {
    e.preventDefault();

    let FoodData = {
      foodname,
      foodimg,
      foodcategory,
      fooddesc,
      hotelname,
      price,
      rating,
      notes,
      isavailable,
    };
    console.log(FoodData);

    setfoodname("");
    setfoodimg("");
    setfoodcategory("veg");
    setfooddesc("");
    sethotelname("");
    setprice("");
    setrating(1);
    setnotes("");
    setisavailable(false);

    axios
      .post(`${API_EndPoint}/food/addfood`, FoodData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setShowModal(true);
        } else {
          alert("Failed to Add Food!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="container">
        <div id="container-fluid-food-bg">
          <h1
            className="text-center p-2"
            id="food-head"
            style={{ fontWeight: "900" }}
          >
            FOODFORM
          </h1>
        </div>
        <p
          className="text-center"
          style={{ fontVariant: "small-caps", fontWeight: "500" }}
        >
          Add your Food details properly in the below form!
        </p>

        <div className="p-4" id="food-form-bg">
          <h3
            className="text-center info-color-food"
            style={{ fontVariant: "all-small-caps", fontWeight: "700" }}
          >
            FOOD INFORMATION
          </h3>

          <form onSubmit={HandleSubmit}>
            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="food-name"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Enter Food Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg food-input"
                  id="food-name"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => {
                    setfoodname(e.target.value);
                  }}
                  value={foodname}
                  required
                />
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="image URL"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Enter Image URL
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg food-input"
                  id="image URL"
                  autoComplete="off"
                  onChange={(e) => {
                    setfoodimg(e.target.value);
                  }}
                  name="text"
                  value={foodimg}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="food-category"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Food Category
                </label>
                <select
                  name=""
                  style={{ fontVariant: "small-caps" }}
                  className="form-control food-input-select"
                  id="food-category"
                  onChange={(e) => {
                    setfoodcategory(e.target.value);
                  }}
                  value={foodcategory}
                >
                  <option value="veg">veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="food-desc"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Food Description
                </label>
                <textarea
                  className="form-control form-control-lg food-input"
                  rows="1"
                  id="food-desc"
                  name="text"
                  autoComplete="off"
                  onChange={(e) => {
                    setfooddesc(e.target.value);
                  }}
                  value={fooddesc}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-name"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Enter Hotel Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg food-input"
                  id="hotel-name"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => {
                    sethotelname(e.target.value);
                  }}
                  value={hotelname}
                  required
                />
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="price"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Price
                </label>
                <input
                  type="number"
                  className="form-control form-control-lg food-input"
                  id="price"
                  autoComplete="off"
                  name="text"
                  min={1}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  value={price}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="rating"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Rating
                </label>
                <select
                  name=""
                  style={{ fontVariant: "small-caps" }}
                  className="form-control food-input-select"
                  id="rating"
                  onChange={(e) => {
                    setrating(e.target.value);
                  }}
                  value={rating}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="notes"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Notes
                </label>
                <textarea
                  className="form-control form-control-lg food-input"
                  rows="1"
                  id="notes"
                  name="text"
                  autoComplete="off"
                  onChange={(e) => {
                    setnotes(e.target.value);
                  }}
                  value={notes}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mt-3">
                <div className="form-group form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input food-input-switch"
                    id="available"
                    onChange={(e) => {
                      setisavailable(e.target.checked);
                    }}
                    checked={isavailable}
                  />
                  <label
                    htmlFor="available"
                    className="form-check-label"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Is Available
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div class="d-grid">
                  <button
                    type="submit"
                    className="btn btn-block"
                    id="btn-food-bg"
                  >
                    <b>Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </form>
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
              <div className="modal-body">Your Food has been Added!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
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

export default FoodForm;
