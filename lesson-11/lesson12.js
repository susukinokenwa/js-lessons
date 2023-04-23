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