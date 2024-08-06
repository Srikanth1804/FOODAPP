import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { API_EndPoint } from '../GeneralData';


export let  AddHotelData = () => {
  // State hooks for hotel inputs
  const [hotelName, setHotelName] = useState('');
  const [hotelImgO, setHotelImgO] = useState('');
  const [hotelImgI, setHotelImgI] = useState('');
  const [hotelCategory, setHotelCategory] = useState('');
  const [hotelLocation, setHotelLocation] = useState('');
  const [hotelDesc, setHotelDesc] = useState('');
  
  // State hooks for food inputs
  const [foodName, setFoodName] = useState('');
  const [foodImg, setFoodImg] = useState('');
  const [foodType, setFoodType] = useState('');
  const [foodDesc, setFoodDesc] = useState('');
  const [foodPrice, setFoodPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = {
      hotelName,
      hotelImgO,
      hotelImgI,
      hotelCategory,
      hotelLocation,
      hotelDesc,
      foodName,
      foodImg,
      foodType,
      foodDesc,
      foodPrice,
    };
    console.log(formData);
    
    axios.post(`${API_EndPoint}/api/hotel/addhotel`,formData)
    .then(()=>{
        console.log("Data Posted to Server!");
        
    })
    .catch((e)=>{
        console.log("Error to post Data!");
        
    })






  };

  return (
    <div className="container mt-5">
      <h2>Hotel Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Hotel Information */}
        <div className="form-group">
          <label htmlFor="hotelName">Hotel Name</label>
          <input
            type="text"
            className="form-control"
            id="hotelName"
            placeholder="Enter hotel name"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hotelImgO">Hotel Image Outside</label>
          <input
            type="text"
            className="form-control"
            id="hotelImgO"
            placeholder="Enter hotel outside image URL"
            value={hotelImgO}
            onChange={(e) => setHotelImgO(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hotelImgI">Hotel Image Inside</label>
          <input
            type="text"
            className="form-control"
            id="hotelImgI"
            placeholder="Enter hotel inside image URL"
            value={hotelImgI}
            onChange={(e) => setHotelImgI(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hotelCategory">Hotel Category</label><br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="hotelCategory"
              id="veg"
              value="Veg"
              checked={hotelCategory === 'Veg'}
              onChange={(e) => setHotelCategory(e.target.value)}
            />
            <label className="form-check-label" htmlFor="veg">Veg</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="hotelCategory"
              id="nonVeg"
              value="Non-Veg"
              checked={hotelCategory === 'Non-Veg'}
              onChange={(e) => setHotelCategory(e.target.value)}
            />
            <label className="form-check-label" htmlFor="nonVeg">Non-Veg</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="hotelCategory"
              id="vegNonVeg"
              value="Veg & Non-Veg"
              checked={hotelCategory === 'Veg & Non-Veg'}
              onChange={(e) => setHotelCategory(e.target.value)}
            />
            <label className="form-check-label" htmlFor="vegNonVeg">Veg &amp; Non-Veg</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="hotelLocation">Hotel Location</label>
          <input
            type="text"
            className="form-control"
            id="hotelLocation"
            placeholder="Enter hotel location"
            value={hotelLocation}
            onChange={(e) => setHotelLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hotelDesc">Hotel Description</label>
          <textarea
            className="form-control"
            id="hotelDesc"
            rows={3}
            placeholder="Enter hotel description"
            value={hotelDesc}
            onChange={(e) => setHotelDesc(e.target.value)}
          />
        </div>

        <h2>Food Information</h2>
        {/* Food Information */}
        <div className="form-group">
          <label htmlFor="foodName">Food Name</label>
          <input
            type="text"
            className="form-control"
            id="foodName"
            placeholder="Enter food name"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodImg">Food Image</label>
          <input
            type="text"
            className="form-control"
            id="foodImg"
            placeholder="Enter food image URL"
            value={foodImg}
            onChange={(e) => setFoodImg(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodType">Food Type</label><br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="foodType"
              id="foodVeg"
              value="Veg"
              checked={foodType === 'Veg'}
              onChange={(e) => setFoodType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="foodVeg">Veg</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="foodType"
              id="foodNonVeg"
              value="Non-Veg"
              checked={foodType === 'Non-Veg'}
              onChange={(e) => setFoodType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="foodNonVeg">Non-Veg</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="foodType"
              id="foodVegNonVeg"
              value="Veg & Non-Veg"
              checked={foodType === 'Veg & Non-Veg'}
              onChange={(e) => setFoodType(e.target.value)}
            />
            <label className="form-check-label" htmlFor="foodVegNonVeg">Veg &amp; Non-Veg</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="foodDesc">Food Description</label>
          <textarea
            className="form-control"
            id="foodDesc"
            rows={3}
            placeholder="Enter food description"
            value={foodDesc}
            onChange={(e) => setFoodDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodPrice">Food Price</label>
          <input
            type="number"
            className="form-control"
            id="foodPrice"
            placeholder="Enter food price"
            value={foodPrice}
            onChange={(e) => setFoodPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}


