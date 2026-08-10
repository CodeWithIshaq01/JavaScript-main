// // for

// The for Loop
// A for loop is the best choice when you know exactly how many times the loop needs to run. 
// All the loop's control elements (initialization, condition, and increment) are neatly 
// packed into a single line at the top.

// Best Use Case: Iterating through a known sequence or an array of items.
const inventory = ["Laptop", "Mouse", "Keyboard"];

// We know exactly how long the array is, so a 'for' loop is perfect.
for (let i = 0; i < inventory.length; i++) {
  console.log(`Checking item: ${inventory[i]}`);
//   Laptop", "Mouse", "Keyboard 
}





// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         //console.log("5 is best number");
//     }
//     //console.log(element);
    
// }

// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//     //console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     //console.log(`Inner loop value ${j} and inner loop ${i}`);
//     //console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     //console.log(element);
    
// }

let myscore = ["abc", "xyz", "pqr"] 
for (let i = 0; i < myscore.length; i++) {
    const element = myscore[i];
    // console.log(element);
    
    
}
 
for (let i = 1; i <=5; i++) {
    const element = i
    // console.log(element); 
    
}

let mycolors = ["red", "blue", "green"]
for (let index = 0; index < mycolors.length; index++) {
    const element = mycolors[index];
    // console.log(element);
    
    
}

for (let i = 0; i <=20; i += 2) {
    const element = i
    // console.log(element); 2 4 6 8 10 .. 20
    
}

for (let i = 1; i <=20; i+=2) {
    const element = i;
    // console.log(element);
    
    
}

for (let i = 0; i <= 30; i++) {
    const element = i;
    // console.log(element);
    
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// // for (let index = 1; index <= 20; index++) {
// //     if (index == 5) {
// //         console.log(`Detected 5`);
// //         continue
//     }
// //    console.log(`Value of i is ${index}`);
    
// }


for (let i = 1; i <= 20; i++) {

    if (i==5) { 
        console.log(`5 is dected`);
        continue
    }
    console.log(i);
    
}