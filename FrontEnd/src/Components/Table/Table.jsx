import React, { useState, useEffect } from "react";
import "./TableSelection.css"; // Import the CSS for styling

const TableSelection = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // Use temporary data directly
    const mockTables = [
      { id: 1, name: "Table 1", isBooked: false },
      { id: 2, name: "Table 2", isBooked: false },
      { id: 3, name: "Table 3", isBooked: true },
      { id: 4, name: "Table 4", isBooked: false },
      { id: 5, name: "Table 5", isBooked: false },
      { id: 6, name: "Table 6", isBooked: true },
      { id: 7, name: "Table 7", isBooked: false },
      { id: 8, name: "Table 8", isBooked: false },
    ];
    setTables(mockTables);
  }, []);

  const handleBookTable = async (tableId, isBooked) => {
    // Toggle the booking status
    setTables(
      tables.map((table) =>
        table.id === tableId ? { ...table, isBooked: !isBooked } : table
      )
    );
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
                key={table.id}
                className={`table-item ${
                  table.isBooked ? "booked" : "available"
                }`}
              >
                <div className="table-info">
                  <h4>{table.name}</h4>
                  <p>{table.isBooked ? "Booked" : "Available"}</p>
                </div>
                <button
                  onClick={() => handleBookTable(table.id, table.isBooked)}
                  className={`book-table-btn ${
                    table.isBooked ? "btn-unbook" : "btn-book"
                  }`}
                >
                  {table.isBooked ? "Cancel Booking" : "Book Table"}
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
