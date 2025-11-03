//string-conversion

let value = true;//boolean
value = String(value); // now value is a string "true"
console.log(typeof(value));

//numeric-conversion
let phone="1234567890";
num = Number(phone);
console.log(typeof(num));

let age = Number("this is apple");
console.log(age)//NaN

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

//boolean-conversion

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)