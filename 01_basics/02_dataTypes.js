"use strict"; // treats all js code as newer version of js, helps to avoid errors and bugs

// alert( 3 + 3) // we using node.js so alert will not work, it is used in browser environment

console.log(3 + 3) // this will work in node.js environment

console.log("Hello, World")      
     // code readability is important, so we should avoid writing code like this


// Data types in JavaScript
// 1. Primitive data types
// 2. Non-primitive data types

examples of primitive data types in JavaScript are:
1. String   // used to represent text eg "Hello, World"
2. Number   // used to represent numeric values eg 3, 3.14, -42
3. Boolean  // used to represent true or false values eg true, false
4. Null     // used to represent the intentional absence of any object value eg weather data is null, it means there is no data available
5. Undefined // used to represent a variable that has been declared but not assigned a value eg let x; console.log(x); // undefined
6. Symbol (ES6) // used to create unique identifiers eg const sym1 = Symbol('foo'); const sym2 = Symbol('foo'); console.log(sym1 === sym2); // false
7. BigInt (ES11)  // used to represent integers larger than 2^53 - 1 eg 9007199254740991n  


// examples of non-primitive data types in JavaScript are:
1. Array    // used to represent a collection of values eg const arr = [1, 2, 3];
2. Object   // used to represent a collection of key-value pairs eg const obj = { name: "John", age: 30 };
3. Function // used to represent a block of code that can be executed when called eg function greet() { console.log("Hello!"); }//