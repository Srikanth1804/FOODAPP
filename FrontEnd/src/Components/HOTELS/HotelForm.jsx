import React, { useState } from "react";
import "../HOTELS/HotelStyles/HotelForm.css";
import logo from "/src/assets/Elogo.png";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
const HotelForm = () => {
  // Response State

  let [Response, setResponse] = useState();

  // state for Hotel Information

  let [hotelname, sethotelname] = useState();
  let [hotelimg, sethotelimg] = useState();
  let [hotelcategory, setHotelcategory] = useState();
  let [hotellocation, sethotellocation] = useState();
  let [opentime, setopentime] = useState();
  let [closetime, setclosetime] = useState();
  let [rating, setrating] = useState();
  let [hoteldesc, sethoteldesc] = useState();
  let [hasbar, sethasbar] = useState();
  let [hasparking, sethasparking] = useState();
  let [canbooktable, setcanbooktable] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
    let formdata = {
      hotelname,
      hotelimg,
      hotelcategory,
      hotellocation,
      opentime,
      closetime,
      rating,
      hoteldesc,
      hasbar,
      hasparking,
      canbooktable,
    };

    axios
      .post(`${API_EndPoint}/hotel/addhotel`, formdata)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    sethotelname("");
    sethotelimg("");
    setHotelcategory("Veg");
    sethotellocation("");
    setopentime("");
    setclosetime("");
    setrating("1 star");
    sethoteldesc("");
    sethasbar(false);
    sethasparking(false);
    setcanbooktable(false);

    if (Response.status) {
      alert("Data Added Successfully!");
    } else {
      alert("Error TO Add Hotel");
    }
  };
  return (
    <div className="mt-2">
      <div className="container">
        <div id="container-fluid-bg">
          <img src={logo} className="img-fluid" alt="" id="hotel-logo" />
          <h1
            className="text-center p-2"
            id="hotel-head"
            style={{ fontWeight: "900" }}
          >
            FOODHUB
          </h1>
        </div>
        <p
          className="text-center"
          style={{ fontVariant: "small-caps", fontWeight: "500" }}
        >
          Add your Hotel details properly in the below form!
        </p>

        <div className="p-4" id="form-bg">
          <h3
            className="text-center info-color"
            style={{ fontVariant: "all-small-caps", fontWeight: "700" }}
          >
            HOTEL INFORMATION
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="text"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Enter Hotel Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg hotel-input"
                  id="text"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => sethotelname(e.target.value)}
                  value={hotelname}
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
                  className="form-control form-control-lg hotel-input"
                  id="image URL"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => sethotelimg(e.target.value)}
                  value={hotelimg}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-category"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Category
                </label>
                <select
                  name=""
                  style={{ fontVariant: "small-caps" }}
                  className="form-control hotel-input-select"
                  id="hotel-category"
                  onChange={(e) => setHotelcategory(e.target.value)}
                  value={hotelcategory}
                >
                  <option value="veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                  <option value="Veg&Non-Veg">Veg&Non-Veg</option>
                </select>
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-location"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Location
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg hotel-input"
                  id="hotel-location"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => sethotellocation(e.target.value)}
                  value={hotellocation}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-open"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Open Time
                </label>
                <input
                  type="time"
                  className="form-control form-control-lg hotel-input"
                  id="hotel-open"
                  placeholder="Enter text"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => setopentime(e.target.value)}
                  value={opentime}
                  required
                />
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-close"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel close Time
                </label>
                <input
                  type="time"
                  className="form-control  form-control-lg hotel-input"
                  id="hotel-close"
                  placeholder="Enter text"
                  autoComplete="off"
                  name="text"
                  onChange={(e) => setclosetime(e.target.value)}
                  value={closetime}
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
                  className="form-control hotel-input-select"
                  id="rating"
                  onChange={(e) => setrating(e.target.value)}
                  value={rating}
                >
                  <option value="1-star">1 Star</option>
                  <option value="2-stars">2 Stars</option>
                  <option value="3-stars">3 Stars</option>
                  <option value="4-stars">4 Stars</option>
                  <option value="5-stars">5 Stars</option>
                </select>
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotl-desc"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Description
                </label>
                <textarea
                  className="form-control form-control-lg hotel-input"
                  rows="1"
                  id="hotl-desc"
                  name="text"
                  autoComplete="off"
                  onChange={(e) => sethoteldesc(e.target.value)}
                  value={hoteldesc}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 mt-3">
                <div className="form-group form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input hotel-input-switch"
                    id="bar"
                    onChange={(e) => sethasbar(e.target.checked)}
                    checked={hasbar}
                  />
                  <label
                    htmlFor="bar"
                    className="form-check-label"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Has Bar
                  </label>
                </div>
              </div>

              <div className="col-sm-4 mt-3">
                <div className="form-group form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input hotel-input-switch"
                    id="parking"
                    onChange={(e) => sethasparking(e.target.checked)}
                    checked={hasparking}
                  />
                  <label
                    htmlFor="parking"
                    className="form-check-label"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Has Parking
                  </label>
                </div>
              </div>

              <div className="col-sm-4 mt-3">
                <div className="form-group form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input hotel-input-switch"
                    id="book-table"
                    onChange={(e) => setcanbooktable(e.target.checked)}
                    checked={canbooktable}
                  />
                  <label
                    htmlFor="book-table"
                    className="form-check-label"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Possible to Book a Table
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div class="d-grid">
                  <button type="submit" className="btn btn-block" id="btn-bg">
                    <b>Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelForm;
