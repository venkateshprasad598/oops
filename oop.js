// function createCircle(radius){
// let radius = 
// }

// let object = {
//     radius: 1,
//     draw() { console.log ('draw')}
// }
// console.log(object.radius)


// function createCircle(radius){
//     return {
//         radius: radius,
//         draw() {
//             console.log('draw')
//         }
//     }
// }
// let newCircle = createCircle(8);
// console.log(newCircle)

// function createCircle(radius){
// this.radius = radius,
// this.draw = function() {
//     console.log('draw it')
// }
// }

// let newCircleTwo = new createCircle(18);
// // console.log(newCircleTwo.draw( ))
// console.log(newCircleTwo.constructor  === createCircle)
// console.log(newCircleTwo instanceof createCircle);


// let x = 10;
// let y = x;
// x = 20;
// console.log(y)


// function circle(string){
// return {

//     name: string,
//     age: 23,
//     bio(){return `${this.name} is ${this.age} years old`}
// }
// }
// let newCircle = circle("Venkatesh Prasad");
// console.log(newCircle)



function Circle(string) {
    this.name = string,
    this.age = 23,
    this.bio = function() {return `${this.name} is ${this.age} years old`}
}

let newCircle = new Circle("Venkatesh Prasad")
// console.log(newCircle['location'] = "Yadgir")
// console.log(newCircle)



// Iterating *************************************************

// for (let i in newCircle){
//     console.log(newCircle[i])
// }

// if ('age' in newCircle)
//     console.log("yes")
    
    let objectKeys = Object.keys(newCircle);
    console.log(objectKeys)
