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




