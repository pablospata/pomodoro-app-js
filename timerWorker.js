let timer;
let timeLeft = 1500; // 25 minutos en segundos
let breakTimeLeft = 300; // 5 minutos en segundos
let onBreak = false;

self.addEventListener('message', (event) => {
    if (event.data === 'start') {
        clearInterval(timer); // Por si acaso hay uno ya funcionando
        timer = setInterval(() => {
            if (!onBreak) {
                timeLeft--;
                if (timeLeft < 0) {
                    onBreak = true;
                    self.postMessage({ type: 'break' }); 
                }
            } else {
                breakTimeLeft--;
                if (breakTimeLeft < 0) {
                    clearInterval(timer);
                    self.postMessage({ type: 'done' });
                    return;
                }
            }
            self.postMessage({ type: 'update', timeLeft: Math.max(0, timeLeft), breakTimeLeft: Math.max(0, breakTimeLeft) });
        }, 1000);
    } else if (event.data === 'stop') {
        clearInterval(timer);
    }
});
