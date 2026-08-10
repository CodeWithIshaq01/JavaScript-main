forEach() Loop
// Brief Description:
// A dedicated array method that executes a provided callback function once for every item in the array. It is perfect for applying a side effect to each item, but it will always run to completion—you cannot break out of it early.

Here is one of the simplest ways to understand the forEach loop.

The Code
JavaScript
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit) => {
  console.log("I ate an " + fruit);
});
// The Output
// I ate an Apple
// I ate an Banana
// I ate an Cherry

// Step-by-Step Explanation
// Think of forEach as a manager giving the exact same instruction to every person in a line.

// const fruits = [...]
// This is our line of items. We have an array containing three strings.

// .forEach(...)
// This is the manager. You attach it directly to the array. It tells JavaScript: "Go through this array one by one, from start to finish."

// (fruit) => { ... }
// This is the instruction for each item.

// The word fruit is just a temporary nickname we make up. As the loop runs, JavaScript automatically hands the current item to this nickname.

// On loop 1, fruit is "Apple".

// On loop 2, fruit is "Banana".

// On loop 3, fruit is "Cherry".

// console.log(...)
// This is the action we perform. We combine the text "I ate an " with whatever the current fruit is and print it to the screen.

// Because there are three items in the array, the function runs exactly three times and then finishes automatically


// Example 1: Using the Index
// It automatically passes the current item's index as the second argument to your function.

const tasks = ['Code', 'Test', 'Deploy'];

tasks.forEach((task, index) => {
  console.log(`Step ${index + 1}: ${task}`);
});
// Output:
// Step 1: Code
// Step 2: Test
// Step 3: Deploy


// Example 3: Interacting with an Array of Objects
// It cleanly handles executing logic on arrays filled with complex objects.


const users = [
  { name: "Sarah", active: true },
  { name: "Mike", active: false }
];

users.forEach((user) => {
  if (user.active) {
    console.log(`Sending email to ${user.name}`);
  }
});
// Output:
// Sending email to Sarah

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )