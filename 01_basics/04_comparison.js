console.log(3 > 2) // true (greater than operator)
console.log(3 < 2) // false (less than operator)
console.log(3 >= 2) // true (greater than or equal to operator) 
console.log(3 <= 2) // false (less than or equal to operator)
console.log(3 == 2) // false (equality operator)
console.log(3 != 2) // true (inequality operator)
console.log(3 === 2) // false (strict equality operator, checks both value and type)
console.log(3 !== 2) // true (strict inequality operator, checks both value and type)


console.log(3 == "3") // true (loose equality operator, performs type coercion)
console.log(3 === "3") // false (strict equality operator, no type coercion)    
console.log(3 != "3") // false (loose inequality operator, performs type coercion)
console.log(3 !== "3") // true (strict inequality operator, no type coercion)


console.log(3 > 2 && 2 > 1) // true (logical AND operator, both conditions must be true)
console.log(3 > 2 || 2 < 1) // true (logical OR operator, at least one condition must be true)
console.log(!(3 > 2)) // false (logical NOT operator, negates the condition) 
console.log(!(3 < 2)) // true (logical NOT operator, negates the condition)
console.log(!(3 > 2 && 2 > 1)) // false (negates the result of the logical AND operation)
console.log(!(3 < 2 && 2 < 1)) // true (negates the result of the logical AND operation)
console.log(3 > 2 || 2 < 1) && !(3 < 2) // true (combination of logical AND, OR, and NOT operators)



// most cases we aviod comparing null and undefined with numbers, but here are some examples:
console.log(null < 0) // false (null is converted to 0 when compared to a number)
console.log(undefined < 0) // false (undefined is converted to NaN when compared to a number)
console.log(null > 0) // false (null is converted to 0 when compared to a number)
console.log(undefined > 0) // false (undefined is converted to NaN when compared to a number)
console.log(null == 0) // false (null is only equal to undefined, not to any number)
console.log(undefined == 0) // false (undefined is only equal to null, not to any number)
console.log(null == undefined) // true (null and undefined are considered equal in loose equality)
console.log(null === undefined) // false (strict equality checks both value and type, and they are different types)
console.log(null != undefined) // false (loose inequality operator, null and undefined are considered equal)
console.log(null !== undefined) // true (strict inequality operator, checks both value and type, and they are different types)  
console.log(null == null) // true (null is equal to itself)
console.log(undefined == undefined) // true (undefined is equal to itself)  
console.log(null == 0) // false (null is not equal to 0)
console.log(undefined == 0) // false (undefined is not equal to 0)
console.log(null > undefined) // false (null is not greater than undefined)

