const express = require("express");
const app = express();

//Listen on port 3000 here
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/first Server", (req, res) => {
  res.send("Hi there! This is my first route built using Express framework");
});

app.get("/firstUser/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Hi there, your user ID is ${userId}`);
});

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});
