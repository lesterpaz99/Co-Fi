import './main.scss';
import play from './ts/play';
import mute from './ts/mute';

// audio from MP3CHIDO
const audio: HTMLAudioElement | null = document.querySelector('#player');

/** Buttons */
const playBtn: HTMLButtonElement | null = document.querySelector('#play');
const muteBtn: HTMLButtonElement | null = document.querySelector('#mute');
const backBtn: HTMLButtonElement | null = document.querySelector('#back');
const forwardBtn: HTMLButtonElement | null = document.querySelector('#forward');

// Images / Icons
const playIcon: HTMLImageElement | any = playBtn?.firstElementChild;
const muteIcon: any = muteBtn?.firstElementChild;

/** Events */
playBtn?.addEventListener('click', () => play(audio, playIcon));
muteBtn?.addEventListener('click', () => mute(audio, muteIcon));

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
});
