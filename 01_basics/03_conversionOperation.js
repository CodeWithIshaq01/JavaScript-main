let score = 100
console.log(typeof score) // number
let valueInNumber = Number(score) // converting number to number
console.log(valueInNumber) // 100

// let score = "100bbb"

// console.log(typeof score) // string

// let valueInNumber = Number(score) // converting string to number
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // NaN (Not a Number) because "100bbb" cannot be converted to a valid number

// let  score = null 
// console.log(typeof score) // object
// let valueInNumber = Number(score)
// console.log(valueInNumber) // 0

// let score = undefined
// console.log(typeof score) // undefined
// let valueInNumber = Number(score)
// console.log(valueInNumber) // NaN

// let score = true
// console.log(typeof score) // boolean
// let valueInNumber = Number(score)
// console.log(valueInNumber) // 

// let isLoggedIn = false
// console.log(typeof isLoggedIn) // boolean
// let valueInNumber = Number(isLoggedIn)
// console.log(valueInNumber) // 0


// let isLoggedIn = true
// console.log(typeof isLoggedIn) // boolean
// let valueInNumber = Number(isLoggedIn)
// console.log(valueInNumber) // 1

// let someNumber = 123
// let stringNumber = String(someNumber) // converting number to string
// console.log(typeof stringNumber) // string
// console.log(stringNumber) // "123"  

// ************************************************************************
// 
//                            OPERATIONS

let value = 3
let negValue = -value // negating the value
console.log(negValue) // -3

console.log(3 + 2) // 5
console.log(3 - 2) // 1
console.log(3 * 2) // 6
console.log(3 / 2) // 1.5
console.log(3 % 2) // 1 (modulus operator gives the remainder of the division)
console.log(3 ** 2) // 9 (exponentiation operator raises the first operand to the power of the second operand)


let srt1 = "Hello"
let str2 = "World"
let str3 = srt1 + str2 // string concatenation
console.log(srt1 + " " + str2) // Hello World (string concatenation)
console.log(str3) // Hello World (string concatenation with space)

console.log("3" + 2) // 32 (string concatenation, number is converted to string)
console.log("3" - 2) // 1 (number subtraction, string is converted to number)
console.log("3" * 2) // 6 (number multiplication, string is converted to number)
console.log("3" / 2) // 1.5 (number division, string is converted to number)
console.log("3" % 2) // 1 (number modulus, string is converted to number)
console.log("3" ** 2) // 9 (number exponentiation, string is converted to number)


console.log(3 + "2") // 32 (string concatenation, number is converted to string)
console.log("1" + 1 + 1) // 111 (string concatenation, number is converted to string)
console.log(1 + 1 + "1") // 21 (number addition, then string concatenation)
console.log("1" - 1 + 1) // 1 (string is converted to number, then number addition)
console.log("1" - 1 + "1") // 01 (string is converted to number, then string concatenation)
console.log("1" - "1" + "1") // 01 (string is converted to number, then string concatenation)
console.log("1" - "1" + 1) // 1 (string is converted to number, then number addition)
console.log("1" - "1" + "1" + 1) // 011 (string is converted to number, then string concatenation, then number addition)
console.log("1" - "1" + 1 + "1") // 11 (string is converted to number, then number addition, then string concatenation)
console.log("1" - "1" + 1 + 1) // 2 (string is converted to number, then number addition)


prefix increment operator (++) increases the value of a variable by 1 before it is used in an 
expression, 
while the postfix increment operator (++)
 increases the value of a variable by 1 after it is used in an expression.

// --- Prefix Example ---
let a = 5;
let b = ++a; // 'a' becomes 6 FIRST, then 6 is assigned to 'b'

console.log(a); // Output: 6
console.log(b); // Output: 6


// --- Postfix Example ---
let x = 5;
let y = x++; // Current value 5 is assigned to 'y' FIRST, then 'x' becomes 6

console.log(x); // Output: 6
console.log(y); // Output: 5

diference between prefix and postfix increment operators is the order 
in which the increment operation is performed relative to the evaluation of the expression.


