// console.log("hello");

// let array = ["hey what the", "the", "hell"]
// let ok = [1, 2, 3, 4, ...array , 5]
// // console.log(ok.indexOf(5));
// function array(arr) {

//     let newArray = [];
//     for (let num = 0; num < arr.length; num++){
//         if(arr[num] > 10) {
//             newArray.push(arr[num])
//         }
//     }
//         console.log(newArray);
// }
// array([1, 35, 13, 67, 8, 9, 89, 16, 13, 10, 50])
// // console.log(newestArray);c


// let ok = {
//     name: "Venkatesh Prasad",
//     emp_id: 123,
//     company: "Infosys"
// }

// // let be = object.keys(ok)
// // let be = Object.keys(ok);
// // console.log(be);
// // console.log(ok.hasOwnProperty(123))
// // let i = delete ok.emp_id;
// // console.log(i)
// // console.log(ok);
// console.log(ok.company);

let todos = {
        name: "venkatesh prasad",
        emp_id: 123,
        task: "Nothing",
        isCompleted: false
    }


// for (let i of todos) {
//     // // console.log(i.name);
//     // if (i.isCompleted === true){
//     //     console.log(i.task)
//     // }
//     console.log(i)
// }

for (let i in todos) {
    console.log(`key is : ${i} and the value is : ${todos[i]}`);
}




// for(let i=0; i < todo.length; i++){
//     console.log(todo[i].task)
// // }

// for(let i of todo){
//     console.log(i.task);
// }

// function names(name){
//     let array = []

//     for(let i of name){
//         array.push(i);
//     }
//     return array;
// }
// console.log(names([1, 2, 3, 4, 5]))





// for(i = 5; i <= 50; i+= 5){
//     console.log(`5 x ${i/5} = ${i}`)
// }

// let age = 31;

// if (age > 30) {
//     const newAge = age /2 ;
//     console.log(newAge)
// } else {
// const newAge = age * 2;
// console.log(newAge);
// }
// console.log(newAge)

