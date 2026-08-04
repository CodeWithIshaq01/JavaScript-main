const accountId = 144553
let accountEmail = "princeishaq01@gmail.com"
let accountPassword = "password123"
let accountCity = "New York"
let accountState;       // accountState is declared but not initialized, so it is undefined

// accountId = 123456 not allowed because it is a constant variable

console.log(accountId);

/*
prefer not to use var because it is function scoped and can be redeclared and updated.
block scoped variables are preferred because they are limited to the block, statement, or expression where they are used.

*/



accountEmail = "qwerty@gmail.com" 
accountPassword = "newpassword123"
accountCity = "Los Angeles"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
