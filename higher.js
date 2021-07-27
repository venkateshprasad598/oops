// Callback

// function sing(callback){
// console.log("La La La")
// callback();
// }
// sing(function(){
//     console.log("sing")
// })

// HIGHER ORDER FUNCTION **************************

// function multiplier(factor){
//     return function(x){
//         return x * factor         or return (x) => x * factor
//     }
// }



// let doubler = multiplier(3);
// console.log(doubler);
// console.log(doubler(3));


// MAP *************************************

// Map function maps to each element and returs an new array

// 1.
// let myArray = [2, 3, 4, 5, 6]
// console.log(myArray);

// let double = function(x) { 
//     return x * 2
// }

// let doubler = myArray.map(double)
// console.log(doubler);

// or 

// let doubler = myArray.map(function(x) {
//     return x * 2
// })
// console.log(doubler);

// FILL ********************************************

// let vals = new Array(100);
// console.log(vals);
// let random = vals.fill(0).map(Math.random)
// console.log(random)





// Reduce **********************************


// let Array = [1, 2, 3, 4, 5]

// let sum = 0;

// for (let i of Array){
//     sum += i
// }

// console.log(sum)

// We can rewrite it in very good manner

let Array = [1, 2, 3, 4, 5]
console.log(Array)


// with second argument 0
// a = 0, b = 1 => a = 1 (the sum returns the accumelator)
// a = 1, b = 2 => a = 3
// a = 3, b = 3 => a = 6
// a = 6, b = 4 => a = 10
// a = 10, b = 5 => a = 15

// with out any second value 

// accumelater will take the initial value of an array 
// a = 1, b = 2 => a = 3
// a =3, b = 3
// goes on 


// let sum = Array.reduce((accumelater, cuurentValue) => {
//     return accumelater + cuurentValue; 
// }, 0)
// console.log(sum)











// Filter **********************************

// const numbers = [1, -1, 2, 3]
// console.log(numbers)

// const num = numbers.filter(function(x){
//     return x >= 0
// })
 
// console.log(num)












// SORT *************************************
// let num = [1, 2, 35, 56, 65, 88, 1000, 2000, 53, 556, 68686]

// let sort = num.sort(function(a, b) {
//     return a - b;
//     // a - b < 0 a comes first
//     // a - b = 0 ; remains same
//     // a- b > 0  b comes
// })
// console.log(sort)


// let array = [
//     {
//         product: "Watch",
//         price: 1000
//     },
//     {
//         product: "Shoes",
//         price: 1500
//     },
//     {
//         product: "Tie",
//         price: 500
//     }
// ]

// console.log(array)


// let newArray = array.sort(function(a, b){
//     return a.price - b.price;
// })

// console.log(newArray)