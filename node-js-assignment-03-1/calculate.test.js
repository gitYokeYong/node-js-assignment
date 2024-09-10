const mathOperations = require("./calculate");

//test for sum fucntion
test("adds 1+ 2 to equal 3", () => {
  expect(mathOperations.sum(1, 2)).toBe(3);
});

// Test for substract function
test("subtracts 5-3 to equal 2", () => {
  expect(mathOperations.subtract(5, 3)).toBe(2);
});

//Test for multiply function
test("multiples 2 * 3 to equal 6", () => {
  expect(mathOperations.multiply(2, 3)).toBe(6);
});

// A failing test case (incorrect result)
test("adds 1 + 2 to NOT equal 4", () => {
  expect(math0perations.sum(1, 2)).not.toBe(4);
});
