//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

 https://262.ecma-international.org/5.1/#sec-11.4.3

 //array typeof operator returns "object" for arrays, but we can use Array.isArray() to check if a variable is an array.
 // console.log(typeof heros); // object

 // object typeof operator returns "object" for objects, but we can use Object.prototype.toString.call() to check if a variable is an object.
 // console.log(typeof myObj); // object

 // function typeof operator returns "function" for functions, but we can use Object.prototype.toString.call() to check if a variable is a function.
 // console.log(typeof myFunction); // function