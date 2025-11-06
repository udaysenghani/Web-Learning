const d = new Date();
console.log(d); //2025-11-06T14:30:41.934Z

const day = new Date("2025-11-05"); 
console.log(day); //2025-11-05T00:00:00.000Z

//Creating Date Objects

/*
ew Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const dt = new Date(2018, 11, 24, 10, 33, 30, 0);

/*
JavaScript counts months from 0 to 11:

January = 0.

December = 11.
*/

//Date Formats
/*
Type	    Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/

//ISO Dates
const a = new Date("2015-03-25");

// ISO Dates (Year and Month)
const b = new Date("2015-03");

// ISO Dates (Only Year)
const c = new Date("2015");

// /ISO Dates (Date-Time)
const e = new Date("2015-03-25T12:00:00Z");

//Short Dates
const f = new Date("03/25/2015");

// Long Dates.
const g = new Date("Mar 25 2015");

//Commas are ignored. Names are case insensitive:
const h = new Date("JANUARY, 25, 2015");
