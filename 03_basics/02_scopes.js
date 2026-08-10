
// ==========================================
// 1. GLOBAL SCOPE
// ==========================================
// These are declared in the open, just like in your file.
let a = 10;
const b = 20;
var c = 30;

console.log("--- Before Block ---");
console.log(a); // Outputs: 10
console.log(b); // Outputs: 20
console.log(c); // Outputs: 30

// ==========================================
// 2. BLOCK SCOPE
// ==========================================
if (true) {
    // We are now inside a block (between the { curly braces })
    let a = 100;   // Creates a NEW temporary 'a' just for this block
    const b = 200; // Creates a NEW temporary 'b' just for this block
    var c = 300;   // DANGER: Overwrites the global 'c' entirely!

    console.log("\n--- Inside the Block ---");
    console.log(a); // Outputs: 100 (using the block's let)
    console.log(b); // Outputs: 200 (using the block's const)
    console.log(c); // Outputs: 300 (using the overwritten var)
}

// ==========================================
// 3. BACK TO GLOBAL SCOPE
// ==========================================
console.log("\n--- After Block ---");
console.log(a); // Outputs: 10  (Safe! The original 'let' was untouched)
console.log(b); // Outputs: 20  (Safe! The original 'const' was untouched)
console.log(c); // Outputs: 300 (The problem with var: Our original 30 was destroyed!)


// GLOBAL SCOPE   (var)
 // here is the problem of var is var global scope = a global scope is variable outside of any function or curly braces{}
 // Rule: can be accessed and modified from anywhere in javascript file  if this is packed in function {} 
 // this will also leakes its value

// BLOCK SCOPE  (let, const)
 // where const let are Block scope = a chunk of code wrapped in curly braces {} this is most commonly
 //  seen in if statements for loops and while loops
 // Rule: if we declear a variable using , const let inside a block which is {} it is 
//  trapped inside those curly braces. it can't be acessed from outsides 
 
 


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  // this will be exicuted coz outer varible can be extracted  
    }
    // console.log(website); this will not coz inner varible can't be extracted outside function

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); histesh youtube
    }
    // console.log(website); error website is not defined
    // the website variable was decleared using const inside the inner if block
    //because const respects block scope, so it has no idea of what website is
}

// console.log(username); error same here


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1 //   this will be
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


// ==========================================
// 1. THE FIRST FUNCTION: addone (Function Declaration)
// ==========================================

// WHAT IT IS: 
// You defined this using the standard function keyword (function addone(num)...). 
// This is called a function declaration.

// WHY IT WORKS: 
// Before JavaScript runs your code line-by-line, it scans the file and moves 
// all function declarations to the very top of memory (this is "hoisting"). 
// Because JavaScript already loaded the entire 'addone' function into memory 
// before it even started executing, it has no problem running console.log 
// on line 99, even though the function is written below it.

console.log(addone(5)); // WORKS: JavaScript already knows what 'addone' is.

function addone(num) {
    return num + 1; 
}

// ==========================================
// 2. THE SECOND FUNCTION: addTwo (Function Expression)
// ==========================================

// WHAT IT IS: 
// You declared a variable using const and assigned a function to it 
// (const addTwo = function(num)...). This is called a function expression.

// WHY IT FAILS: 
// Variables created with const (or let) do not work the same way. While 
// JavaScript knows the variable 'addTwo' exists before it runs the code, 
// it does not initialize it or assign the function to it until it reaches line 108.

// THE TEMPORAL DEAD ZONE: 
// Because you used const, JavaScript places 'addTwo' in a "waiting area" 
// called the Temporal Dead Zone (TDZ). You are strictly forbidden from accessing 
// or calling this variable before the code reaches the exact line where it is defined.

// THE RESULT: 
// When line 107 tries to run addTwo(5), JavaScript throws a ReferenceError 
// because 'addTwo' hasn't been initialized yet.

// addTwo(5); // ERROR: Throws a ReferenceError if you try to run this here.

const addTwo = function(num) {
    return num + 2;
}

// ==========================================
// 3. THE FIX
// ==========================================

// To fix this, you simply need to call the function AFTER you define it:

console.log(addTwo(5)); // WORKS: 'addTwo' has now been initialized and assigned.