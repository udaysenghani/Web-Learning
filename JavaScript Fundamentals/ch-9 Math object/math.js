//The JavaScript Math object allows you to perform mathematical tasks.
/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

//Number to Integer
console.log(Math.round(4.6)); //5
console.log(Math.round(4.5)); //5
console.log(Math.round(4.4)); //4


//Math.ceil(x) returns the value of x rounded up to its nearest integer
console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.7)); //5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); //5
console.log(Math.ceil(-4.2)); //-4


//Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.9)); //4
console.log(Math.floor(4.7)); //4
console.log(Math.floor(4.4)); //4
console.log(Math.floor(4.2)); //4
console.log(Math.floor(-4.2)); //-5

//Math.sign()
/*
Math.sign(x) returns if x is negative, null or positive.

If x is positive it returns 1
If x is negative it returns -1
If x is zero, it returns 0
*/
console.log(Math.sign(-3)); //-1 negetive 
console.log(Math.sign(3)); //1 positive 
console.log(Math.sign(0)); //0 zero

//Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2,4)); //16


//Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(25)); //5

//Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-3.7)); //3.7

//trigo function
//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

console.log(Math.sin(90 * Math.PI / 180));     // returns 1 (the sine of 90 degrees)

//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

console.log(Math.cos(0 * Math.PI / 180)); // returns 1 (the cos of 0 degrees)


//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

console.log(Math.min(0, 150, 30, 20, -8, -200)); //-200
console.log(Math.max(0, 150, 30, 20, -8, -200)); //150

//Math.log(x) returns the natural logarithm of x.
console.log(Math.log(1)); // 0
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(3)); // 1.0986122886681096
console.log(Math.log(10)); // 2.302585092994046

//Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log2(7)); //2.807354922057604

//Math.log10(x) returns the base 10 logarithm of x
console.log(Math.log10(1000)); //3
