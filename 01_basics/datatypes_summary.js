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

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                        //    STACK AND HEAP MEMORY IN JAVASCRIPT
// 1. Stack memory (primitive data types) is used to store primitive data types
//  (string, number, boolean, null, undefined, symbol, bigint) and 
//  function references. It is a LIFO (Last In First Out) data structure. 
//  The stack memory is faster than heap memory because it is managed by the JavaScript engine and has a fixed size.

//  let myYoutubename = "hiteshchoudharydotcom" // stored in stack memory
//  let anotherName = myYoutubename // stored in stack memory
//  anotherName = "chaiau" // stored in stack memory

 console.log(myYoutubename); // hiteshchoudharydotcom
 console.log(anotherName); // chaiaurcode

 // because primitive data types are stored in stack memory, when we assign a primitive data type 
 // to another variable, a copy of the value is created and stored in the new variable. Therefore, changing 
 // the value of the new variable does not affect the original variable.

 // Heap memory (non-primitive data types) is used to store non-primitive data types
//  (array, object, function) and is managed by the JavaScript engine's garbage collector. 
//  The heap memory is slower than stack memory because it is managed by the JavaScript engine and has a dynamic size.
// example of heap memory
 
    let userOne = {
        email: "userone@example.com",
        upi: "userone@ybl"
    };

    let userTwo = userOne; // userTwo is a reference to the same object in heap memory as userOne

    userTwo.email = "usertwo@example.com";  

    console.log(userOne.email); // usertwo@example.com
    console.log(userTwo.email); // usertwo@example.com  

    //here, userOne and userTwo are both references to the same object in heap memory. 
    //Therefore, when we change the email property of userTwo, it also changes the email property of userOne


