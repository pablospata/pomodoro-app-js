const audio = document.getElementById('audio');
const iniciarBoton = document.querySelector('.start');
const pararBoton = document.querySelector('.stop');

iniciarBoton.addEventListener('click', function () {    
    audio.play();    
});

pararBoton.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;    
});