import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TableSelection.css"; // Import the CSS for styling
import { API_EndPoint } from "../GeneralData";

const TableSelection = ({ name }) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_EndPoint}/table/showtable`, { params: { name } })
      .then((res) => {
        setTables(res.data.info);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [name]);

  const handleBookTable = async (tableId, isBooked) => {
    try {
      // Send a request to the backend to update the table booking status
      await axios.put(`${API_EndPoint}/table/update`, {
        id: tableId,
        isBooked: !isBooked,
      });

      // Update the state locally
      setTables(
        tables.map((table) =>
          table._id === tableId ? { ...table, IsBooked: !isBooked } : table
        )
      );
    } catch (error) {
      console.error("Error updating table booking:", error);
    }
  };

  // Function to create rows for the matrix format
  const createTableMatrix = (tables, columns) => {
    let rows = [];
    for (let i = 0; i < tables.length; i += columns) {
      rows.push(tables.slice(i, i + columns));
    }
    return rows;
  };

  const matrix = createTableMatrix(tables, 4); // Adjust the number of columns as needed

  return (
    <div className="table-selection">
      <h2>Select Your Table</h2>
      <div className="table-matrix">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {row.map((table) => (
              <div
                key={table._id}
                className={`table-item ${
                  table.IsBooked ? "booked" : "available"
                }`}
              >
                <div className="table-info">
                  <h4>{table.Tablename}</h4>
                  <p>{table.IsBooked ? "Booked" : "Available"}</p>
                </div>
                <button
                  onClick={() => handleBookTable(table._id, table.IsBooked)}
                  className={`book-table-btn ${
                    table.IsBooked ? "btn-unbook" : "btn-book"
                  }`}
                >
                  {table.IsBooked ? "Cancel Booking" : "Book Table"}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSelection;
