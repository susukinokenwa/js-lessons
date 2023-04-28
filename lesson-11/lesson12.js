const data = [
    {
        name: 'Sker',
        grade: 9
    },
    {
        name: 'Ciy',
        grade: 9
    },
    {
        name: 'Nasa',
        grade: 10
    },
]

data.forEach(function(element){

    console.log(element)

    document.querySelector('.yees').innerHTML += 
    `<h2>${element.name}</h2>
    <p>Grade: ${element.grade}</p>
    `
})


//filter

/*
const instruments = ['piano', 'violin', 'trumpet', 'cello', 'flute']

const filteredMusic = instruments.filter(function(element){
    console.log(`we are instruments: `, element)
    return element !== 'trumpet'
}

)
*/

const number = [1, 2, 3, 4, 5, 6, 6,7, 7, 8, 8]

const filteredNum = number.filter(function(element){
    console.log(`This is number: `, element)
    return element !== 3

})
