//const students = ["weee", "ewewew", "ahahha", "djiwd", "deud'ejidje"]



//shows how many elements are in the array
//console.log(students.length)

//removes the 1st element of the array
//students.shift()

//adds the argument to the front of the array
//students.unshift("anya")

//splice allows you the remove things in the middle
//splice(index, how many)
//students.splice(1,2)

/*const desserts = ["cake", "iceCream", "donut"]
desserts.splice(2, 1)
desserts.unshift("pudding")


const numbers = [ 1, 4, 2, 5, 2 ]
numbers.splice(1,3)

*/


//working with arrays
//const food = ["pizza", "spaghetti", "omlet", "fried rice", "sashimi"]

//anonmyous function
//food.forEach(function(element){
    //console.log(element)
//})
/*
let sum = 0
const num = [1, 2, 3, 2, 3, 5, 6, 7]

num.forEach(function(element){
    console.log(sum = element + sum)

})
*/


//2D array
const typingScore = [
    //accuracy
    [84, 81, 73, 86, 86, 87, 81, 85, 90, 93, 87, 92, 88, 86],
    //wpm
    [27, 21, 16, 27, 27, 26, 24, 29, 34, 35, 34, 34, 37, 29],
   
]


let Acc = 0
let lenth = typingScore[0].length

console.log(lenth)

typingScore[0].forEach(function(element){
   Acc =  Acc + element
})

let averageAcc = Acc/lenth
console.log(averageAcc)



let WPM = 0
let length = typingScore[1].length

console.log(lenth)

typingScore[1].forEach(function(element){
    WPM =  WPM + element
})

let averageWPM = WPM/length
console.log
console.log(averageWPM)

let highestWPM = 0

typingScore[1].forEach(function(element){
    if(element > highestWPM){
        highestWPM = element
    }
    
})

console.log(highestWPM)



let highestAcc = 0

typingScore[0].forEach(function(element){
    if(element > highestAcc){
        highestAcc = element
    }
    
})

console.log(highestAcc)



document.querySelector(".fastestWPM").innerHTML = highestWPM
document.querySelector(".highestAcc").innerHTML = highestAcc
document.querySelector(".averageWPM").innerHTML = averageWPM
document.querySelector(".averageAcc").innerHTML = averageAcc




let latestWPM = typingScore[1].pop()
document.querySelector(".latestWPM").innerHTML = latestWPM

let latestAcc = typingScore[0].pop()
document.querySelector(".latestAcc").innerHTML = latestAcc