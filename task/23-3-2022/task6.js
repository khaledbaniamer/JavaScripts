let songName = document.getElementById('songName');
let submit = document.getElementById('submit')

function addSong(){
    document.getElementById('main').innerHTML +=  songName.value +`<br>`;
}
