/*
class candy{
    constructor(color, taste){
        this.color = color
        this.taste = taste
        //default propertiess\
        this.cost = "1000NTD"

}
    //default methods
    eatCandy(){
        console.log('candy was eaten...')
    }

    getCookieinfo(){
        console.log(`this is a ${this.color} candy which cost ${this.cost}, and it taste ${this.taste}`)
    }
}

const candy1 = new candy("green", "bad")

*/

class Movie{
    constructor(name, director){
        this.name = name
        this.director = director
        this.type = "anime"
    }
}

const movie1 = new Movie("Suzume", "Makoto Shinkai")
const movie2 = new Movie("Your Name.", "Makoto Shinkai")
const movie3 = new Movie("A Whisker Away", "Junichi Sato and Tomotaka Shibayama")

class Song{
    constructor(name1, singer){
        this.name1 = name1
        this.singer = singer
        this.type = "Jpop"
    }

    introduceSong(){
        console.log(`${this.name1} is a ${this.type} song singed by ${this.singer}.`)
    }
}


const song1 = new Song("Say it.", "Yorushika")
const song2 = new Song("Yoku", "Eve")
const song3 = new Song("Yoru ni Kakeru", "YOASOBI")

