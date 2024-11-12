const express = require("express");
const app = express();

// API endpoint with query parameter handling
app.get("/api/greeting", (req, res) => {
  const name = (req.query.name || "Yokeyong").trim(); // Trim any whitespace or newlines
  console.log(`Received name: ${name}`); // Log the received name
  res.json({ message: `Hello, ${name}!` }); // Respond with the customized greeting
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
