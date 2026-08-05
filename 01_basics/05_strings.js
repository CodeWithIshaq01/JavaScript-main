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
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));