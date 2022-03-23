let songName = document.getElementById('songName');
let submit = document.getElementById('submit')

let songs = document.getElementsByClassName('songs')
let x =""
let count = 0;
function addSong(){
    
    for(let i = 0 ; i<3; i++){
    count = 0 
    songs[count].innerHTML = songName.value;
           
    }
    count++
    

}
