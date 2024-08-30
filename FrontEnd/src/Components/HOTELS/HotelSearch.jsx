import React, { useState } from "react";
import "../HOTELS/HotelStyles/Hotelstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";
import HotelFiles from "./HotelFiles";

const HotelSearch = (props) => {
  let [dish, setDish] = useState("");
  let [location, setLocation] = useState("chennai");

  let { setHotel } = props;

  let HandleSubmit = (e) => {
    e.preventDefault();

    let SearchData = {
      dish,
      location,
    };

    console.log(SearchData);

    axios
      .get(`${API_EndPoint}/hotel/findhotel`, {
        params: SearchData,
      })
      .then((res) => {
        console.log("Search Data posted!");
        setHotel(res.data.info);
      })
      .catch((e) => {
        console.log("Error TO Past Data!");
      });
  };

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="input-group mt-3 p-3 mb-4 bg-white" id="hotel-search">
          <FontAwesomeIcon className="mt-3" icon={faMagnifyingGlass} />
          <input
            type="search"
            list="browsers"
            name="browser"
            className="form-control"
            placeholder="Dish..."
            id="search-bar"
            onChange={(e) => {
              setDish(e.target.value);
            }}
            required
          />
          <datalist id="browsers">
            <option value="veg"></option>
            <option value="Non-Veg"></option>
            <option value="Burger"></option>
            <option value="Pizza"></option>
            <option value="Cakes"></option>
          </datalist>

          <select
            name=""
            id="location-bar"
            className="form-control"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} />
            <option value="chennai" className="p-2">
              Chennai
            </option>
            <option value="madurai" className="p-2">
              Madurai
            </option>
          </select>

          <button className="btn" type="submit" id="submit-btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;
