// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {                                  // benefit of else statement is b/w of two statements only 
                                          // one be printed which follows the statement
    console.log("temperature is greater than 50");
}

console.log("Execute");  //this definitely executed coz this is out of boundary of if statement
// <, >, <=, >=, ==, !=, ===, !==

//////SCOPE////////

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`); // THIS WILL
// }

// console.log(`User power: ${power}`); 
// THIS WILL NOT EXECUTE  POWER HAS BLOCK SCOPE CONST = FLY,   INSTEAD OF VAR = FLY 


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //THIS NOT RECOMMENDED CODE PREFECT IS BELOW GIVEN
// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test2");
// OUTPUT 1. TEST,
            // test2
         //2. test
         // 3. test2   

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}