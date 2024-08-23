import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import DeleteIcon from "../../assets/deleteicon.svg";
import "../HOTELS/HotelStyles/Cart.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import GooglePayButton from "@google-pay/button-react";
import Duckicon from "../../assets/Duckicon.png";
import Emptyicon from "../../assets/Emptyicon.png";

const Cart = ({ setCl }) => {
  let [Cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getcart`)
      .then((res) => {
        setCart(res.data.info || []);
      })
      .catch((e) => {
        console.log("Failed To Add Card!");
      });
  }, [Cart]);

  // Update setCl whenever Cart changes
  useEffect(() => {
    if (setCl) {
      setCl(Cart.length);
    }
  }, [Cart, setCl]);

  let DeleteHandler = (id) => {
    axios
      .delete(`${API_EndPoint}/cart/cartdelete/${id}`)
      .then(() => {
        alert("Data Deleted!");
      })
      .catch((e) => {
        alert("Error to Delete Data!");
      });
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: "3" }}>
        <NavBar />
      </div>

      <div id="pay-form" className="mt-3">
        <div
          className="container"
          style={{ fontVariant: "small-caps", fontWeight: "500" }}
        >
          <div className="row">
            <div className="col-sm-6">
              {Cart.length > 0 ? (
                Cart.map((d) => {
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
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          display: "inline-block",
                          marginRight: "20px",
                        }}
                      />
                      <div
                        style={{
                          display: "inline-block",
                          verticalAlign: "top",
                        }}
                      >
                        <h4>{d.foodname}</h4>
                        <p>{d.foodcategory}</p>
                        <p>{d.foodprice}</p>
                        <img
                          src={DeleteIcon}
                          alt=""
                          onClick={() => {
                            DeleteHandler(d._id);
                          }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <img
                  src={Emptyicon}
                  className="img-fluid animated-image "
                  style={{ width: "400px" }}
                />
              )}
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
              <div className="form-floating mt-3">
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
                      style={{ fontWeight: "500" }}
                    >
                      Upi
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                          apiVersion: 2,
                          apiVersionMinor: 0,
                          allowedPaymentMethods: [
                            {
                              type: "CARD",
                              parameters: {
                                allowedAuthMethods: [
                                  "PAN_ONLY",
                                  "CRYPTOGRAM_3DS",
                                ],
                                allowedCardNetworks: ["MASTERCARD", "VISA"],
                              },
                              tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                  gateway: "example",
                                  gatewayMerchantId: "exampleGatewayMerchantId",
                                },
                              },
                            },
                          ],
                          merchantInfo: {
                            merchantId: "12345678901234567890",
                            merchantName: "Demo Merchant",
                          },
                          transactionInfo: {
                            totalPriceStatus: "FINAL",
                            totalPriceLabel: "Total",
                            totalPrice: "1",
                            currencyCode: "INR",
                            countryCode: "IND",
                          },
                          shippingAddressRequired: false,
                          callbackIntents: ["PAYMENT_AUTHORIZATION"],
                        }}
                        onLoadPaymentData={(paymentRequest) => {
                          console.log("Success", paymentRequest);
                        }}
                        onPaymentAuthorized={(paymentData) => {
                          console.log(
                            "Payment Authorised Success",
                            paymentData
                          );
                          return { transactionState: "SUCCESS" };
                        }}
                        existingPaymentMethodRequired="false"
                        buttonColor="default"
                        buttonType="short"
                      />
                    </div>
                  </div>
                </div>
                <div className="card mt-2">
                  <div className="card-header">
                    <a
                      className="collapsed btn cart-accordion"
                      data-bs-toggle="collapse"
                      href="#collapseTwo"
                      style={{ fontWeight: "500" }}
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
