import React, { useState } from "react";
import axios from "axios"; // Import Axios
import styles from "./AddTableForm.module.css"; // Import the CSS Module
import { API_EndPoint } from "../GeneralData";

const AddTableForm = () => {
  const [tableName, setTableName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTable = {
      tableName,
      isBooked,
      hotelName,
    };

    console.log(newTable);
    setTableName("");
    setHotelName("");
    setIsBooked(false);

    axios
      .post(`${API_EndPoint}/table/booktable`, newTable)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Table Name:</label>
        <input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          required
          className={styles.inputText}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Hotel Name:</label>
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          required
          className={styles.inputText}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={isBooked}
            onChange={(e) => setIsBooked(e.target.checked)}
            className={styles.checkbox}
          />
          Is Booked
        </label>
      </div>
      <button type="submit" className={styles.button}>
        Add Table
      </button>
    </form>
  );
};

export default AddTableForm;
