



//healing
let healing = []
//get data
const gotHealData = localStorage.getItem("healBotArray")

//convert back to JSON
const cvtHealData = JSON.parse(gotHealData)


if(cvtHealData){
    
    cvtHealData.forEach(function(element){
   
    console.log(element)

    document.querySelector('.healRobotLine').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>How much HP it heals: ${element.damage}</p>
    <p>attack range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})

}






function healClick(){
    //1. read the value from the imput
    const healNameData = document.querySelector("#healerName").value
    const healHpData = document.querySelector("#healerHP").value
    const healImageData = document.querySelector("#healImage").value
    const healData = document.querySelector("#healDamage").value
    const healRangeData = document.querySelector("#healRange").value
    //console.log the value
    console.log(healNameData, healHpData, healImageData, healData, healRangeData)

    //3. create object with form data
let healBot = {
    name : healNameData,
    HP : healHpData,
    image : healImageData,
    damage : healData,
    range: healRangeData
} 



    
    //4. add that data to my array
    healing.push(healBot)

    //convert data to string
    let strHealData = JSON.stringify(healing)

    //save to local storage
    localStorage.setItem("healBotArray", strHealData)


    document.querySelector('.healRobotLine1').innerHTML = ""
    healing.forEach(function(element){

    console.log(element)
    
    document.querySelector('.healRobotLine1').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>HP it heals: ${element.damage}</p>
    <p>heal range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})
}




