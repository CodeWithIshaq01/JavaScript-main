// const tinderUser = new Object()   this singleton object
const tinderUser = {}  // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); {id = "123abc" name = "Sammy"isLoggedIn = false}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);   {obj1 :{1: "a", 2: "b"} obj2:{3: "a", 4: "b"}} this is problematic

// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// {1: "a", 2: "b" 3: "a", 4: "b" 5: "a", 6: "b"}     this is good way but below is mosttime we use


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); it give values in array [ id name islogged] is very useful for looping etc

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// this important for loop is if data is not present system my be crashed

// desstruction of object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  this good but when use clean code
const {courseInstructor} = course  // best practice
const {courseInstructor: instructor} = course // another practice

// console.log(courseInstructor);
console.log(instructor);

const {price} = course
console.log(price); 999

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]