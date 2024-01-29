const account_Id = 144553
let accountEmail = "ankur@gmail.com"
var accountPassword = "12345"
accountCity = "Bharatpur"
let accountState ;


// account_Id = 122323  not allowed
// {} -> scope
// const is used to define constant
// var & let is used to define variables


accountEmail = "ask@gmail.com"
accountPassword = "21234"
accountCity = "Bharat"

console.log(account_Id);

/*
prefer not to use
because of issue in block scope and functional scope
*/

console.table([account_Id, accountEmail, accountPassword, accountCity])
