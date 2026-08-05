const score = 100; // 100 is a primitive value, not an object.
//  It does not have properties or methods. 
// However, JavaScript automatically wraps the primitive value in a 
// Number object when you try to access its properties or methods. This is called "boxing".
console.log(score);

const balance = new Number(100);    
console.log(balance); // [Number: 100] (new Number() constructor creates a 
// new Number object that wraps the primitive value 100. The resulting object has 
// properties and methods that can be used to manipulate the value.)

console.log (balance.toString().length); // 3 (toString() method converts a number to a
//  string and returns the string representation of the number. 
// The length property returns the number of characters in the string.)

console.log(balance.toFixed(2)); // 100.00 (toFixed() method formats a number using fixed-point notation.

const anotherBalance = 100.123456789;
console.log(anotherBalance.toPrecision(5)); // 100.12 (toPrecision() method formats a number to a specified length,
//  rounding if necessary. The resulting string will have the specified number of significant digits.)
// console.log(anotherBalance.toPrecision(2)); // 1.0e+2  because toPrecision() method formats a number to a specified length, rounding if necessary.


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (toLocaleString() method returns a string with a language-sensitive representation of the number. 
// The first parameter is the locale, which specifies the language and region to use for formatting. 
// In this case, 'en-IN' specifies English (India), which uses the Indian numbering system with commas as thousands separators.)    



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



                                     MATHS
console.log(Math.PI); // 3.141592653589793 (Math.PI property returns the value of pi, which is the ratio of the circumference of a circle to its diameter.)
console.log(Math.E); // 2.718281828459045 (Math.E property returns the value of e, which is the base of the natural logarithm.) 
console.log(Math.round(4.7)); // 5 (Math.round() method rounds a number to the nearest integer.
console.log(Math.round(4.4)); // 4 (Math.round() method rounds a number to the nearest integer.)
console.log(Math.floor(4.7)); // 4 (Math.floor() method rounds a number down to the nearest integer.)
console.log(Math.ceil(4.4)); // 5 (Math.ceil() method rounds a number up to the nearest integer.)
console.log(Math.min(4, 7, 1, 9, 2)); // 1 (Math.min() method returns the smallest of zero or more numbers.)
console.log(Math.max(4, 7, 1, 9, 2)); // 9 (Math.max() method returns the largest of zero or more numbers.)
console.log(Math.abs(-4)); // 4 (Math.abs() method returns the absolute value of a number.)
console.log(Math.sqrt(16)); // 4 (Math.sqrt() method returns the square root of a number.)
console.log(Math.pow(2, 3)); // 8 (Math.pow() method returns the base to the exponent power, that is, base^exponent.)

console.log(Math.random()); // 0.123456789 (Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive).)
const randomNumber = Math.floor(Math.random() * 10) + 1; // generates a random number between 1 and 10
console.log(randomNumber); // 7 (Math.floor() method rounds a number down to the nearest integer. 
// Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive).)   

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates a random number between 10 and 20