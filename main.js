/*const audio = document.getElementById('audio');
const iniciar = document.querySelector('.start');

iniciar.addEventListener('click', function () {
    audio.currentTime = inicioDelAudio;    
    audio.play();
});

const inicioDelAudio = 0.8
const finDelAudio = 59;
audio.addEventListener('timeupdate', () => {    
    if (audio.currentTime >= finDelAudio) {
        audio.currentTime = inicioDelAudio;         
        audio.play(); 
    }
});*/

const audio = document.getElementById('audio');
const iniciarBoton = document.querySelector('.start');
const pararBoton = document.querySelector('.stop');
const inicioDelAudio = 0;
// const finDelAudio = 0.910;
const finDelAudio = 0.899;
let isPlaying = false;

iniciarBoton.addEventListener('click', function () {
    audio.currentTime = inicioDelAudio;
    audio.play();
    isPlaying = true;
    updateAudioTime();
});

pararBoton.addEventListener('click', function () {
    audio.currentTime = inicioDelAudio;
    audio.pause();
    isPlaying = false;
});

function updateAudioTime() {
    if (isPlaying) {
        if (audio.currentTime >= finDelAudio) {
            audio.currentTime = inicioDelAudio;
            audio.play();
        }
        // console.log(audio.currentTime);
        requestAnimationFrame(updateAudioTime);
    }
}

audio.addEventListener('play', () => {
    isPlaying = true;
    updateAudioTime();
});

audio.addEventListener('pause', () => {
    isPlaying = false;
});

audio.addEventListener('ended', () => {
    isPlaying = false;
});


