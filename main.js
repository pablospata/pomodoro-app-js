const stopwatch = document.getElementById('stopwatch');
const ding = document.getElementById('ding');
const ring = document.getElementById('ring');
const closes = document.getElementById('closes');
const iniciarBoton = document.querySelector('.start');
const pararBoton = document.querySelector('.stop');

iniciarBoton.addEventListener('click', function () {
    ding.play();
    setTimeout(() => {
        stopwatch.play();
    }, 600);
});

pararBoton.addEventListener('click', function () {
    stopwatch.pause();
    closes.play();

    stopwatch.currentTime = 0;
});

stopwatch.addEventListener('timeupdate', () => {    
    
    if (stopwatch.currentTime >= 25*60) {
        ring.play();
        stopwatch.pause();
    }
});