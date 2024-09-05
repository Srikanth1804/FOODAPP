import React, { useState } from "react";
import "../HOTELS/HotelStyles/HotelForm.css";
import logo from "/src/assets/Elogo.png";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
import AddTableForm from "../Table/AddTable";

const HotelForm = () => {
  // Response State
  let [Response, setResponse] = useState();
  let [showModal, setShowModal] = useState(false);

  // state for Hotel Information
  let [hotelname, sethotelname] = useState("");
  let [hotelimg, sethotelimg] = useState("");
  let [hotelcategory, setHotelcategory] = useState("Veg");
  let [hotellocation, sethotellocation] = useState("");
  let [opentime, setopentime] = useState("");
  let [closetime, setclosetime] = useState("");
  let [rating, setrating] = useState("1");
  let [hoteldesc, sethoteldesc] = useState("");

  let [hasbar, sethasbar] = useState(false);
  let [hasparking, sethasparking] = useState(false);
  let [canbooktable, setcanbooktable] = useState(false);

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
    console.log(formdata);

    axios
      .post(`${API_EndPoint}/hotel/addhotel`, formdata)
      .then((res) => {
        setResponse(res.data);
        if (res.data.status) {
          setShowModal(true);
        } else {
          alert("Failed to Add Hotel!");
        }
      })
      .catch((e) => {
        console.log(e);
      });

    // Reset form fields
    sethotelname("");
    sethotelimg("");
    setHotelcategory("Veg");
    sethotellocation("");
    setopentime("");
    setclosetime("");
    setrating("1");
    sethoteldesc("");

    sethasbar(false);
    sethasparking(false);
    setcanbooktable(false);
  };

  return (
    <div className="mt-2">
      <div className="container">
        <div id="container-fluid-bg">
          <h1
            className="text-center p-2"
            id="hotel-head"
            style={{ fontWeight: "900" }}
          >
            HOTELFORM
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
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
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
                  className="form-control form-control-lg hotel-input"
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
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
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

            <div className="row mt-4">
              <div className="col-sm-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input hotel-input-switch"
                    type="checkbox"
                    id="hasbar"
                    checked={hasbar}
                    onChange={() => sethasbar(!hasbar)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="hasbar"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Has Bar
                  </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input hotel-input-switch"
                    type="checkbox"
                    id="hasparking"
                    checked={hasparking}
                    onChange={() => sethasparking(!hasparking)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="hasparking"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Has Parking
                  </label>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-check form-switch mt-3">
                  <input
                    className="form-check-input hotel-input-switch"
                    type="checkbox"
                    id="canbooktable"
                    checked={canbooktable}
                    onChange={() => setcanbooktable(!canbooktable)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="canbooktable"
                    style={{ fontVariant: "small-caps", fontWeight: "500" }}
                  >
                    Possible to Book a Table
                  </label>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <div className="d-grid">
                  <button type="submit" className="btn btn-block" id="btn-bg">
                    <b>Submit</b>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <AddTableForm />
        </div>
      </div>
    </div>
  );
};

export default HotelForm;
