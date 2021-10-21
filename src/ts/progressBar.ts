/** Progress bar */
let getCurrentTime: any = null;

const updateProgressBar = (audio: HTMLAudioElement | null): void => {
	const progressBar: HTMLElement | null =
		document.querySelector('.progressbar');

	getCurrentTime = setInterval(() => {
		if (audio) {
			const current = parseInt(`${audio.currentTime}`);
			let progress = current / audio.duration;

			if (progressBar) {
				progressBar.style.transform = `scaleX(${progress})`;
			}
		}
	}, 1000);
};

export { getCurrentTime, updateProgressBar };
