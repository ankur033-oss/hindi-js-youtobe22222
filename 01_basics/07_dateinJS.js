//  mdn date

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0,23)
// let my_CreatedDate = new Date(2024, 0,23,5,3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")


console.log(myCreatedDate.toDateString());
// console.log(my_CreatedDate.toDateString());
//  in js months sterts from 0

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = newDate()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

'${newDAte.getDay()} and the time'

newDate.toLocaleString('default',{
    // ctrl space
    weekday: "long"
    // timezone: ''
})


