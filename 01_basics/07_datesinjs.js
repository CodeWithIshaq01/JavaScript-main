// Dates
let myDate = new Date();
console.log(myDate); // Mon Jun 12 2023 10:30:45 GMT+0530 (India Standard Time)
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getMonth()); // 5 (June, as months are zero-indexed)
console.log(myDate.getDate()); // 12
console.log(myDate.getDay()); // 1 (Monday, as days are zero-indexed)
console.log(myDate.getHours()); // 10
console.log(myDate.getMinutes()); // 30
console.log(myDate.getSeconds()); // 45
console.log(myDate.getMilliseconds()); // 123
console.log(myDate.getTime()); // 1686562245123 (milliseconds since Jan 1, 1970)
console.log(myDate.toString()); // Mon Jun 12 2023 10:30:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Jun 12 2023
console.log(myDate.toTimeString()); // 10:30:45 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); // 12/6/2023 (format may vary based on locale)

console.log(typeof myDate); // object

let myCreatedDate = new Date( 2026, 0, 11)
console.log(myCreatedDate); // Thu Jan 11 2026 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date( 2026, 02, 11, 13, 25, 11)
console.log(myCreatedDate2); // Wed Mar 11 2026 13:25:11 GMT+0530 (India Standard Time)

let myCreatedDate3 = new Date( 01-11-2026)
console.log(myCreatedDate3); // Invalid Date (because 01-11-2026 is treated as a mathematical expression,
// resulting in a negative number, which is not a valid date)
let myCreatedDate2 = new Date("01-11-2025")
console.log(myCreatedDate2); // Wed Mar 11 2026 13:25

let myCreatedDate4 = Date.now()
console.log(myCreatedDate4); // here value will be in m.s 1 jan 1970 to now like 16778889999886

console.log(myCreatedDate2.getTime()); // value in m.s like 158898908656899 so we compare these value time difference
 // how miliseconds into seconds, asked in interviews
  console.log(Date.now/1000); // 15667778886.556 here values in decimals to aviod we use
  console.log(Math.floor(Date.now()/1000)) ; // 1154445445 without decimals

// to convert milisecond in days
console.log(Math.floor(Date.now()/(1000*60*60*24*30.4375))); // number of months

// but in month conversion we *30.4375

// booking in hotel from 1 jan 2020 to 1 jan 2026

// Creates a Date object representing the starting date (January 1, 2020)
const startDate = new Date('2020-01-01');

// Creates a Date object representing the ending date (January 1, 2026)
const endDate = new Date('2026-01-01');

// Subtracts the start date from the end date (resulting in the difference in milliseconds) 
// and uses Math.abs() to ensure the result is always a positive number
const diffTime = Math.abs(endDate - startDate);

// Divides the total milliseconds (diffTime) by the number of milliseconds in a single day (1000ms * 60s * 60m * 24h)
// and uses Math.ceil() to round up to the nearest whole day
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// Extracts the 4-digit year from both dates and subtracts them to find the difference in years
const years = endDate.getFullYear() - startDate.getFullYear();

// Converts the year difference into months (years * 12) and adds the difference between 
// the specific month indexes (0-11) of the two dates to get the total exact calendar months
const months = years * 12 + (endDate.getMonth() - startDate.getMonth());

// Prints the calculated total number of days to the console
console.log(`Total Days: ${diffDays}`); //2192

// Prints the calculated total number of months to the console
console.log(`Total Months: ${months}`); //72

// Prints the calculated total number of years to the console
console.log(`Total Years: ${years}`); //6 year

