const userEmail = "ankur@p.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy value => false ,0, -0, BinInt 0n, null, underdefined , NaN
// truthy value => "0", 'faise', " ", [], {},function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// false == 0 /false == '' / 0 == '' is true in google console

// Nullish Coalecing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// v1l1 = null ?? 10
// val1 =  undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1);

// terniary operator

condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



