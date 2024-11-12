require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
app.use(express.json());
app.use("/api", expenseRoutes);

// Connect to MongoDB using MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
