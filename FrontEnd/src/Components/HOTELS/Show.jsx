import React, { useEffect, useState } from "react";
import { API_EndPoint } from "../GeneralData";
import axios from "axios";
import usericon from "../../assets/usericon.svg";
import "../HOTELS/HotelStyles/Showreview.css";

const ShowReview = ({ name }) => {
  const [greview, setgreview] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/review/getreview`, { params: { name } })
      .then((res) => {
        setgreview(res.data.reviewlist.reverse());
      })
      .catch((e) => {
        console.log("Failed to get review list");
      });
  }, [name, greview]);

  return (
    <div>
      <div>
        <div
          className="shadow p-3 bg-white rounded mt-4"
          style={{
            maxHeight: "330px",
            overflowY: "auto",
          }}
        >
          {greview.map((gr, index) => {
            return (
              <div key={index} className="bg-white p-3 mt-2 rounded shadow">
                <div className="row">
                  <div className="col-1">
                    <img
                      src={usericon}
                      alt=""
                      style={{
                        width: "25px",
                        border: "2px solid black",
                        borderRadius: "50px",
                        padding: "2px",
                      }}
                    />
                  </div>
                  <div className="col mt-1" id="show-username">
                    <h6>{gr.Username}</h6>
                  </div>
                </div>

                <div>
                  {/* Render stars based on the rating */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${gr.Rating >= star ? "filled" : ""}`}
                      style={{ color: gr.Rating >= star ? "gold" : "gray" }} // Change color based on filled state
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p>{gr.Comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
