

//attacking
let attacking = []

    function attackClick(){
        //1. read the value from the imput
        const atkNameData = document.querySelector("#attackName").value
        const atkFuncData = document.querySelector("#attackType").value
        const atkImageData = document.querySelector("#attackImage").value
        const atkDmgData = document.querySelector("#attackDamage").value
        const atkWeaponData = document.querySelector("#attackWeapon").value
        const atkRangeData = document.querySelector("#attackRange").value
        //console.log the value
        console.log(atkNameData, atkFuncData, atkImageData, atkDmgData, atkWeaponData, atkRangeData)
    
        //3. Ccreate object with form data
    let attackBot = {
        name : atkNameData,
        HP : atkFuncData,
        image : atkImageData,
        damage : atkDmgData,
        weapon: atkWeaponData,
        range: atkRangeData
    } 

        
        //4. add that data to my array
        attacking.push(attackBot)

    }
    

//healing
let healing = []

function healClick(){
    //1. read the value from the imput
    const healNameData = document.querySelector("#healerName").value
    const healHpData = document.querySelector("#healerHP").value
    const healImageData = document.querySelector("#healImage").value
    const healData = document.querySelector("#healDamage").value
    const healWeaponData = document.querySelector("#healWeapon").value
    const healRangeData = document.querySelector("#healRange").value
    //console.log the value
    console.log(healNameData, healHpData, healImageData, healData, healWeaponData, healRangeData)

    //3. create object with form data
let healBot = {
    name : healNameData,
    function : healHpData,
    image : healImageData,
    damage : healData,
    weapon: healWeaponData,
    range: healRangeData
} 

    
    //4. add that data to my array
    healing.push(healBot)

}


//shooter
let shooting = []

    function shootClick(){
        //1. read the value from the imput
        const stNameData = document.querySelector("#shootName").value
        const stFuncData = document.querySelector("#shootType").value
        const stImageData = document.querySelector("#shootImage").value
        const stDmgData = document.querySelector("#shootDamage").value
        const stWeaponData = document.querySelector("#shootWeapon").value
        const stRangeData = document.querySelector("#shootRange").value
        //console.log the value
        console.log(stNameData, stFuncData, stImageData, stDmgData, stWeaponData, stRangeData)
    
        //3. Ccreate object with form data
    let shootBot = {
        name : stNameData,
        HP : stFuncData,
        image : stImageData,
        damage : stDmgData,
        weapon: stWeaponData,
        range: stRangeData
    } 

        
        //4. add that data to my array
        shooting.push(shootBot)

    }
    
