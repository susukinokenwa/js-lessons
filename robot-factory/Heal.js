



//healing
let healing = []

//get data
const gotHealData = localStorage.getItem("healBotArray")

//convert back to JSON
const cvtHealData = JSON.parse(gotHealData)
healing = cvtHealData


if(cvtHealData){
    
    cvtHealData.forEach(function(element){
   
    console.log(element)

    document.querySelector('.healRobotLine1').innerHTML +=
    
    ` <img class="AKimage" src= '${element.image}'/>
    <div class="atkkkk">
    <h2 class="atkttt1">${element.name}</h2>
    <p class="atkkkk2">___________</p>
    <p class="atkkkk3">HP: ${element.HP}</p>
    <p class="atkkkk3">damage: ${element.damage}</p>
    <p class="atkkkk3">attack range: ${element.range}</p> 
    
    <br>
    </div>
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
    ` <img class="AKimage" src= '${element.image}'/>
        <div class="atkkkk">
        <h2 class="atkttt1">${element.name}</h2>
        <p class="atkkkk2">___________</p>
        <p class="atkkkk3">HP: ${element.HP}</p>
        <p class="atkkkk3">damage: ${element.damage}</p>
        <p class="atkkkk3">attack range: ${element.range}</p> 
        
        <br>
        </div>
        `
})
}

function healClick1(){
    //get value from form
    const clrHealBot = document.querySelector(`.healClear`).value

    //filter out robots
    const filteredHeal1 = healing.filter(function(element){
        return element.name !== clrHealBot

    })

    //update healing
    healing = filteredHeal1

    //clear the screen
    document.querySelector(`.healRobotLine1`).innerHTML = ''



    //update the screen
    filteredHeal1.forEach(function(element){
        
        document.querySelector(`.healRobotLine`).innerHTML +=
        `
        <img class="AKimage" src= '${element.image}'/>
            <div class="atkkkk">
            <h2 class="atkttt1">${element.name}</h2>
            <p class="atkkkk2">___________</p>
            <p class="atkkkk3">HP: ${element.HP}</p>
            <p class="atkkkk3">damage: ${element.damage}</p>
            <p class="atkkkk3">attack range: ${element.range}</p> 
            
            <br>
        </div>
        `
    })

}



