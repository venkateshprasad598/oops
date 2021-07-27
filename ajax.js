let button = document.getElementById('btn')
button.addEventListener('click', ajaxApi)


function ajaxApi(){
    console.log('working')

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users')

    xhr.onload = function(){
        if(this.status = 200){
            let myData = JSON.parse(xhr.responseText);
            console.log(myData)

            let newData = myData[0].avatar_url;
            console.log(newData)

            let img = document.createElement('img')
            img.src = newData;
            console.log(img)

            let div = document.getElementById('div')
            div.append(img)            
        }
    }

    xhr.send();
}
// let newData = myData[0];
// console.log(newData)
