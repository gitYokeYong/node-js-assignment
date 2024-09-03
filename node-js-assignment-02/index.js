const fs = require("fs");
const path = require("path");

// Read the JSON file
const data = fs.readFileSync(path.join(__dirname, "students.json"));
let students = JSON.parse(data);

// Modify the JSON data
students.forEach((student) => {
  if (student.firstName === "Bailey" && student.lastName === "Doe") {
    student.age = 23;
  }
});

// Export the modified students array
module.exports = students;

// Display the results
students.forEach((student) => {
  console.log(`${student.firstName} ${student.lastName}:`);
  console.log("Has age:", student.hasOwnProperty("age"));
});

fs.writeFileSync(
  path.join(__dirname, "students.json"),
  JSON.stringify(students, null, 2)
);

// Exit Node.js
process.exit();
