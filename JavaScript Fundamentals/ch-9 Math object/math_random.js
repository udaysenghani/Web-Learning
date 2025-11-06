// Returns a random number:
console.log(Math.random());

/*
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

Math.random() always returns a number lower than 1.
*/

//Math.random() used with Math.floor() can be used to return random integers.
let x= Math.floor(Math.random() * 10); //Return a random integer from 0 to 9 (both included)
console.log(x);

console.log(Math.floor(Math.random() * 11)); //Return a random integer from 0 to 10 (both included)

console.log(Math.floor(Math.random() * 100)); // Return a random integer from 0 to 99 (both included)
console.log(Math.floor(Math.random() * 101)); // Return a random integer from 0 to 100 (both included)

console.log(Math.floor(Math.random() * 10) + 1); // Return a random integer between 1 and 10 (both included)
console.log(Math.floor(Math.random() * 100) + 1); // Return a random integer between 1 and 100 (both included)