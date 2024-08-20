import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  let [name, setname] = useState();
  let [mail, setmail] = useState();
  let [message, setmesssage] = useState();

  let handlesubmit = (e) => {
    e.preventDefault();

    let ContactData = {
      name,
      mail,
      message,
    };
    console.log(ContactData);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <h3 className="card-title mb-4">Get in Touch</h3>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                <p className="mb-0">+1 (123) 456-7890</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <p className="mb-0">info@foodhub.com</p>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
                <p className="mb-0">123 Main Street, Anytown USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4">
            <div className="card-body">
              <h3 className="card-title mb-4">Send Us a Message</h3>
              <form onSubmit={handlesubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => {
                      setmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                    required
                    onChange={(e) => {
                      setmesssage(e.target.value);
                    }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
