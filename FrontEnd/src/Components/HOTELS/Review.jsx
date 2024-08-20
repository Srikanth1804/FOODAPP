import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HotelStyles/Review.css";
import { API_EndPoint } from "../GeneralData";

const Review = ({ name }) => {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ReviewData = {
      username,
      rating,
      comment,
      hotelname: name,
    };

    setUsername("");
    setComment("");
    setRating(0);
    axios
      .post(`${API_EndPoint}/review/shreview`, ReviewData)
      .then((res) => {
        setReviews(res.data);
        alert(res.data.msg);
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
    </div>
  );
};

export default Review;
