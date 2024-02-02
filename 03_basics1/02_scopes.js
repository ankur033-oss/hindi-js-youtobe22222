// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER :", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }

// console.log(a)
// console.log(b)
// console.log(a)

function one(){
    const username = "ankur"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "ankur"
    if(username === "ankur"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++interesting++++++++++++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5));

const addTwo = function(num){
    return num+2
}
console.log(addTwo(2));
