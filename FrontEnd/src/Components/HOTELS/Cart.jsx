import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import DeleteIcon from "../../assets/deleteicon.svg";

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
    <div>
      <div className="row container">
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
                <div style={{ display: "inline-block", verticalAlign: "top" }}>
                  <h4>{d.foodname}</h4>
                  <p>{d.foodcategory}</p>
                  <p>{d.foodprice}</p>
                  <img src={DeleteIcon} alt="" srcset="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-sm-6">
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              name="username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="address"
              name="text"
              placeholder="Comment goes here"
              defaultValue={""}
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="mt-2">
            <h3>Payment Method:</h3>
            <div className="dropdown mt-3">
              <input
                type="text"
                className="form-control dropdown-toggle p-3"
                id="email"
                placeholder="UPI"
                data-bs-toggle="dropdown"
                autoComplete="off"
              />
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="upi"
                      />
                      Google Pay
                    </label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="upi"
                      />
                      PhonePe
                    </label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="upi"
                      />
                      Paytm
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div className="dropdown mt-3">
              <input
                type="text"
                className="form-control dropdown-toggle p-3"
                placeholder="NetBanking"
                data-bs-toggle="dropdown"
                autoComplete="off"
              />
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="NB"
                      />
                      HDFC
                    </label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check mb-3">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="NB"
                      />
                      ICICI
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              {/* <button data-bs-toggle="collapse" data-bs-target="#demo">
                Collapsible
              </button> */}
              <input
                type="text"
                className="form-control dr p-3"
                placeholder="NetBanking"
                data-bs-toggle="dropdown"
                autoComplete="off"
              />
              <div id="demo" class="collapse">
                Lorem ipsum dolor text....
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
