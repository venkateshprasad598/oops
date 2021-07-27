// // console.log('Hello');

let myStocks = {
    fruits: ['banana', 'orange', 'apple', 'strawberry'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toopings: ['chocoalte', 'peanuts'],
}


// let is_shop_open = true;

// let order = (time, work) => {

//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {

//             setTimeout(() => {
//                 resolve( work() )
//             }, time);
//         }

//         else{
//             reject(console.log('Our shop is closed'))
//         }
//     })

// 
 
let shop_is_open = true

let order = (time, work) => {

    return new Promise((resolve, reject) =>{
        if(shop_is_open){
            resolve(work())
        } else{
            reject(conosle.log("The shop is closed"))
        }
    })
}

order(1000, ()=>{
    conosle.log("Bannana is selected")
})

.then(()=>{
    return order(2000, ()=>{
        console.log("machine has started")
    })
})

.then(()=>{
    return order(1000, ()=>{
        console.log("Please tell your toping mam")
    })
})

.then(()=>{
    return order(2000, ()=>{
        console.log("Please recheck your topping, the topping selected was chocolate")
    })
})

.then(()=>{
    return order (2000, ()=>{
        console.log("Yeah i have slected the toping")
    })
})


// Now lets start building the async function





// order(2000, ()=>console.log(`${myStocks.fruits[0]} was selected`))

// .then(() =>{
//     return order(0000, ()=> console.log("Production has started"))
// })

// .then(()=> {
//     return order(2000, ()=> console.log('The fruit has been choped'))
// })

// .then(() => {
//     return order(1000, ()=> console.log(`${myStocks.liquid[0]} and ${myStocks.liquid[1]} was added`))
// })


// .then(()=>{
//     return order(1000, ()=>{
//         console.log("Start the machine")
//     })
// })


// .then(()=>{
//     return order(2000, ()=>{
//         console.log(`The holder selected is ${myStocks.holder[0]}`)
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${myStocks.toopings[0]} is added has an topping`)
//     })
// })

// .then(()=>{
//     return order(3000, ()=>{
//         console.log("The order is serverd")
//     })
// })

// // catch runs when condition is false 
// // here in our case, it will run when the is_shop_opened = false
// .catch(()=>{
//     console.log('Customer left')
// })

// .finally(()=>{
//     console.log("day ended, we gonna close our shop")
// })









// async function order(){

//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exists" , error)
//     }
//     finally{
//         console.log("Runs code Anyway")
//     }
// }
// order()

// .then(()=>{
//     console.log("Then")
// })


/// Await Keyword

// let toppins_choice = ()=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Which tooping would you like to have?'))

//         }, 3000);
//     })
// }


// async function kitchen(){
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppins_choice()

//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen()
// console.log("Cleaning the dishes")
// console.log("Cleaning the tables")
// console.log("Taking others order")




// let is_shop_open = true;

// function time(ms){
// return new Promise( (resolve, reject) => {
 
//     if(is_shop_open){

//         setTimeout(resolve, ms);  

//     }else{
//         reject(console.log("Shop is closed"))
//     }
// })

// }


// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${myStocks.fruits[0]} is selected`)
         
//         await time(0000)
//         console.log('Start the production')
        
//         await time(2000)
//         console.log("Cut the fruit")

//         await time(1000)
//         console.log(`${myStocks.liquid[0]}and ${myStocks.liquid[1]} was selcted`)

//         await time (1000)
//         console.log('Start then machine')


//         await time (2000)
//         console.log(`The holder selected is ${myStocks.holder[0]}`)

//         await time (3000)
//         console.log(`${myStocks.toopings[0]} was selected`)

//         await time(2000)
//         console.log("The order is a served")
//     }
//     catch(error){
//         console.log("Custo left")
//     }
//     finally{
//         console.log("Day ended, shop is closed")
//     }
// }
// kitchen();



let shop_is_open = true;

funciton order(ms){

    return new promise((resolve, reject)=>{
        setTimeout(() => {
            reslove
        }, ms);
    })
}

async function kitchen(){
    await order(1000){
        
    }
}