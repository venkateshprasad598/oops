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