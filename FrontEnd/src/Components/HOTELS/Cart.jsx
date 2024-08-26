import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import DeleteIcon from "../../assets/deleteicon.svg";
import "../HOTELS/HotelStyles/Cart.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import GooglePayButton from "@google-pay/button-react";
import Emptyicon from "../../assets/Emptyicon.png";
import Qtybtn from "./Qtybtn";

const Cart = ({ setCl }) => {
  const [cart, setCart] = useState([]);
  const [itemCounts, setItemCounts] = useState({});
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  console.log(cart);

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
  }, []);

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

  // Calculate total sum
  const totalSum = cart.reduce((total, item) => {
    const itemCount = itemCounts[item._id] || 0; // Get the count for the item
    return total + item.foodprice * itemCount; // Sum up the total price
  }, 0);

  let HandleOrder = (e) => {
    // Create an array to hold the order data
    e.preventDefault();
    const orderData = cart.map((item) => ({
      _id: item._id,
      name: item.foodname,
      price: item.foodprice,
      itemCount: itemCounts[item._id] || 0,
      username: username,
      email: email,
      address: address,
    }));

    // Log the order data to verify
    console.log(orderData);

    setusername("");
    setemail("");
    setaddress("");

    // Send the order data to your server
    axios
      .post(`${API_EndPoint}/order/placeorder`, {
        orderData,
      })
      .then((response) => {
        console.log("Order placed successfully!", response.data);
      })
      .then(() => {
        // Clear the local cart state
        setCart([]);
        setItemCounts({});
        console.log("Cart cleared successfully!");
        // Optionally, show a success message to the user
      })
      .catch((error) => {
        console.error("Error placing order or clearing cart!", error);
        // Optionally, show an error message to the user
      });
    axios.delete(`${API_EndPoint}/cart/clearcart`);
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
                        <p>{item.foodprice}</p>
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
              <form onSubmit={HandleOrder}>
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
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                    style={{ boxShadow: "none", fontVariant: "small-caps" }}
                  />
                  <label htmlFor="address">Address</label>
                  <h6 className="mt-3 mark">
                    Total: ₹{totalSum.toFixed(2)}
                  </h6>{" "}
                  {/* Display total sum */}
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
                                    gatewayMerchantId:
                                      "exampleGatewayMerchantId",
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
                        <button
                          type="submit"
                          className="btn btn-warning"
                          style={{ fontWeight: "500", border: "none" }}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
