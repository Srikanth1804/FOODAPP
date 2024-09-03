import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";

import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  let [Response, setResponse] = useState();
  let [showModal, setShowModal] = useState(false);

  let [name, setname] = useState();
  let [mail, setmail] = useState();
  let [message, setmessage] = useState();

  let handlesubmit = (e) => {
    e.preventDefault();

    let ContactData = {
      name,
      mail,
      message,
    };
    console.log(ContactData);

    setname("");
    setmail("");
    setmessage("");

    axios
      .post(`${API_EndPoint}/contact/addcontact`, ContactData)
      .then((res) => {
        setResponse(res.data.info);
        console.log(Response);
        if (res.data.status) {
          setShowModal(true);
        } else {
          alert("Failed to send ContactData!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div
      className="container my-5"
      style={{ fontVariant: "small-caps", fontWeight: "500" }}
    >
      <h1 className="text-center mb-5" style={{ fontWeight: "800" }}>
        CONTACT US
      </h1>
      <div className="row">
        <div className="col-md-6 mt-3">
          <div className="card p-4">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ fontWeight: "700" }}>
                Get in Touch
              </h3>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                <p className="mb-0">+1 (123) 456-7890</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <p className="mb-0">foodyhub5@gmail.com</p>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
                <p className="mb-0">123 Main Street, Anytown USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card p-4 mt-3">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ fontWeight: "700" }}>
                Send Us a Message
              </h3>
              <form onSubmit={handlesubmit}>
                <div>
                  <div className="form-floating mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="UN"
                      placeholder="Enter Name"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                      value={name}
                      style={{ boxShadow: "none", fontVariant: "small-caps" }}
                    />
                    <label htmlFor="UN">Enter Username</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      required
                      autoComplete="off"
                      onChange={(e) => {
                        setmail(e.target.value);
                      }}
                      value={mail}
                      style={{ boxShadow: "none", fontVariant: "small-caps" }}
                    />
                    <label htmlFor="email">Enter Email</label>
                  </div>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="comment"
                    name="text"
                    placeholder="Comment goes here"
                    required
                    defaultValue={""}
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                    value={message}
                    style={{ boxShadow: "none", fontVariant: "small-caps" }}
                  />
                  <label htmlFor="comment">Message</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  style={{
                    border: "none",
                    fontWeight: "500",
                    fontVariant: "small-caps",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          id="myModal"
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Thank You!</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">Your Contact Details Added!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                  style={{ fontWeight: "500", fontVariant: "small-caps" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
