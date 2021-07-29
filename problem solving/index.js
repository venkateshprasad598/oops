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