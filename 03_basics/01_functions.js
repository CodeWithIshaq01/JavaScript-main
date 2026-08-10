
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }
//  //      addTwoNumber()   /this will not exicute argement not present
// //  addTwoNumber(3,4)   7 this will excicute

// function addTwoNumbers(number1, number2){
// // console.log("Result: ", result);       Result: undefined because console log than return
//     // let result = number1 + number2
//     // return result     //8     
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// function loginUserMessage(username) {

// return}
//     return `${username} just log in` 
// function loginUserMessage(username) {
//     return `${username} just log in` 
// }

// console.log(loginUserMessage("hitesh"))  ///hitesh just log in
// console.log(loginUserMessage()) // undifined  coz with there is no value 

//   if (username===undefined) {
//     console.log("please enter username")  //please enter username
// return}

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username"); //  if username is not enter 
//         return                                    // please enter a username or below give will exicuted
//     }
//     return `${username} just logged in` // sam just logged in
// } 

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// //shopping card scenario we don't know how many value will pass in function
// //  (custumer add list of items in card we have to add those prices)
// function calculateCartPrice(num1)
// return num1
// console.log(calculateCartPrice(200,100,599,)) // 200 will print here problem for this we use rest operator

// function calculateCartPrice(...num1)
// return num1
// console.log(calculateCartPrice(200,100,599,)) // [200,100, 599] this array will be add in loop 


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000)) // here [500, 2000] prints coz val1 marges 200 val2 merges 400




// how to convert object into function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)  //user name is hitesh and price is 199


handleObject({
    // username: "sam",    this will be exicute by this only
 price: 399              // username is sam and price is 399
 })


  /// converting Array into function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); 400

console.log(returnSecondValue([200, 50000, 500, 1000])); // 50000
// for modified array same