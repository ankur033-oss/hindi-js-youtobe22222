function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(3,"4")
// const result = addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,"null")

// console.log("Result: ", result);

// function addTwoNumbers(number1,number2){
//     // let result = number1+number2;
//     // return result

//     return number1 + number2

// }
// const result = addTwoNumbers(3,4)

// console.log("Result: ", result);

// // function loginUSerMessage(username){
// function loginUSerMessage(username = "sem"){
//     // if(username === undefined){
//     if(!username){
//          console.log("Please enter a username");
//     }
//     return'${username} just logged in'
// }
// // console.log(loginUSerMessage("ankur"));
// // console.log(loginUSerMessage());



function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,500,2000))

const User = {
    username : "ankur",
    price : 199
}

function handleObject(anyObject){
    console.log('Username is ${anyObject.username} and price is ${anyObject.price}');
}
// handleObject(User)
handleObject({
    username : "sam",
    price : 39
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




