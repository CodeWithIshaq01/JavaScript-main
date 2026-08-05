// comparison operators 

console.log(3 > 2) // true (greater than operator)
console.log(3 < 2) // false (less than operator)
console.log(3 >= 2) // true (greater than or equal to operator) 
console.log(3 <= 2) // false (less than or equal to operator)
console.log(3 == 2) // false (equality operator)
console.log(3 != 2) // true (inequality operator)
console.log(3 === 2) // false (strict equality operator, checks both value and type)
console.log(3 !== 2) // true (strict inequality operator, checks both value and type)

console.log(3 == "3") // true (loose equality operator, performs type coercion)
console.log(3 === "3") // false (strict equality operator, no type coercion)    
console.log(3 != "3") // false (loose inequality operator, performs type coercion)
console.log(3 !== "3") // true (strict inequality operator, no type coercion)


console.log(3 > 2 && 2 > 1) // true (logical AND operator, both conditions must be true)
console.log(3 > 2 || 2 < 1) // true (logical OR operator, at least one condition must be true)
console.log(!(3 > 2)) // false (logical NOT operator, negates the condition) 
console.log(!(3 < 2)) // true (logical NOT operator, negates the condition)
console.log(!(3 > 2 && 2 > 1)) // false (negates the result of the logical AND operation)
console.log(!(3 < 2 && 2 < 1)) // true (negates the result of the logical AND operation)
console.log(3 > 2 || 2 < 1) && !(3 < 2) // true (combination of logical AND, OR, and NOT operators)



// most cases we aviod comparing null and undefined with numbers, but here are some examples:
console.log(null < 0) // false (null is converted to 0 when compared to a number)
console.log(undefined < 0) // false (undefined is converted to NaN when compared to a number)
console.log(null > 0) // false (null is converted to 0 when compared to a number)
console.log(undefined > 0) // false (undefined is converted to NaN when compared to a number)
console.log(null == 0) // false (null is only equal to undefined, not to any number)
console.log(undefined == 0) // false (undefined is only equal to null, not to any number)
console.log(null == undefined) // true (null and undefined are considered equal in loose equality)
console.log(null === undefined) // false (strict equality checks both value and type, and they are different types)
console.log(null != undefined) // false (loose inequality operator, null and undefined are considered equal)
console.log(null !== undefined) // true (strict inequality operator, checks both value and type, and they are different types)  
console.log(null == null) // true (null is equal to itself)
console.log(undefined == undefined) // true (undefined is equal to itself)  
console.log(null == 0) // false (null is not equal to 0)
console.log(undefined == 0) // false (undefined is not equal to 0)
console.log(null > undefined) // false (null is not greater than undefined)

// types of  operators in javascript
// 1. Arithmetic operators (+, -, *, /, %, **)
// 2. Assignment operators (=, +=, -=, *=, /=, %=, **=)
// 3. Comparison operators (==, !=, ===, !==, >, <, >=, <=)
// 4. Logical operators (&&, ||, !) 
// 5. Bitwise operators (&, |, ^, ~, <<, >>, >>>)
// 6. String operators (+, +=)
// 7. Conditional (ternary) operator (condition ? expr1 : expr2)
//8. Type operators (typeof, instanceof)
//9. Unary operators (+, -, ++, --, delete, void, typeof)
//10. Relational operators (in, instanceof)
// 11. Spread operator (...)

// ==========================================
// OPERATORS IN JAVASCRIPT (operator.js)
// ==========================================

// 1. ARITHMETIC OPERATORS
// Used for basic mathematical calculations.
let x = 10;
let y = 3;

console.log(x + y);  // Addition: 13
console.log(x - y);  // Subtraction: 7
console.log(x * y);  // Multiplication: 30
console.log(x / y);  // Division: 3.3333...
console.log(x % y);  // Modulus (Remainder): 1
console.log(x ** y); // Exponentiation (10^3): 1000


