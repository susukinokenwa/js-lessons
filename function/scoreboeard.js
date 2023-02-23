
const name1 = prompt(` First team name?`)
const name2 = prompt(`Second team name?`)

document.querySelector(".team1").innerText = name1
document.querySelector(".team2").innerText = name2




//Timer


let min = 10
let sec = 00
let numInterval
/*if(sec > 0){
    sec--
}

if( sec == 0){
    min--
    sec = sec + 60
}
if (sec === 0 && min == 0){
    clearInterval(numInterval)
}*/

function stop(){
    clearInterval(numInterval)
}

function start(){
    numInterval = setInterval(second, 1000)
}

function reset(){
min = 10
sec = 00
clearInterval(numInterval)
document.querySelector("#min").innerText = min
    document.querySelector("#sec").innerText = sec
}

function second(){
    
    if(sec >= 0){
        sec--
    }
    
    if( sec == -1){
        min--
        sec = sec + 60
    }
    if (sec === 0 && min == 0){
        clearInterval(numInterval)
    }
    console.log(`${min}:${sec}`)
    document.querySelector("#min").innerText = min
    document.querySelector("#sec").innerText = sec
}

parseInt(sec)
parseInt(min)

//document.querySelector("#min").innerText = min
//document.querySelector("#sec").innerText = sec


//Period function

let period = 1

function addPeriod(){
    period++
    document.querySelector(".tim2").innerText = period
}

function clearperiod(){
    period = 1
    document.querySelector(".tim2").innerText = period
}

function minusPeriod(){
    period--
    document.querySelector(".tim2").innerText = period
}

//document.querySelector(".tim2").innerText = period

let team1Score = 0
let team2Score = 0

document.querySelector(".teamscore2").innerText = team2Score
document.querySelector(".teamscore1").innerText = team1Score

parseInt(team1Score)
parseInt(team2Score)

function scoreReset(){
team1Score = 0
team2Score = 0
document.querySelector(".teamscore2").innerText = team2Score
document.querySelector(".teamscore1").innerText = team1Score
}



let team1Score1 = 0
let team2Score1 = 0

function onePoint1(){
    team1Score1++
    team1Score++
    document.querySelector(".team11").innerText = team1Score1
    document.querySelector(".teamscore1").innerText = team1Score
}
function minPoint1(){
    team1Score1--
    team1Score--
    document.querySelector(".team11").innerText = team1Score1
    document.querySelector(".teamscore1").innerText = team1Score
}

function onePoint2(){
    team2Score1++
    team2Score++
    document.querySelector(".team22").innerText = team2Score1
    document.querySelector(".teamscore2").innerText = team2Score
}
function minPoint2(){
    team2Score1--
    team2Score--
    document.querySelector(".team22").innerText = team2Score1
    document.querySelector(".teamscore2").innerText = team2Score
}


function twoPoint1(){
    team1Score1 = team1Score1 + 2
    team1Score = team1Score + 2
    document.querySelector(".team11").innerText = team1Score1
    document.querySelector(".teamscore1").innerText = team1Score
}
function twoPoint2(){
    team2Score1 = team2Score1 + 2
    team2Score = team2Score + 2
    document.querySelector(".team22").innerText = team2Score1
    document.querySelector(".teamscore2").innerText = team2Score
}

function threePoint1(){
    team1Score1 = team1Score1 + 3
    team1Score = team1Score1 + 3
    document.querySelector(".team11").innerText = team1Score1
    document.querySelector(".teamscore1").innerText = team1Score
}
function threePoint2(){
    team2Score1 = team2Score1 + 3
    team2Score = team2Score + 3
    document.querySelector(".team22").innerText = team2Score1
    document.querySelector(".teamscore2").innerText = team2Score
}

function reset1(){
    team1Score1 = 0
    document.querySelector(".team11").innerText = team1Score1
}
function reset2(){
    team2Score1 = 0
    document.querySelector(".team22").innerText = team2Score1
}


