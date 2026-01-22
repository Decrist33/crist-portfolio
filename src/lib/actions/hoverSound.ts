// lib/actions/hoverSound.ts
interface SoundOptions {
	src: string;
	enabled: boolean;
	volume?: number;
}

export function hoverSound(node: HTMLElement, options: SoundOptions) {
	let { src, enabled, volume = 0.4 } = options;
	let audio = new Audio(src);

	const playSound = () => {
		if (!enabled) return;

		audio.volume = volume;
		audio.currentTime = 0;
		audio.play().catch(() => {
			/* Handle autoplay blocks silently */
		});
	};

	node.addEventListener('mouseenter', playSound);

	return {
		update(newOptions: SoundOptions) {
			enabled = newOptions.enabled;
			volume = newOptions.volume ?? 0.4;

			if (newOptions.src !== src) {
				src = newOptions.src;
				audio = new Audio(src);
			}
		},
		destroy() {
			node.removeEventListener('mouseenter', playSound);
		}
	};
}
