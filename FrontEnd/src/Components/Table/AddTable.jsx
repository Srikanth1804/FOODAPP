import React, { useState } from "react";
import axios from "axios"; // Import Axios
import styles from "./AddTableForm.module.css"; // Import the CSS Module
import { API_EndPoint } from "../GeneralData";

const AddTableForm = () => {
  const [tableName, setTableName] = useState("");
  const [hotelName, setHotelName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTable = {
      tableName,
      hotelName,
    };

    console.log(newTable);
    setTableName("");
    setHotelName("");

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
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      style={{ fontVariant: "small-caps" }}
    >
      <div className={styles.formGroup}>
        <label className={styles.label}>Table Name:</label>
        <input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          required
          className={styles.inputText}
          style={{ fontVariant: "small-caps" }}
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
          style={{ fontVariant: "small-caps" }}
        />
      </div>
      <button
        type="submit"
        className={styles.button}
        style={{ fontVariant: "small-caps" }}
      >
        Add Table
      </button>
    </form>
  );
};

export default AddTableForm;
