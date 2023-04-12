



//reading from valuess
// local storage

let name11 = []


function handleClick(){
    //1. read the value from the imput
    const nameData = document.querySelector("#name").value
    const teeData = document.querySelector("#name1").value
    //console.log the value
    console.log(nameData, teeData)
  
    //3. Ccreate object with form data
   const namee = {
    name : nameData,
    tee : teeData
   } 

    
    //4. add that data to my array
    name11.push(namee)

}