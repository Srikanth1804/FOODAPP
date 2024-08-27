// Define Table schema and model
module.exports = (req, res) => {
  const tableSchema = new mongoose.Schema({
    name: String,
    isBooked: Boolean,
  });

  const Table = mongoose.model("Table", tableSchema);

  // Routes
  app.get("/api/tables", async (req, res) => {
    try {
      const tables = await Table.find();
      res.json(tables);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/book/:id", async (req, res) => {
    const tableId = req.params.id;
    const { booked } = req.body;

    try {
      const table = await Table.findByIdAndUpdate(
        tableId,
        { isBooked: booked },
        { new: true }
      );

      if (!table) {
        return res.status(404).json({ message: "Table not found" });
      }

      res.json({ message: "Booking status updated successfully", table });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
