// let object = {
//     name : "Venkatesh",
//     age : 23,
//     number : "Yadgir"
// }

// DeESTRUCTING ASSIGNMENT

// Instead of writing 

// const name = object.name;
// const age = object.age;
// const nujmber = object.number;

// We can write it as

// let {name, age, number} = object;
// console.log(name)


// 2. spread operator

// function sumONe(a, b){
//     return a+b;
// }
// // console.log(sumONe(1,2))
// // BUT WHAT IF YOU WANT TO PASS AN ARRAY OR OBJECTS 
// let array = [1, 2, 3, 4, 5]
// console.log(sumONe(...array)) // This is callled spread operator which spreads and gives the value, if you give third value it will be ingonerd by default



// 3. REST OPERATOR 

// function sumTwo(...args){
//     let sum = 0;
//   for (const i of args) {
//       sum += i
//   }
//   return sum;
// }

// // When you don't know how many inputs you gonna get to sum them , we use rest parameter
// let sum = sumTwo(1, 2, 3)
// console.log(sum);

// 2nd example

// function sumTw0(a, b, ...args){
//     let sum = 0;
//     let multi = a * b;

//     for (let i of args){
//         sum += i
//     }
//     return [sum, multi]
// }

// console.log(sumTw0(5, 6, 3, 3, 3))

// let math = [1, 2, 3, 55, 67 , 33, 4, 34, 56,78, 87, 45 , 35]
// let highestNum = Math.max(...math)
// console.log(highestNum)


// let [a, b, ...arr] = [1, 2, 3, 4, 5] // REST PARAMETER
// console.log(arr)


// ASSINGING VARIABLE FROM A ARRAYS 

// let a = [1, 2, 3, 4, 5]
// console.log(...a)

// function one(Anything){

//     let [a,b, ...arr] = Anything;
//     return arr 
// }

// let me = [1, 2, 3, 4, 5, 6]
// console.log(one(me))



// Object Property ShortHand ****************

// const createPerson = (name, age, gender)=>{
//     return {
//         name : name,
//         age: age,
//         gender : gender
//     }
// }
// let ok = createPerson("venkatesh", 23, "male")
// console.log(ok.name)

// CAN BE REWRITTEN HAS 
// const createPerson = (name, age, gender)=>{
//     return {
//         name,
//         age,
//         gender
//     }
// }
// console.log(createPerson("venkatesh", 23, "male"))

// GETTERS AND SETTERS***********************************

// let myName = {
//     firstName : "Venkatesh",
//     lastName : "Prasad",
//     get fullName(){
//         return `${this.firstName} ${this,this.lastName}`
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// }


// GETTERS *****************
// getters are used to get the property or method without calling the function completely
// example :
// console.log(myName.fullName)

// SETTERS ******************
// setters are used to set the data or manipulate it from outside
// example :

// set fullname(value){
//     let parts = value.split(' ')
//     this.firstName = parts[0] 
//     this.lastName = parts[1]
// }

// myName.fullName = "Venku Prasad" // seting it and the value split and gives the array
// console.log(myName)



// CLASSES ********************************************
1.
class myName {
    constructor(firstName, LastName) {
        this.name = firstName,
            this.last = LastName
    }
}

let me = new myName("Venkatesh", "Prasad")
console.log(me)


2.
let object = (name, age) =>{

    this.myName = name
    this.myAge = age

}

let me = new object("Venkatesh", 23)
console.log(me);

// or

// let object = function(name, age){
//     // In this case it normally work has normal function 
//     return {
//         myName: name,
//         myAge: age
//     }

// }

// let me = object("Venkatesh", 23)
// console.log(me); 


// Inheritance ************************************ 
// class myName{
//     constructor(firstName, LastName){
//         this.name = firstName,
//         this.last = LastName
//     }
//     get ok(){
//         return `${this.name} is a male`
//     }
// }

// let me = new myName("Venkatesh", "Prasad")
// console.log(me)

// class newData extends myName{
//     constructor(firstName, LastName, age, location){
//         super(firstName, LastName) // Parent element It is a must.
//         this.age = age
//         this.location = location
//     }

//     get be(){
//         return `${this.last} is my last name`
//     }

// }

// let myData  = new newData("Venku", "Archie", 23, "Banglore")
// console.log(myData);

// console.log(me.ok) //  instance of myName that is $me can acces it's method ok
// console.log(myData.ok) // Evem $myData can also access parent method ok()
// console.log(myData.be) // But But $myData can access it's method be but parent element cannot access it
// console.log(me.be) // it cannot access it.

import { add } from "./import"


console.log(add())











