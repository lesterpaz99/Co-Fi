const mute = (audio: HTMLAudioElement | null, muteIcon: any): void => {
	if (audio) {
		const volume = audio.volume;
		if (volume === 0) {
			audio.volume = 1;
			muteIcon.src =
				'https://img.icons8.com/ios-filled/24/000000/high-volume--v1.png';
			return;
		}
		audio.volume = 0;
		muteIcon.src = 'https://img.icons8.com/material-sharp/24/000000/mute.png';
	}
};

export default mute;
