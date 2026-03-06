// Elements
const playBtn = document.getElementById('playBtn');
const imgBtn = document.getElementById('imgBtn');
const audio1 = document.getElementById('myAudio');
const audio2 = document.getElementById('myAudio2');

// Logic for the first button (Surprise)
playBtn.addEventListener('click', () => {
    audio1.play();
    playBtn.innerText = "Playing... 🎶";
});

// Sound 1 sakeypachhi 'Replay' ma change garne
audio1.onended = function() {
    playBtn.innerText = "Replay";
};

// Logic for the image button (sound2)
imgBtn.addEventListener('click', () => {
    // sound 2 play garchha
    audio2.currentTime = 0; // Click garda starting bata play hos
    audio2.play();
});