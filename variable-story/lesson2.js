//Math operators
console.log(333+4)

//add +
//multiply *
//minus - 
//divide /

//Modulus %
console.log(5 % 3) //remainder



let num1 = prompt(`you favorite number?`)
let num2 = prompt(`You least favorite number?`)
let num3 = prompt(`choose a number between 1 and 100`)

//ParseInt( ) change strings into numbers
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

console.log(`answer: ${num1} + ${num2} - ${num3}  = ${num1 + num2 - num3}`)

//If statements

const person = prompt(`name?`)

if (person === "Skr"){
    console.log(`yeah!`)
}

//Comparisons
// == soft comparison (different data type ok)
// === hard comparison (must be same data type)
// <= less than 
// >= greater than

if(5 <= 4 ){
    console.log(`yea`)
}


//Multiple conditions
// && add more conditions


const number1 = prompt(`give a number`)


if( number1 >= 10 ){
    console.log(`big number`)
}

if(number1 <= 5){
    console.log(`small number`)
}

if(number1 <= 10 && number1 >= 5 ){
    console.log(`medium number`)
}


//else

const name1 = prompt( `what is you name?`)

if(name1 === "Anya"){
    console.log(`Hi nice to meet you`)
} else{
    console.log(`you r not Anya!`)
}

//else if statement

if (name1 === "Forger"){
    console.log(`Hi`)
} else if (name1 == "Anya") {
    console.log(`kawaii`)
} else{
    console.log(` who are u?`)
}
