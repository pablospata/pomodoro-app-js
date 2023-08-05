const stopwatch = document.getElementById('stopwatch');
const ding = document.getElementById('ding');
const dong = document.getElementById('dong');
const ring = document.getElementById('ring');
const closes = document.getElementById('closes');
const iniciarBoton = document.querySelector('.start');
const pararBoton = document.querySelector('.stop');
const elapsedProgress = document.querySelector('.elapsed');
const breakProgress = document.querySelector('.break');

let pomodorosHoy = 0;

if (localStorage.getItem('pomodoros')) {
    pomodorosHoy = parseInt(localStorage.getItem('pomodoros'));        
}

document.getElementById('pomodoros-hoy').innerText = pomodorosHoy;

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

function estiloLongBreak() {
    elapsedProgress.style.width = 'calc(' + 25 + ' * 100% / ' + 40 + ')';
    breakProgress.style.width = 'calc(' + 15 + ' * 100% / ' + 40 + ')';
}


document.querySelector('.start').addEventListener('click', () => {
    worker.postMessage('start');
});

document.querySelector('.stop').addEventListener('click', () => {
    worker.postMessage('stop');
    document.querySelector('.progress span').textContent = '25:00';
    document.querySelector('.elapsed').value = 0;
});

const worker = new Worker('timerWorker.js');

worker.addEventListener('message', (event) => {
    if (event.data.type === 'update') {
        updateTimer(event.data.timeLeft, event.data.breakTimeLeft);
    } else if (event.data.type === 'break') {
        ring.play();
        stopwatch.pause();
        onBreak = true;
        pomodorosHoy++;
        document.getElementById('pomodoros-hoy').innerText = pomodorosHoy;
        localStorage.setItem('pomodoros', pomodorosHoy);
    } else if (event.data.type === 'done') {
        dong.play();
        document.querySelector('.elapsed').value = 0;
        document.querySelector('.break').value = 0;
        document.querySelector('.progress span').textContent = '25:00';
    }
});

let onBreak = false;
function updateTimer(timeLeft, breakTimeLeft) {
    if (!onBreak) {
        document.querySelector('.elapsed').value = 1500 - timeLeft;
        document.querySelector('.progress span').textContent = formatTime(timeLeft);
    } else {
        document.querySelector('.break').value = 300 - breakTimeLeft;
        document.querySelector('.progress span').textContent = formatTime(breakTimeLeft);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}
