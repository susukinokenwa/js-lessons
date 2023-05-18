


var song1 = document.getElementById("song1");
var icon = document.getElementById("play");
var next = document.getElementById(`next`);


var song2 = document.getElementById("song2");
var icon1 = document.getElementById("play1");
var next1 = document.getElementById(`next1`);

var song3 = document.getElementById("song3");
var icon2 = document.getElementById("play2");
var next2 = document.getElementById(`next2`);





icon.onclick = function(){
   

    song1.play()
    song2.pause();
    song3.pause();
    document.querySelector(`.tt12`).innerHTML = `Stay - Diwas Malla`

}

next.onclick = function(){

    song1.pause();



}


icon1.onclick = function(){
   

    song2.play();
    song3.pause();
    song1.pause();
    document.querySelector(`.abt12`).innerHTML = `Sonzai - Diwas Malla`
}
next1.onclick = function(){

    song2.pause();



}



icon2.onclick = function(){
   

    song3.play()
    song1.pause();
    song2.pause();
    document.querySelector(`.wk12`).innerHTML = `Rockstar - Diwas Malla`
}
next2.onclick = function(){

    song3.pause();



}










