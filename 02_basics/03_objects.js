// sinfleton -> objects made with constructor
// object.create

// literal objects

const mySym = Symbol("key1")

const JsUser = {
    // key   : value
    name : "ankur",
    "full_name" : "ankur_singh_kuntal",

    [mySym]: "mykey1",

    age : 19,
    location : "Bharatpur",
    email : "ankur@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);

// // mdn js datatype   -> symbol
// // console.log(JsUser.mySym);
// // console.log(typeof JsUser.mySym); // here we do not get symbol

// console.log(JsUser[mySym]);

JsUser.email = "ankue@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ankue@chatgpt41.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


