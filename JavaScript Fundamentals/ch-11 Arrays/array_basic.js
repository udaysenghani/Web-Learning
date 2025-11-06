/*
An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/


//syntax 
// const array_name = [item1, item2, ...];
//example
const cars = ["Saab", "Volvo", "BMW"];
//also

const car = [];
car[0]= "Saab";
car[1]= "Volvo";
car[2]= "BMW";

//Using the JavaScript Keyword new
//const cars = new Array("Saab", "Volvo", "BMW");

//Accessing Array Elements
console.log(cars[0]); // Saab
//Changing an Array Element
cars[0] = "Opel";

//Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.toString();
console.log(a); //Banana,Orange,Apple,Mango

// Access the Full Array
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
//Arrays are Objects
console.log(fruits.length); //4

console.log(fruits[0]); // Accessing the First Array Element Banana
console.log(fruits[fruits.length - 1]); // Accessing the Last Array Element Mango
