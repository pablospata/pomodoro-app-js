/*let audio = document.getElementById('audio');

console.log(audio)


audio.play();
*/

const audio = document.getElementById('audio');

const iniciar = document.getElementById('iniciar');
/*
audio.addEventListener('ended', function () {
    this.currentTime = 30;    
    this.play();    

}, false);
*/

iniciar.addEventListener('click', function () {
    console.log(audio)

    // audio.currentTime = 50;    

    audio.play();
});

const finDelAudio = 59;
audio.addEventListener('timeupdate', () => {
    console.log(audio.currentTime);

    if (audio.currentTime >= finDelAudio) {
        audio.currentTime = 0.8; 
        audio.play(); 
    }
});