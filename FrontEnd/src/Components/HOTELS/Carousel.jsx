import React from "react";
import HotelInImage from "../../assets/hotelinimage.jpg";
import HotelOutImage from "../../assets/hoteloutimage.jpg";
import DeliveryImage from "../../assets/deliveryimage.png";
const Carousel = () => {
  return (
    <div className="container">
      <div id="demo" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={0}
            className="active"
          />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={HotelOutImage}
              alt="Los Angeles"
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <h3>Hotel Outside!</h3>
              <p>Such a beautiful outside view!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={HotelInImage}
              alt="Los Angeles"
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <h3>Hotel Inside!</h3>
              <p>Such a beautiful outside view!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={DeliveryImage} alt="New York" className="d-block w-100" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
