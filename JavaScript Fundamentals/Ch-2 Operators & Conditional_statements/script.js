//comments

//single line comments
//console.log("hello world");

//multi-line comment
/*  console.log("hello world");
console.log("hello world");
console.log("hello world"); */

//operators : Used to perform some operation on data
//Arithmetic Operators +,-,/,* ,Modulus,Exponentiation,Increment,Decrement
let a=25;
let b = 36;
console.log(`a = ${a}, b = ${b}`);
console.log(`Addition (a + b): ${a + b}`); // Output: 61
console.log(`Subtraction (a - b): ${a - b}`); // Output: -11
console.log(`Division (a / b): ${a / b}`); // Output: 0.694...
console.log(`Multiplication (a * b): ${a * b}`); // Output: 900
console.log(`Modulus (a % b): ${a % b}`); // Output: 25 (Remainder of 25/36)
console.log(`Exponentiation (x **2, i.e., 4^2): ${a**2}`); // Output: 16
a++; //increment a 
console.log("incremented a ",a);
b--; // =decrement b
console.log("decremented b ",b);


//Comparison Operators: Compare two values and return a boolean (true/false).
// Returns true if the condition is met.

let x = 10;
let y = '10'; // Note: This is a string

console.log("\nComparison Operators:");

console.log(`x == y (Loose Equality): ${x == y}`); // Output: true (Compares only value, ignores type)
console.log(`x === y (Strict Equality): ${x === y}`); // Output: false (Compares value AND type)

console.log(`x != y (Loose Inequality): ${x != y}`); // Output: false
console.log(`x !== y (Strict Inequality): ${x !== y}`); // Output: true

console.log(`x > 5 (Greater than): ${x > 5}`); // Output: true
console.log(`x <= 10 (Less than or equal to): ${x <= 10}`); // Output: true


//Logical Operators: Combine multiple boolean expressions.

let cond1 = a > b; // 11 > 5 (true)
let cond2 = a === 11; // 11 === 11 (true)

console.log("\nLogical Operators:");

// Logical AND (&&): Returns true only if BOTH operands are true.
console.log(`AND (cond1 && cond2): ${cond1 && cond2}`); // Output: true

// Logical OR (||): Returns true if AT LEAST ONE operand is true.
console.log(`OR (cond1 || false): ${cond1 || false}`); // Output: true

// Logical NOT (!): Reverses the boolean value.
console.log(`NOT (!cond1): ${!cond1}`); // Output: false


// CONDITIONAL STATEMENTS

/*
 * Conditional statements are used to perform different actions based on different conditions.
 */

console.log("Conditional Statements ---");

let marks = 75;

// A. if statement: Executes a block of code if the condition is true.
if (marks > 90) {
    console.log("Grade: A+");
}

// B. if-else statement: Executes 'if' block if true, 'else' block if false.
if (marks >= 80) {
    console.log("Grade: A");
} else {
    console.log("Grade: B or lower"); // This will run since 75 is NOT >= 80
}

let trafficLight = "red";
// C. if-else if-else statement: Checks multiple conditions sequentially.
if (trafficLight === "green") {
    console.log("Go!");
} else if (trafficLight === "yellow") {
    console.log("Get ready to stop.");
} else if (trafficLight === "red") {
    console.log("Stop!"); // This block will run
} else {
    console.log("Traffic light is broken.");
}

// D. Ternary Operator (Shorthand if-else): condition ? true_expression : false_expression
let age_check = 18;
let status = (age_check >= 18) ? "Adult" : "Minor";
console.log(`Ternary Check (Age 18): ${status}`); // Output: Adult

let score = 95;
let passOrFail = (score >= 35) ? "PASS" : "FAIL";
console.log(`Ternary Check (Score 95): ${passOrFail}`); // Output: PASS