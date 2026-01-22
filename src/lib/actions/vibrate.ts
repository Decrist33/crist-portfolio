// vibrate.ts
export function vibrate(node: HTMLElement, pattern: number | number[] = 50) {
	const handleTrigger = () => {
		if ('vibrate' in navigator) {
			navigator.vibrate(pattern);
		}
	};

	node.addEventListener('click', handleTrigger);

	return {
		destroy() {
			node.removeEventListener('click', handleTrigger);
		}
	};
}
