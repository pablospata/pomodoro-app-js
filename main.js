/*let audio = document.getElementById('audio');

console.log(audio)


audio.play();
*/

const audio = document.getElementById('audio');

const iniciar = document.getElementById('iniciar');
/*
audio.addEventListener('ended', function () {
    this.currentTime = 2;
    
    this.play();
    this.pause();
}, false);
*/
iniciar.addEventListener('click', function () {
    console.log(audio)
    audio.play();
});