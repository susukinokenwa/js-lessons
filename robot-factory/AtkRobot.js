

//attacking

let attacking = []

//get data
const gotAtkData = localStorage.getItem("atkBotArray")

//convert back to JSON
const cvtAtkData = JSON.parse(gotAtkData)
attacking = cvtAtkData

console.log(gotAtkData)

if(cvtAtkData){
        document.querySelector('.atkRobotLine1').innerHTML = ""
        cvtAtkData.forEach(function(element){

        console.log(element)
        
        document.querySelector('.atkRobotLine1').innerHTML +=
    
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

     

     //convert data to string
     let strAtkData = JSON.stringify(cvtAtkData)
 
     //save to local storage
     localStorage.setItem("atkBotArray", strAtkData)

    // attacking.push(cvtAtkData)
}
    







function attackClick(){
    //1. read the value from the imput
    const atkNameData = document.querySelector("#attackName").value
    const atkFuncData = document.querySelector("#attackType").value
    const atkImageData = document.querySelector("#attackImage").value
    const atkDmgData = document.querySelector("#attackDamage").value
    const atkRangeData = document.querySelector("#attackRange").value
    //console.log the value
    console.log(atkNameData, atkFuncData, atkImageData, atkDmgData,  atkRangeData)

    //3. Create object with form data
    let attackBot = {
        name : atkNameData,
        HP : atkFuncData,
        image : atkImageData,
        damage : atkDmgData,
        range: atkRangeData
    } 

    //4. add that data to my array
    attacking.push(attackBot)

    //convert data to string
    let strAtkData = JSON.stringify(attacking)

    //save to local storage
    localStorage.setItem("atkBotArray", strAtkData)
    
    
    document.querySelector('.atkRobotLine1').innerHTML = ""
    attacking.forEach(function(element){

    console.log(element)
    
    document.querySelector('.atkRobotLine1').innerHTML +=

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





function attackClick1(){
    // get value from form
    document.querySelector('.atkRobotLine1').innerHTML = ""
    const clrAtkBot = document.querySelector(`.atkClear`).value

    console.log(`user typed`,clrAtkBot)


    // filter out robots
    const filteredAtk1 = attacking.filter(function(robot){
        // console.log(`This is attack robot: `, robot)
        return robot.name !== clrAtkBot
    })

    console.log('filtered attack robots:', filteredAtk1)
    //document.querySelector(``).innerHTML  
    

    // update attacking
    attacking = filteredAtk1
    

    // clear the screen
    document.querySelector('.atkRobotLine1').innerHTML = ''

    // update the screen
    filteredAtk1.forEach(function(element){

        console.log('forEach for filteredAtk1:', element)
        
        document.querySelector('.atkRobotLine1').innerHTML +=
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

    // save to ls
    

     
 

    
}







/*


//healing

//get data
const gotHealData = localStorage.getItem("healArray")

//convert back to JSON
const cvtHealData = JSON.parse(gotHealData)


if(cvtHealData){
    
    cvtHealData.forEach(function(element){
    document.querySelector('.healRobotLine').innerHTML = ""
    console.log(element)
    
    document.querySelector('.healRobotLine').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>damage: ${element.damage}</p>
    <p>attack range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})

}




let healing = []

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
    function : healHpData,
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


    document.querySelector('.healRobotLine').innerHTML = ""
    healing.forEach(function(element){

    console.log(element)
    
    document.querySelector('.healRobotLine').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>damage: ${element.damage}</p>
    <p>attack range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})
}









/*
//shooter = defenser

//get data
const gotDefData = localStorage.getItem("defenseBotArray")

//convert back to JSON
const cvtDefData = JSON.parse(gotDefData)


let defensing = []

function defenseClick(){
    //1. read the value from the imput
    const stNameData = document.querySelector("#shootName").value
    const stFuncData = document.querySelector("#shootType").value
    const stImageData = document.querySelector("#shootImage").value
    const stDmgData = document.querySelector("#shootDamage").value
    const stRangeData = document.querySelector("#shootRange").value
    //console.log the value
    console.log(stNameData, stFuncData, stImageData, stDmgData, stRangeData)
    
    //3. Ccreate object with form data
    let defenseBot = {
        name : stNameData,
        HP : stFuncData,
        image : stImageData,
        damage : stDmgData,
       
        range: stRangeData
    } 

        
    //4. add that data to my array
    defensing.push(defenseBot)

    //convert data to string
    let strDefData = JSON.stringify(defensing)

    //save to local storage
    localStorage.setItem("defenseBotArray", strDefData)




    document.querySelector('.defRobotLine').innerHTML = ""
    defensing.forEach(function(element){

    console.log(element)
    
    document.querySelector('.defRobotLine').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>damage: ${element.damage}</p>
    <p>attack range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})
    
}
    
*/