// const name = "hitesh"
const repoCount = 50


// console.log(name + repoCount + " Value"); hitesh50 Value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]); h
// console.log(gameName.__proto__);


// console.log(gameName.length); 13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString); // hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // empty string because slice() method returns an empty string
//  when the start index is greater than the end index. In this case, 
// the start index is -8 ( total characters  is 13-8 = 5, which is equivalent to 5) and
//  the end index is 4, so the result is an empty string.
// because the slice() method extracts a section of a string and returns it as a new string,
// without modifying the original string. The first parameter is the starting index (inclusive) and the second parameter is the ending index (exclusive). 
// If the starting index is greater than the ending index, the method returns an empty string.

// const newStringOne = "   hitesh    "
// console.log(newStringOne); // ---hitesh (with space)
// console.log(newStringOne.trim()); hitesh (space clear)

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))"https://hitesh.com/hitesh-20choudhary

// console.log(url.includes('sundar')) // false (includes() method checks if a string contains a specified value and returns true or false)
// console.log(url.includes('hitesh')) // true (includes() method checks if a string
//                                         contains a specified value and returns true or false)

// console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ] (split() method splits a 
//                                   string into an array of substrings, and returns the new array. 
//                                   The first parameter is the separator, which can be a string or 
//                                    a regular expression. The second parameter is optional and specifies 
//                                    the limit on the number of splits to be found. If omitted, all occurrences 
//                                      of the separator will be used to split the string.)