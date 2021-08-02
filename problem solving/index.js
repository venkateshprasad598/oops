// console.log("Hello");

//  EXTENSION OF A FILE NAME

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getFileExtension('index.html'))


// 3. ALPHABET

// let capital = (str) => {
//     return str.toUpperCase()
// }

// console.log(capital("venkatesh"))

// 3.a 

// let move = (str) =>
//     str
//     .split('')
//     // .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//     // .join('');
// console.log(move('venkatesh'))
   

// let theDate = new Date('01/01/1998 05:50:38')
// // theDate.setDate(05)
// // theDate.setMonth(05)
// // theDate.setFullYear(1997)
// // theDate.setHours(01)
// // theDate.setMinutes(02)
// // theDate.setSeconds(03)
// console.log(theDate);

// // let BirthDay = theDate.getDay()
// // let BirthDay = theDate.getDate()
// // let BirthDay = theDate.getSeconds()
// let BirthDay = theDate.getTime()
// console.log(BirthDay)


5.
// let str = (string) => string.length < 3 ? string : string.slice(0,3) + string.slice(-3)
// if(string.length < 3){
//     return string
// } else {
//     return string.slice(0,3) + string.slice(-3)
// }
// }


// 6.
// let str = (string) => string.length % 2 == 0 ? string.slice(0, string.length/2) : "Nothing"

// console.log(str("Venk"))


// 7.

// let concatString = (str1, str2) => {
//     return str1.slice(1, str1.length) + " " + str2.slice(1, str2.length)
//     or
//     return str1.slice(1) + " " + str2.slice(1)
// }
// console.log(concatString("Venkatesh", "Prasad"))


// 8.
// Whch number is near to hundered

// let numbers = (a,b) => {
//     if(100-a > 100-b){
//         return b
//     } else if(100-a < 100-b){
//         return a
//     }
// }
// console.log(numbers (90, 80))
// console.log(numbers (80, 70))
// console.log(numbers (60, 78))

// 9. Weather given string ocuuring between 2 and 4 of other string 

// let first = (str, word) => {
//     str.split('').filter((x) => x === word).length
// }

// let str = "venkscvv"
// let word = "v"

// let wordOcc = str.split('').filter((x)=> x === word).length 
// console.log(wordOcc)

// if(wordOcc >= 2 && wordOcc <= 4){
//     console.log(true)
// }else {
//     console.log(false)
// }

// let result = (str, word) => {
//     let wordOcc = str.split('').filter((x)=> x === word).length

//     // wordOcc >= 2 && wordOcc <= 4 ? true : false;
//     if(wordOcc >= 2 && wordOcc <= 4){
//             return true
//         }else {
//             return false
//         }
// }

// console.log(result("lololo", "o"))


// class App {
//     constructor(firstName, lastName){
//         this.FIRSTNAME = firstName,
//         this.LASTNAME = lastName
//     }
// }
// let myName = new App("venkatesh", "Prasad")
// console.log(myName)


// class newApp extends App{
//     constructor(firstName, lastName, thirdName, fourthName){
//         super(firstName, lastName)
//             this.THIRDNAME = thirdName,
//             this.FOURTHNAME = fourthName
//     }
// }

// let newName = new newApp("venku", "Prasad", "is a good", "boy" )
// console.log(newName)


// <form onsubmit="console.log('You clicked submit.'); return false">
//   <button type="submit">Submit</button>
// </form>



// let button = document.getElementById('btn')
// button.addEventListener('click', myButton)

// function myButton(){
//  let xhr = new XMLHttpRequest()
//  xhr.open('GET', '')
 
//  xhr.onload = () => {
//    console.log(this.responseText)
//  }
//  xhr.send()
// }

// let button = document.getElementById("btn")
// button.addEventListener('click', myButton)

// let myButton = () => {
//   let xhr = new XMLHttpRequest()
//   xhr.open('GET', url)

//   xhr.onload = ()=> {
//     console.log(this.responseText)

//   }
// } 


// let button = document.getElementById('btn')
// console.log(button);

// button.addEventListener('click', myButton)

// function myButton(){
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', "https://api.github.com/users"
//     )


//     xhr.onload = function() {
//         if(this.status === 200){
//          let ok =  JSON.parse(this.responseText)
//          console.log(ok[0].login)
//         }
//     }

//     xhr.send()
// }

// "https://github.com/mojombo"

// console.log(1 > 1 ?  5 : null)

// if (2>3){
// 	console.log(2)
// } else{

// }

// let object = {
//     name: "Ven",
//     age : 23,
//     locatio : "Yadgir"
// }

// const{name, age, locatio} = object
// console.log(age);

console.log("Hello")



//CALLBACKS****************************************************

// let array = [
//     {name : "Venkatesh", age: 23, company : "Apple"},
//     {name : "Prasad", age: 21, company : "Google"}
// ]

// function getPost(){
//     setTimeout(() => {
        
//   let output = ""
//   array.map((bio)=>{
//      output += `<li> ${bio.name} </li>`
//   })

//   let div = document.getElementById('ul')
//   div.innerHTML = output

//     }, 2000);
// }

// function addPost(bio){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             array.push(bio)
//             let condition = true;
//           if(condition === true){
//               resolve()
//           }else{
//               reject()
//           }

//         }, 3000);
//     })
// }

// // addPost({name : "VenkateshPrasad", age: 21, company : "Google"}).then(()=>{
// //     getPost()
// // }).catch(()=>{
// //     console.log("Oh its an a error")
// // })

// async function newPost(){
//  await addPost({name : "VenkateshPrasad", age: 21, company : "Google"})
//     getPost()
// }

// newPost()

//CALLBACKS****************************************************
































// function getName(){
//     setTimeout(() => {
//         let output = ""
//         array.map((bio)=>{
//             output += `<li>${bio.name}</li>`;
//         })

//         let div = document.getElementById('ul')
//         div.innerHTML = output

//     }, 3000);
// }


// function createPost(){
//     setTimeout((newbio) => {
//         array.push(newbio);
//     }, 2000);
// }

// getName()
// createPost({name : "Venku Prasad", age: 22, company : "Google"})



let vacation = [
{name: "California", located : "USA"},
{name : "London", located : "England"},
{name : "paris", loacted : "France"},
]


function getState(){
    setTimeout(() => {
        let output = ""
        vacation.map((data)=>{
            output += `${data.name}`
            console.log(output)
        })
        let div = document.getElementById('ul')
        div.append(output)
    }, 2000);
}

// getState()

// function addState(newName){
//     setTimeout(() => {
//         vacation.push(newName)
//     },3000);

// }

// addState({name : "Italy", loacted : "France"})

// CALLBACKS *******************************

// function addState(newName, callback){
//     setTimeout(() => {
//         vacation.push(newName)
//         callback()
//     },3000);

// }

// addState({name : "Italy", loacted : "France"}, getState)

// PROMISE *****************************************

function addState(newName){
   return new Promise((relove, reject) => {
       setTimeout(() => {
           vacation.push(newName)
           let condition = true;
           if(condition){
               relove()
           }else{
               reject()
           }
        
       },3000);
   })

}

// addState({name : "Italy", loacted : "France"}).then(getState).catch(()=>{
//     console.log("There was some error, sorry")
// })

// ASYNC /AWAIT *********************************

async function asyncFunc(){
 await addState({name : "Italy", loacted : "France"}, getState)
getState()
}

asyncFunc()