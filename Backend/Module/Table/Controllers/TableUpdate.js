const Table = require("../../../Model/Table.model");

// Route to update table booking status
module.exports = async (req, res) => {
  const { id, isBooked } = req.body;

  try {
    const updatedTable = await Table.findByIdAndUpdate(
      id,
      { IsBooked: isBooked },
      { new: true } // Return the updated document
    );
    res.json(updatedTable);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