// 2. ASSIGNMENT OPERATORS
// Used to assign values to variables.
let a = 5;

a += 3;  // Same as a = a + 3 (8)
a -= 2;  // Same as a = a - 2 (6)
a *= 4;  // Same as a = a * 4 (24)
a /= 3;  // Same as a = a / 3 (8)
a %= 5;  // Same as a = a % 5 (3)
a **= 2; // Same as a = a ** 2 (9)


// 3. COMPARISON OPERATORS
// Used to compare two values and return a boolean (true/false).
let num = 5;
let strNum = "5";

console.log(num == strNum);  // Loose Equality (checks value only): true
console.log(num === strNum); // Strict Equality (checks value & type): false
console.log(num != strNum);  // Loose Inequality: false
console.log(num !== strNum); // Strict Inequality: true
console.log(num > 3);        // Greater than: true
console.log(num < 10);       // Less than: true
console.log(num >= 5);       // Greater than or equal to: true
console.log(num <= 4);       // Less than or equal to: false


// 4. LOGICAL OPERATORS
// Used to combine or invert boolean logic.
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // AND (both must be true): false
console.log(isAdult || hasID); // OR (at least one must be true): true
console.log(!isAdult);         // NOT (inverts boolean): false


// 5. BITWISE OPERATORS
// Operates on numbers at the 32-bit binary level.
let b1 = 5; // Binary: 0101
let b2 = 3; // Binary: 0011

console.log(b1 & b2);   // AND: 1  (0001)
console.log(b1 | b2);   // OR:  7  (0111)
console.log(b1 ^ b2);   // XOR: 6  (0110)
console.log(~b1);       // NOT: -6
console.log(b1 << 1);   // Left Shift (5 * 2): 10
console.log(b1 >> 1);   // Right Shift (5 / 2): 2
console.log(b1 >>> 1);  // Zero-fill Right Shift: 2


// 6. STRING OPERATORS
// Used to concatenate (join) strings together.
let firstName = "Jane";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // Output: "Jane Doe"
fullName += " Smith";                      // Output: "Jane Doe Smith"


// 7. CONDITIONAL (TERNARY) OPERATOR
// A shorthand for an if-else statement: condition ? exprIfTrue : exprIfFalse
let age = 20;
let canVote = age >= 18 ? "Yes, eligible" : "No, too young";
console.log(canVote); // "Yes, eligible"


// 8. TYPE OPERATORS
// Used to evaluate data types or object classes.
console.log(typeof "Hello");     // Returns string type: "string"
console.log(typeof 42);          // Returns number type: "number"
console.log([] instanceof Array); // Checks object prototype: true


// 9. UNARY OPERATORS
// Operators that act on a single operand.
let val = 5;
let strVal = "10";

console.log(+strVal); // Unary Plus (converts string to number): 10
console.log(-val);    // Unary Negation: -5
console.log(++val);   // Increment (5 becomes 6): 6
console.log(--val);   // Decrement (6 becomes 5): 5

let person = { name: "Alex", age: 25 };
delete person.age;    // Deletes property from object
console.log(person);  // Output: { name: "Alex" }

void 0;               // Evaluates expression and returns undefined


// 10. RELATIONAL OPERATORS
// Checks relationships between properties or object instances.
let user = { name: "Sam", role: "Admin" };

console.log("name" in user);      // Checks if property exists in object: true
console.log("age" in user);       // false
console.log(user instanceof Object); // Checks prototype chain: true


// 11. SPREAD OPERATOR (...)
// Expands arrays, strings, or objects into individual elements/properties.
let numbers = [1, 2, 3];
let combinedNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

let userDetails = { name: "Taylor", age: 30 };
let updatedUser = { ...userDetails, city: "Seattle" };
// Output: { name: "Taylor", age: 30, city: "Seattle" }     
// The spread operator is also used to copy arrays or objects without mutating the original.    
