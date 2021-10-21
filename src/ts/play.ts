import { getCurrentTime, updateProgressBar } from './progressBar';

const play = (audio: HTMLAudioElement | null, playIcon: any) => {
	if (audio?.paused) {
		audio.play();
		playIcon.src = 'https://img.icons8.com/ios-glyphs/50/000000/pause--v1.png';
		updateProgressBar(audio);
		return;
	}
	audio?.pause();
	playIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/play--v1.png';
	clearInterval(getCurrentTime);
};

export default play;
