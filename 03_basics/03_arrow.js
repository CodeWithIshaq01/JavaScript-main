const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage() //hitesh welcome to website

// user.username = "sam"
// user.welcomeMessage() here is // sam welcom to website

// console.log(this);  this prints empty object {}
// empty object called in node enviroment 
// but in browser it is called window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined beccaue only work in object not directly function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);       // this gives empty {}
}


// chai()

// const addTwo = (num1, num2) => {      //this also called expilised return
//     return num1 + num2
// }

console.log(addTwo(3, 4)) // 7

// const addTwo = (num1, num2) =>  num1 + num2   this is called impilised return (main return krna hai)

console.log(addTwo(3, 4)) // 7

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

                                            
console.log(addTwo(3, 4))   //hitesh   here for object must be wraped in{}


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()