import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableSelection.css";
import { API_EndPoint } from "../GeneralData";

const TableSelection = ({ name }) => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [bookerName, setBookerName] = useState("");
  const [email, setEmail] = useState("");
  const [numOfSeats, setNumOfSeats] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/table/showtable`, { params: { name } })
      .then((res) => {
        setTables(res.data.info);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [name]);

  const handleBookTable = async () => {
    try {
      await axios.put(`${API_EndPoint}/table/update`, {
        id: selectedTable._id,
        isBooked: true,
        bookerName,
        email,
        numOfSeats,
      });

      setTables(
        tables.map((table) =>
          table._id === selectedTable._id
            ? {
                ...table,
                IsBooked: true,
                BookerName: bookerName,
                Email: email,
                NumOfSeats: numOfSeats,
              }
            : table
        )
      );
      setSelectedTable(null);
      setBookerName("");
      setEmail("");
      setNumOfSeats("");
    } catch (error) {
      console.error("Error updating table booking:", error);
    }
  };

  const createTableMatrix = (tables, columns) => {
    if (!tables || tables.length === 0) {
      return [];
    }

    let rows = [];
    for (let i = 0; i < tables.length; i += columns) {
      rows.push(tables.slice(i, i + columns));
    }
    return rows;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const matrix = createTableMatrix(tables, 4); // Adjust the number of columns as needed

  return (
    <div className="table-selection">
      <div className="table-matrix">
        <h2>Select Your Table</h2>
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {row.map((table) => (
              <div
                key={table._id}
                className={`table-item ${
                  table.IsBooked ? "booked disabled" : "available"
                }`}
              >
                <div className="table-info">
                  <h4>{table.Tablename}</h4>
                  <p>{table.IsBooked ? "Booked" : "Available"}</p>
                </div>
                {!table.IsBooked && (
                  <button
                    onClick={() => setSelectedTable(table)}
                    className="book-table-btn btn-book"
                  >
                    Book Table
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedTable && (
        <div className="booking-form">
          <h3>Book Table: {selectedTable.Tablename}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleBookTable();
            }}
          >
            <div className="form-group">
              <label>Booker Name:</label>
              <input
                type="text"
                value={bookerName}
                onChange={(e) => setBookerName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Seats:</label>
              <input
                type="number"
                value={numOfSeats}
                onChange={(e) => setNumOfSeats(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-booking-btn">
              Confirm Booking
            </button>
            <button
              type="button"
              onClick={() => setSelectedTable(null)}
              className="cancel-booking-btn"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TableSelection;
