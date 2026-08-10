// for of

// for...of Loop
// Brief Description:
// A versatile loop that iterates directly over the values of iterable objects (like Arrays, Strings, Sets, and Maps). 
// It is highly readable and gives you full control to stop (break) or skip (continue) at any point.

// Example 1: Stopping the loop early with break
// Because for...of allows standard loop controls, you can stop running it as soon as you find what you need.

const temperatures = [72, 75, 88, 65, 90];

for (const temp of temperatures) {
  if (temp > 85) {
    console.log("Too hot! Stopping.");
    break; // Exits the loop completely
  }
  console.log(`Current temp: ${temp}`);
}
// Output: 
// Current temp: 72
// Current temp: 75
// Too hot! Stopping.


// Example 2: Iterating over a String
// It treats a string as a collection of characters, pulling them out one by one.

const username = "Dev";

for (const char of username) {
  console.log(char);
}
// Output:
// D
// e
// v


// Example 3: Iterating over a Map
// It easily destructures key-value pairs from complex collections like Maps.

const userRoles = new Map([
  ['admin', 'Alice'],
  ['editor', 'Bob']
]);

for (const [role, name] of userRoles) {
  console.log(`${name} is an ${role}`);
}
// Output:
// Alice is an admin
// Bob is an editor






// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }