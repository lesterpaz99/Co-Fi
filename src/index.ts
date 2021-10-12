import './main.scss';

// audio from MP3CHIDO
const audio: HTMLAudioElement | null = document.querySelector('#player');

// Buttons
const playBtn: HTMLButtonElement | null = document.querySelector('#play');
const muteBtn: HTMLButtonElement | null = document.querySelector('#mute');
const muteIcon: any = muteBtn?.firstElementChild;

const backBtn: HTMLButtonElement | null = document.querySelector('#back');
const forwardBtn: HTMLButtonElement | null = document.querySelector('#forward');

const playIcon: HTMLImageElement | any = playBtn?.firstElementChild; // Image

// Events
playBtn?.addEventListener('click', () => {
  if (audio?.paused) {
    audio.play();
    playIcon.src = 'https://img.icons8.com/ios-glyphs/50/000000/pause--v1.png';
    return;
  }
  audio?.pause();
  playIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/play--v1.png';
});



muteBtn?.addEventListener('click', () => {
  if (audio) {
    const volume = audio.volume;
    if (volume === 0) {
      audio.volume = 1;
      muteIcon.src = 'https://img.icons8.com/ios-filled/24/000000/high-volume--v1.png';
      return;
    }
    audio.volume = 0;
    muteIcon.src = 'https://img.icons8.com/material-sharp/24/000000/mute.png';
  }
});

forwardBtn?.addEventListener('click', () => {
  if (audio) {
    const currentTime = audio.currentTime;
    audio.currentTime = currentTime + 10;
  }
});

backBtn?.addEventListener('click', () => {
  if (audio) {
    const currentTime = audio.currentTime;
    audio.currentTime = currentTime - 10;
  }
})