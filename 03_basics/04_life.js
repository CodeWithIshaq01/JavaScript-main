// Immediately Invoked Function Expressions (IIFE)
//an (IIFE) is a js function that runs immediately after it's defined.
// it's primarily used to keep variables out of the global scope and prevent
// naming conflicts.
// ()()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // two execute below function semicolon must needed at the end of function

( (name) => {      // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')