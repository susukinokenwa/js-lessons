//shooter = defenser

//get data
const gotDefData = localStorage.getItem("defenseBotArray")

//convert back to JSON
const cvtDefData = JSON.parse(gotDefData)



if(cvtDefData){
        
    cvtDefData.forEach(function(element){

    console.log(element)
    
    document.querySelector('.defRobotLine1').innerHTML +=
    `<h2>${element.name}</h2>
    <p>HP: ${element.HP}</p>
    <p>damage: ${element.damage}</p>
    <p>attack range: ${element.range}</p> 
    <p>image: ${element.image}</p>
    <br>
    `
})
}


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
    

