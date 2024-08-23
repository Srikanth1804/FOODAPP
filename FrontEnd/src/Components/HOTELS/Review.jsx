import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelStyles/Review.css";
import { API_EndPoint } from "../GeneralData";

const Review = ({ name }) => {
  let [showModal, setShowModal] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [modalusername, setmodalusername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ReviewData = {
      username,
      rating,
      comment,
      hotelname: name,
    };

    console.log(ReviewData);
    console.log(modalusername);

    setUsername("");
    setComment("");
    setRating(0);
    axios
      .post(`${API_EndPoint}/review/shreview`, ReviewData)
      .then((res) => {
        setReviews(res.data);
        setmodalusername(username);
        setShowModal(true);
      })
      .catch((e) => {
        alert("Error To Post Review");
      });
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="rating-container">
          <span>Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "filled" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
          required
          style={{ fontVariant: "small-caps", outline: "none" }}
        />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          required
          style={{ fontVariant: "small-caps", outline: "none" }}
        />
        <button
          type="submit"
          style={{ fontVariant: "small-caps", border: "none" }}
        >
          Submit Review
        </button>
      </form>

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
                <h4 className="modal-title">Hey!{modalusername}</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">
                Thank you for your valuable comment!
              </div>
              {/* Show dynamic message */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => setShowModal(false)}
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

export default Review;
