import React, { useState } from "react";
import "../HOTELS/HotelStyles/UpdateForm.css";
import NavBar from "../NavBar/NavBar";
const UpdateForm = () => {
  const [hotelname, setHotelname] = useState("");
  const [hotelimg, setHotelimg] = useState("");
  const [hotelcategory, setHotelcategory] = useState("Veg");
  const [hotellocation, setHotellocation] = useState("");
  const [opentime, setOpentime] = useState("");
  const [closetime, setClosetime] = useState("");
  const [rating, setRating] = useState("1");
  const [hoteldesc, setHoteldesc] = useState("");

  const [hasbar, setHasbar] = useState(false);
  const [hasparking, setHasparking] = useState(false);
  const [canbooktable, setCanbooktable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
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
    console.log(formData);

    // Reset form fields
    setHotelname("");
    setHotelimg("");
    setHotelcategory("Veg");
    setHotellocation("");
    setOpentime("");
    setClosetime("");
    setRating("1");
    setHoteldesc("");
    setHasbar(false);
    setHasparking(false);
    setCanbooktable(false);
  };

  return (
    <div>
      <div style={{ position: "sticky", top: "0", zIndex: "10" }}>
        <NavBar />
      </div>
      <div className="container mt-5">
        <h1
          style={{
            textAlign: "center",
            fontVariant: "small-caps",
            fontWeight: "700",
          }}
          id="heading-bg"
        >
          UpdateForm
        </h1>
        <div id="Update-bg">
          <h3
            style={{
              textAlign: "center",
              fontVariant: "small-caps",
              fontWeight: "700",
            }}
            id="update-color"
          >
            UpdateForm
          </h3>
          <form onSubmit={handleSubmit}>
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
                  className="form-control form-control-lg update-input"
                  id="hotel-name"
                  autoComplete="off"
                  name="hotel-name"
                  onChange={(e) => setHotelname(e.target.value)}
                  value={hotelname}
                  required
                />
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="image-url"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Enter Image URL
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg update-input"
                  id="image-url"
                  autoComplete="off"
                  name="image-url"
                  onChange={(e) => setHotelimg(e.target.value)}
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
                  className="form-control update-input-select"
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
                  className="form-control form-control-lg update-input"
                  id="hotel-location"
                  autoComplete="off"
                  name="hotel-location"
                  onChange={(e) => setHotellocation(e.target.value)}
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
                  className="form-control form-control-lg update-input"
                  id="hotel-open"
                  autoComplete="off"
                  name="hotel-open"
                  onChange={(e) => setOpentime(e.target.value)}
                  value={opentime}
                  required
                />
              </div>

              <div className="col-sm-6 mt-3">
                <label
                  htmlFor="hotel-close"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Close Time
                </label>
                <input
                  type="time"
                  className="form-control form-control-lg update-input"
                  id="hotel-close"
                  autoComplete="off"
                  name="hotel-close"
                  onChange={(e) => setClosetime(e.target.value)}
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
                  className="form-control update-input-select"
                  id="rating"
                  onChange={(e) => setRating(e.target.value)}
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
                  htmlFor="hotel-desc"
                  style={{ fontVariant: "small-caps", fontWeight: "500" }}
                >
                  Hotel Description
                </label>
                <textarea
                  className="form-control form-control-lg update-input"
                  rows="1"
                  id="hotel-desc"
                  name="hotel-desc"
                  autoComplete="off"
                  onChange={(e) => setHoteldesc(e.target.value)}
                  value={hoteldesc}
                  required
                ></textarea>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input update-input-switch"
                    type="checkbox"
                    id="hasbar"
                    checked={hasbar}
                    onChange={() => setHasbar(!hasbar)}
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
                    className="form-check-input update-input-switch"
                    type="checkbox"
                    id="hasparking"
                    checked={hasparking}
                    onChange={() => setHasparking(!hasparking)}
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
                    className="form-check-input update-input-switch"
                    type="checkbox"
                    id="canbooktable"
                    checked={canbooktable}
                    onChange={() => setCanbooktable(!canbooktable)}
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
                  <button
                    type="submit"
                    className="btn btn-block"
                    id="update-btn-bg"
                  >
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

export default UpdateForm;
