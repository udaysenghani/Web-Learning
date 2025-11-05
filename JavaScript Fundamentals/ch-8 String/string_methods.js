//String Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

//Extracting String Characters
let char = text.charAt(0);
let char1 = text.charCodeAt(0); //The method returns a UTF-16 code (an integer between 0 and 65535).
let code = text.codePointAt(0); //Get code point value at the first position in a string:

//Property Access [ ]
let char2 = text[0];
text[0] = "A";    // Gives no error, but does not work

//String concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); //Hello World


//Extracting String Parts

/*
There are 3 methods for extracting a part of a string:

1. slice(start, end)
2. substring(start, end)
*/

//1. slice(start, end)
let text = "Hello , Welcome to this campus!";//JavaScript counts positions from zero.
let part = text.slice(7, 13); //Welco
//negetive slicing
let part1 = text.slice(-12, -6); //this c

//2. substring(start, end)
//substr() is similar to slice().


//Converting to Upper and Lower Case
let name="hello I'm Uday";
console.log(name.toUpperCase()); //HELLO I'M UDAY
console.log(name.toLowerCase()); //hello i'm uday

//isWellFormed() : 
// The isWellFormed() method returns true if a string is well formed. Otherwise it returns false
let text = "Hello world!";
let result = text.isWellFormed();//true

let text1e = "Hello World \uD800";
let result1 = text.isWellFormed(); //false

//convert well formate
let text2e = "Hello World \uD800";
let result2 = text2.toWellFormed(); //Hello World

//String trim() : The trim() method removes whitespace from both sides of a string
let texte = "      Hello World!      ";
let textr = text1.trim(); // "Hello World!"

// trimStart() : removes whitespace only from the start of a string.
let textx = "     Hello World!     ";
let texty = text1.trimStart(); // "Hello World!     "

//trimEnd() : removes whitespace only from the end of a string.
let textb = "     Hello World!     ";
let textc = text1.trimEnd(); // "     Hello World!"

// String repeat():
/*
The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.
*/
let textd = "Hello world!";
let resulta = text.repeat(2); //Hello world!Hello world!

//replace() : replaces a specified value with another value in a string
/*
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match
*/
let textf = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "Google"); //Please visit Google!

textf = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "Google"); //Please visit Google and Microsoft!

//ReplaceAll() : 
textf = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "Google"); //Please visit Google and Google!


//split()
text="hello , World!";
console.log(text.split(","));    // Split on , output: [ 'hello', ' World!' ]
