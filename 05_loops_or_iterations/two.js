// // The while Loop
// A while loop is the best choice when you do not know how many times the loop will need to run. 
// It simply relies on a condition and will keep repeating until that condition becomes false.

// Best Use Case: Waiting for a specific event to happen, reading a file until it ends, or
//  performing a calculation until a threshold is reached.

let num = 2;

while (num <= 6) {
  console.log(num);
  num += 2; // Adds 2 to num each time
}

// Key Rules to Remember:
// Initialize a variable before the loop starts (e.g., let count = 1;).

// Set a condition inside while(...) that evaluates to true or false.

// Update the variable inside the loop (count++, timer--, num += 2) so the loop eventually ends and doesn't run infinitely

let count = 1;

while (count <= 3) {
  console.log(count);
  count++; // Increases count by 1 each time
}

Output: 1 2 3


// 2. Countdown
// Counts down from 3 to 1 and prints a final message.

let timer = 3;

while (timer > 0) {
  console.log(timer);
  timer--; // Decreases timer by 1 each time
}

console.log("Go!");

// output 321 go 




let i = 1
while (i <= 10) {
    console.log(i)
    i++
    // 12345678910
}



let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
// ===========================DO while LOOP===================================

// The do...while loop is a variation of the while loop. The major difference is that a do...while loop will
//  always execute its code block at least once before it even checks the condition to see if it should run again.

// Key Rules to Remember:
// Execute First, Ask Later: The code inside the do { ... } block is guaranteed to run one time, regardless
//  of whether the condition is true or false.

// Condition at the End: The while (condition) check is placed at the very bottom of the loop.

// Remember the Update: Just like a standard while loop, you must include a way to update your
//  variable (like count++) inside the loop, or it will run infinitely.

// Don't Forget the Semicolon: Unlike a regular while loop, the do...while loop ends with a semicolon ; after the condition.

let count = 1;

do {
  console.log(count);
  count++; // Update the variable
} while (count <= 3); // Check the condition at the end
//  OUTPUT 123


// Example 2: The "Runs Once Anyway" Scenario (The Main Difference)
// Here is where the do...while loop stands out. In this example, the variable number 
// is already greater than 5. The condition is false from the very beginning, but the code still runs one time.

let number = 10;

do {
  console.log(`The number is ${number}`);
  number++; 
} while (number < 5); // The condition is false, so it stops after the first run.

// OUTPUT the number is 10

let score = 11

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);