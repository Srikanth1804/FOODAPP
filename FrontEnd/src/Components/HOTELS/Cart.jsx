import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import DeleteIcon from "../../assets/deleteicon.svg";
import "../HOTELS/HotelStyles/Cart.css";
import UPI from "../../assets/upi-icon.webp";
import Cash from "../../assets/cash-on-delivery.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const Cart = () => {
  let [Cart, setCart] = useState([]);
  console.log(Cart);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getcart`)
      .then((res) => {
        setCart(res.data.info);
      })
      .catch((e) => {
        console.log("Failed To Add Card!");
      });
  }, []);

  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: "3" }}>
        <NavBar />
      </div>

      <div id="pay-form" className="mt-3">
        <div className="container" style={{ fontVariant: "small-caps" }}>
          <div className="row">
            <div className="col-sm-6">
              {Cart.map((d) => {
                return (
                  <div
                    style={{ height: "200px" }}
                    className="shadow p-3 bg-white rounded mt-4"
                    key={d.id}
                  >
                    <img
                      src={d.foodimg}
                      alt=""
                      className="img-fluid img-thumbnail"
                      style={{
                        width: "150px", // Set a fixed width
                        height: "150px", // Set a fixed height
                        objectFit: "cover", // Ensure the image covers the area
                        display: "inline-block",
                        marginRight: "20px",
                      }}
                    />
                    <div
                      style={{ display: "inline-block", verticalAlign: "top" }}
                    >
                      <h4>{d.foodname}</h4>
                      <p>{d.foodcategory}</p>
                      <p>{d.foodprice}</p>
                      <img src={DeleteIcon} alt="" srcset="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-sm-6 mt-3">
              <div className="form-floating mt-2">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Username"
                  name="username"
                  autoComplete="off"
                  style={{ boxShadow: "none", fontVariant: "small-caps" }}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating  mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  autoComplete="off"
                  style={{ boxShadow: "none", fontVariant: "small-caps" }}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating mt-3">
                <textarea
                  className="form-control"
                  id="address"
                  name="text"
                  placeholder="Comment goes here"
                  defaultValue={""}
                  style={{ boxShadow: "none", fontVariant: "small-caps" }}
                />
                <label htmlFor="address">Address</label>
              </div>
              <h4 className="mt-4" style={{ fontWeight: "700" }}>
                Payment Method:
              </h4>
              <div id="accordion">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="btn cart-accordion"
                      data-bs-toggle="collapse"
                      href="#collapseOne"
                    >
                      Upi
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body"></div>
                  </div>
                </div>
                <div className="card mt-2">
                  <div className="card-header">
                    <a
                      className="collapsed btn cart-accordion"
                      data-bs-toggle="collapse"
                      href="#collapseTwo"
                    >
                      Cashondelivery
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      <a
                        href=""
                        className="btn btn-warning"
                        style={{ fontWeight: "500", border: "none" }}
                      >
                        Place Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
