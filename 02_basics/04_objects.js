// const tinderUser = new Object() // singleton obj
const tinderUSer = {} // Non-singlton obj

tinderUSer.id = "123abc"
tinderUSer.name = "sammy"
tinderUSer.isLoggedIn = false

// console.log(tinder);

const regularUser = {
    email : "Some@gmail.com",
    fullname :
    {
         userfullname : {
            firstname : "ankur",
            lastname : "kuntal"
         }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"a", 2 : "b", 3 : "c"}
const obj2 = { 4:"a", 4 : "b", 6 : "c"}

// const obj3 = {obj1, obj2}
// constobj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// object assign mdn

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id : "asdf",
        email : "ankur@ask.com"
    },
    {
        id : "asdf",
        email : "ankur@ask.com"
    },
    {
        id : "asdf",
        email : "ankur@ask.com"
    }
]
users[1].email
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))







