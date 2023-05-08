


const song1 = new Audio(`audio/02.mp3`)


function playSong2(){
    console.log(`play song!`)
    song1.play()
    song2.pause()
    song3.pause()


}

function pauseSong2(){
    console.log(`song paused...`)
    song1.pause()
}

function loadSong2(){
    console.log(`song restarted...`)
    song1.load()

}




const song2 = new Audio(`audio/01.mp3`)

function playSong1(){
    console.log(`play song!`)
    song2.play()
    song1.pause()
    song3.pause()


}

function pauseSong1(){
    console.log(`song paused...`)
    song2.pause()
}

function loadSong1(){
    console.log(`song restarted...`)
    song2.load()


}


const song3 = new Audio(`audio/03.mp3`)

function playSong3(){
    console.log(`play song!`)
    song3.play()
    song2.pause()
    song1.pause()


}

function pauseSong3(){
    console.log(`song paused...`)
    song3.pause()
}

function loadSong3(){
    console.log(`song restarted...`)
    song3.load()

}
