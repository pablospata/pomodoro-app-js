const audio = document.getElementById('audio');
const iniciar = document.getElementById('iniciar');

iniciar.addEventListener('click', function () {
    audio.currentTime = inicioDelAudio;    
    audio.play();
});

const inicioDelAudio = 0
const finDelAudio = 60;
audio.addEventListener('timeupdate', () => {    
    if (audio.currentTime >= finDelAudio) {
        audio.currentTime = inicioDelAudio;         
        audio.play(); 
    }
});

