// routes/expenseRoutes.js
const express = require("express");
const {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/expenses", createExpense); // Create
router.get("/expenses", getExpenses); // Read
router.put("/expenses/:id", updateExpense); // Update
router.delete("/expenses/:id", deleteExpense); // Delete

module.exports = router;
