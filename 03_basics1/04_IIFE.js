//  Immediately invoked function expression (iife)

(function chai(){
    console.log('DB CONNECTED');
})();

// (function aurcode(){
//     console.log('DB CONNECTED TWO');
// })()

// (() =>{
//     console.log('DB CONNECTED TWO');
// })()

((name) =>{
    console.log('DB CONNECTED TWO ${name}');
})('ankur')