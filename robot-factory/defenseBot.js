//shooter = defenser

let defensing = []

//get data
const gotDefData = localStorage.getItem("defenseBotArray")

//convert back to JSON
const cvtDefData = JSON.parse(gotDefData)
defensing = cvtDefData



if(cvtDefData){
    document.querySelector(`.defRobotLine1`)
    cvtDefData.forEach(function(element){

    console.log(element)
    
    document.querySelector('.defRobotLine1').innerHTML +=
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




    document.querySelector('.defRobotLine1').innerHTML = ""
    defensing.forEach(function(element){

    console.log(element)
    
    document.querySelector('.defRobotLine1').innerHTML +=
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
    
function defenseClick1(){
    //get value from form
    //document.querySelector(`defRobotLine1`).innerHTML = ""
    const clrDfsBot = document.querySelector(`.dfsClear`).value

    console.log(`user typed`, clrDfsBot)


    //filter out robots
    const filteredDfs1 = defensing.filter(function(element){

        return element.name !== clrDfsBot

    })    

    console.log(`filtered defense robots: `, filteredDfs1)

    //updating defensing
    defensing = filteredDfs1    

    //clear the screen
    document.querySelector(`.defRobotLine1`).innerHTML = ''

    //update thte screen
    filteredDfs1.forEach(function(element){
        console.log(`forEach for filtered defense bot`, element)
        document.querySelector(`.defRobotLine1`).innerHTML +=
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
