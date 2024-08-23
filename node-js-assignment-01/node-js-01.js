console.log("New learning Node JS class");

/* 'Simple mathematics program in node.js */
console.log("Assignment1: Sum of numbers in Node.js");

//Fetch these arguments passed in the CLI
const args = process.argv.slice(2);
// 'process.argv' includes the path to node and the path to the file, so we slice the first two elements.

//store them in variables
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

//Add the variables
const sum = num1 + num2;

//Print the result
console.log("Sum:", sum);
