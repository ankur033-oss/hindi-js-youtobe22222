//  primitive
//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt



// const score = 100
// const scoreValue = 100.3
// const outTemp = null
// const is = true
let userEmail;
const id = Symbol('124')
const anotherId = Symbol('123');
console.log(id === anotherId); // this is not equal
const bigNumber = 2312456787765n

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.



// reference type datatype (Non pimitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "ankur",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof null);
// ECMA types of Operator




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory 
//  stack  and heap
// stack(primitive)  , heap(Non-Primitive)

let myYoutubename = "ankurdotcom"
let anothername =  myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email : "user@google.com",
    api : "asds"
}

let user2 = user1
user2.email = "ankm@gmail.com"
console.log(user1.email);
console.log(user2.email);




