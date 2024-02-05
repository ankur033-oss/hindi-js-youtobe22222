// reduce js mdn

const myNums = [1,2,3,4]
// acc => accumulator
// curval => current value
// const myTotal = myNums.reduce(function(acc, curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// }, 3)

//  3 is value that we initially pass to accumulator

const myTotal = myNums.reduce( (acc,curval) => acc+curval, 0)
console.log(myTotal);

const shoppingCart = [
    {   itemName : "js course",
        price : 999
    },
    {   itemName : "c++ course",
        price : 990
    },
    {   itemName : "java course",
        price : 9990
    },
    {   itemName : "Datascience course",
        price : 12990
    },

]

const priceTPpay = shoppingCart.reduce((acc,item) => acc+ item.price, 0)

console.log(priceTPpay);

