import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableBookingForm.css";

const TableBookingForm = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
  });

  useEffect(() => {
    axios
      .get("/api/tables")
      .then((response) => setTables(response.data))
      .catch((error) => console.error("Error fetching tables!", error));
  }, []);

  const handleTableSelect = (table) => {
    setSelectedTable(table._id);
    axios
      .get(`/api/tables/${table._id}/slots?date=${formData.date}`)
      .then((response) => setAvailableSlots(response.data))
      .catch((error) => console.error("Error fetching slots!", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date" && selectedTable) {
      axios
        .get(`/api/tables/${selectedTable}/slots?date=${value}`)
        .then((response) => setAvailableSlots(response.data))
        .catch((error) => console.error("Error fetching slots!", error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable || !selectedSlot) {
      alert("Please select a table and a time slot.");
      return;
    }

    const bookingData = {
      ...formData,
      table: selectedTable,
      timeSlot: selectedSlot,
    };

    axios
      .post("/api/bookings", bookingData)
      .then(() => {
        alert("Table booked successfully!");
        setFormData({ name: "", phone: "", people: "", date: "" });
        setSelectedTable(null);
        setSelectedSlot("");
        setAvailableSlots([]);
      })
      .catch((error) => console.error("Error booking table!", error));
  };

  return (
    <div className="container">
      <h2>Book a Table</h2>
      <div className="table-selection">
        {tables.map((table) => (
          <div
            key={table._id}
            className={`table ${
              table.isAvailable ? "available" : "unavailable"
            } ${selectedTable === table._id ? "selected" : ""}`}
            onClick={() => table.isAvailable && handleTableSelect(table)}
          >
            Table {table.number}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="people">Number of People</label>
          <input
            type="number"
            id="people"
            name="people"
            className="form-control"
            value={formData.people}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        {availableSlots.length > 0 && (
          <div className="form-group">
            <label htmlFor="timeSlot">Select a Time Slot</label>
            <select
              id="timeSlot"
              name="timeSlot"
              className="form-control"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a time slot
              </option>
              {availableSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Book Table
        </button>
      </form>
    </div>
  );
};

export default TableBookingForm;
