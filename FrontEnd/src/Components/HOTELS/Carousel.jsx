import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hotelimg from "../../assets/hotelimage.png";
import Hotelreception from "../../assets/hotel-reception1.png";
import Delivery from "../../assets/delivery.png";
import Servicetym from "../../assets/24-7.png";
const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <Carousel responsive={responsive}>
        <div>
          <img src={Hotelimg} alt="" className="img-fluid" />
        </div>
        <div>
          <img src={Hotelreception} alt="" className="img-fluid" />
        </div>
        <div>
          <img src={Delivery} alt="" className="img-fluid" />
        </div>
        <div>
          <img src={Servicetym} alt="" className="img-fluid" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
