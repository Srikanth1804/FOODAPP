import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import DeleteIcon from "../../assets/deleteicon.svg";
import Emptyicon from "../../assets/Emptyicon.png";
import Qtybtn from "./Qtybtn";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import GooglePayButton from "@google-pay/button-react";
import "../HOTELS/HotelStyles/Cart.css";

const Cart = ({ setCl }) => {
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalUsername, setModalUsername] = useState("");

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/food/getcart`)
      .then((res) => {
        setCart(res.data.info || []);
        const initialCounts = {};
        res.data.info.forEach((item) => {
          initialCounts[item._id] = 1; // Initialize count for each item
        });
        setItemCounts(initialCounts);
      })
      .catch((e) => {
        console.error("Failed to fetch cart data!", e);
      });
  }, [setCl]);

  useEffect(() => {
    if (setCl) {
      setCl(cart.length);
    }
  }, [cart, setCl]);

  const deleteHandler = (id) => {
    axios
      .delete(`${API_EndPoint}/cart/cartdelete/${id}`)
      .then(() => {
        setCart(cart.filter((item) => item._id !== id)); // Update cart state
      })
      .catch((e) => {
        alert("Error deleting item!");
        console.error(e);
      });
  };

  const handleCountChange = (id, change) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(0, prevCounts[id] + change), // Prevent negative counts
    }));
  };

  const totalSum = cart.reduce((total, item) => {
    const itemCount = itemCounts[item._id] || 0;
    return total + item.foodprice * itemCount;
  }, 0);

  const handleOrder = (e) => {
    e.preventDefault();
    const orderData = cart.map((item) => ({
      _id: item._id,
      name: item.foodname,
      price: item.foodprice,
      itemCount: itemCounts[item._id] || 0,
      username: username,
      email: email,
      address: address,
      total: totalSum,
    }));

    console.log(orderData);

    setUsername("");
    setEmail("");
    setAddress("");

    axios
      .post(`${API_EndPoint}/order/placeorder`, { orderData })
      .then((response) => {
        console.log("Order placed successfully!", response.data);
        setShowModal(true);
        setModalUsername(username);
      })
      .then(() => {
        setCart([]);
        setItemCounts({});
        console.log("Cart cleared successfully!");
      })
      .catch((error) => {
        console.error("Error placing order or clearing cart!", error);
      });

    axios.delete(`${API_EndPoint}/cart/clearcart`);
  };

  return (
    <div style={{ fontVariant: "small-caps" }}>
      <div style={{ position: "sticky", top: "0", zIndex: "3" }}>
        <NavBar />
      </div>

      <div
        id="pay-form"
        className="mt-3"
        style={{ fontVariant: "small-caps", fontWeight: "500" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    className="shadow p-3 bg-white rounded mt-4 d-flex justify-content-between align-items-center"
                    key={item._id}
                    style={{ height: "200px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <img
                        src={item.foodimg}
                        alt={item.foodname}
                        className="img-fluid img-thumbnail"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          marginRight: "20px",
                        }}
                      />
                      <div>
                        <h4>{item.foodname}</h4>
                        <p>{item.foodcategory}</p>
                        <p>{item.foodprice * (itemCounts[item._id] || 0)}</p>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "500",
                          }}
                        >
                          <Qtybtn Track={() => handleCountChange(item._id, 1)}>
                            +
                          </Qtybtn>
                          <p style={{ margin: "0 10px" }}>
                            {itemCounts[item._id]}
                          </p>
                          <Qtybtn
                            Track={() => handleCountChange(item._id, -1)}
                            disable={itemCounts[item._id] <= 1}
                          >
                            -
                          </Qtybtn>
                        </div>
                      </div>
                    </div>
                    <img
                      src={DeleteIcon}
                      alt="Delete"
                      onClick={() => deleteHandler(item._id)}
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                    />
                  </div>
                ))
              ) : (
                <img
                  src={Emptyicon}
                  className="img-fluid animated-image"
                  style={{ width: "400px" }}
                  alt="Empty Cart"
                />
              )}
            </div>
            <div className="col-sm-6 mt-3">
              <form onSubmit={handleOrder}>
                <div className="form-floating mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="off"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ boxShadow: "none", fontVariant: "small-caps" }}
                  />
                  <label htmlFor="address">Address</label>
                  <h6 className="mt-3 mark">Total: ₹{totalSum.toFixed(2)}</h6>
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
                          environment="TEST" // Change to "PRODUCTION" in a live environment
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
                                    gateway: "example", // Replace with your actual gateway name in lowercase
                                    gatewayMerchantId: "yourGatewayMerchantId", // Replace with actual merchant ID
                                  },
                                },
                              },
                            ],
                            merchantInfo: {
                              merchantId: "yourActualMerchantId", // Replace with your actual merchant ID
                              merchantName: "Your Merchant Name", // Replace with your merchant name
                            },
                            transactionInfo: {
                              totalPriceStatus: "FINAL",
                              totalPriceLabel: "Total",
                              totalPrice: totalSum.toFixed(2).toString(), // Ensure this is a valid string representation of the total amount
                              currencyCode: "INR",
                              countryCode: "IN", // Ensure this is correct
                            },
                            shippingAddressRequired: false,
                            callbackIntents: ["PAYMENT_AUTHORIZATION"],
                          }}
                          onLoadPaymentData={(paymentRequest) => {
                            console.log(
                              "Payment data loaded successfully",
                              paymentRequest
                            );
                          }}
                          onPaymentAuthorized={(paymentData) => {
                            console.log(
                              "Payment authorized successfully",
                              paymentData
                            );
                            return { transactionState: "SUCCESS" };
                          }}
                          existingPaymentMethodRequired="false"
                          buttonColor="black" // "default" or other colors like "black"
                          buttonType="long" // "short" or "long" depending on your preferred button size
                        />
                      </div>
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
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{
                          fontWeight: "500",
                          border: "none",
                          fontVariant: "small-caps",
                        }}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Confirmation</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Thank you, {modalUsername}! Your order has been placed
                  successfully.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                  style={{ fontVariant: "small-caps" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
