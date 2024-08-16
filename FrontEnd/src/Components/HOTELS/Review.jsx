import { useState } from "react";
import React from "react";
import axios from "axios";
import { API_EndPoint } from "../GeneralData";

const Review = () => {
  let [review, setReview] = useState("");
  let [response, setResponse] = useState(null);
  let [showModal, setShowModal] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();

    let Comment = { review };

    axios
      .post(`${API_EndPoint}/comment/addcomment`, Comment)
      .then((res) => {
        setResponse(res.data);
        setReview("");
        if (res.data.status) {
          setShowModal(true);
        } else {
          alert("Failed to post comment!");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Failed to post comment!");
      });
  };

  return (
    <div>
      <h5 style={{ fontWeight: "700" }}>
        The Great Kabab Factory - Radisson Blu Reviews
      </h5>
      <div>
        <form className="form-floating" onSubmit={handleSubmit}>
          <textarea
            className="form-control"
            id="comment"
            name="text"
            placeholder="Comment goes here"
            value={review}
            required
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
          <label htmlFor="comment">Comments</label>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
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
              <div className="modal-body">Your comment has been posted!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
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
