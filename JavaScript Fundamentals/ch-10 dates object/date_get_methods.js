
//Date Get Methods
/*
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
const d = new Date();
const date =  new Date("2025-10-05");

console.log(d.getFullYear()); //2025
console.log(d.getMonth()); //10
console.log(d.getDay()); //4
console.log(d.getTime()); // 1762440752962
console.log(d.getHours()); //20
console.log(d.getMinutes()); //27
console.log(d.getSeconds()); //3
console.log(d.getMilliseconds()); //20
 

//example
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];
console.log(month);

//The Date.now() Method
let ms = Date.now(); //returns the number of milliseconds since January 1, 1970.
console.log(ms);
