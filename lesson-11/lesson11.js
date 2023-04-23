//save data to your computer

//localStorage.setItem('pet', 'dog')
//localStorage.setItem('petName', 'Yee')
//localStorage.setItem('petAge', '6')

//get data from your local storage
const petName = localStorage.getItem('petName')
const petAge = localStorage.getItem('petAge')
const pet = localStorage.getItem('pet')
    console.log(pet)
    console.log(petAge)
    console.log(petName)


//update pet
function updatePet(){
    //get data from form
    const newpet = document.querySelector('#pet').value
    const newpetName = document.querySelector('#petName').value
    const newpetAge = document.querySelector('#petAge').value

    //save data in local storage
    localStorage.setItem('pet', newpet)
    localStorage.setItem('petName', newpetName)
    localStorage.setItem('petAge', newpetAge)

    //console.log new pet data
    console.log(newpet)
    console.log(newpetAge)
    console.log(newpetName)
}



//local storage stires everything as a string


const data = [
    {
        name: 'yee',
        grade: 103
    },
    {
        name: 'ean',
        grade: 130
    },
]


//convert data to string
const stringData = JSON.stringify(data)

//save to local storage
localStorage.setItem("studentArray", stringData)

//get data
const gotData = localStorage.getItem("studentArray")

//convert back to JSON
const converteData = JSON.parse(gotData)

console.log(converteData[0])


