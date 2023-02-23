    //function sayHi() {
        //document.write(`hi`)

      //  document.querySelector(".hi").innerText = "Hehehehe"
    //}




let num = 0
let numInterval

function stop(){
    clearInterval(numInterval)
}

function start(){
    numInterval = setInterval(addnum, 1000)
}

function reset(){
num = 0
clearInterval(numInterval)
}

function addnum(){
    num = num + 1
    console.log(`${num}`)
}

parseInt(num)