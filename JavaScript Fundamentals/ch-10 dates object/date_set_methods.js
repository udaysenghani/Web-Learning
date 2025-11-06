/*
Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (yyyy)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/
const d = new Date("January 01, 2025");
d.setFullYear(2020); 
d.setFullYear(2020, 11, 3);
console.log(d); //2020-12-02T18:30:00.000Z

d.setDate(15); //setDate() method sets the day of a date object (1-31):
d.setDate(d.getDate() + 50); //used to add days to a date
d.setHours(22); //sets the hours of a date object (0-23)
d.setHours(22, 10, 20); //set minutes and seconds.
d.setMinutes(30); //sets the minutes of a date object (0-59):
d.setSeconds(30); // sets the seconds of a date object (0-59):


//Compare Dates
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

console.log(text); //Today is before January 14, 2100.
