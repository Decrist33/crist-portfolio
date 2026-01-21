<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// --- Types & Interfaces ---
	interface Polygon {
		x: number;
		y: number;
		size: number;
		sides: number;
		rotation: number;
		speed: number;
		spin: number;
		opacity: number;
	}

	// --- Props ---
	export let count = 15; // Number of active polygons
	export let minSize = 20;
	export let maxSize = 60;

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let frame: number;
	let polygons: Polygon[] = [];
	let isVisible = false;
	let width = 0;
	let height = 0;

	const triangle = 3;
	const square = 4;
	const pentagon = 5;
	const hexagon = 6;

	const deaccelerator = 0.5;
	const speed = 0.001;

	// --- Logic ---
	const createPolygon = (isInitial = false): Polygon => {
		const sides = [triangle, square, pentagon, hexagon][Math.floor(Math.random() * 5)];
		return {
			x: Math.random() * width,
			y: isInitial ? Math.random() * height : height + 100, // Spawn below viewport
			size: Math.random() * (maxSize - minSize) + minSize,
			sides: sides,
			rotation: Math.random() * Math.PI * 2,
			speed: Math.random() * deaccelerator + speed,
			spin: (Math.random() - deaccelerator) * speed,
			opacity: 1
		};
	};

	const drawRoundedPolygon = (p: Polygon) => {
		// 1. Calculate Life Ratio (0 at bottom, 1 at top)
		const dissapearDetonant = 200;
		const lifeRatio = Math.max(p.y - dissapearDetonant, 0) / height;

		// 2. Calculate Fade Factor
		// This creates a bell-curve effect for opacity
		let fade = 1;
		const margin = 0.2; // 20% of the height for the transition

		if (lifeRatio > 1 - margin) {
			// Near bottom: Fade In (since they travel from height to 0)
			fade = (1 - lifeRatio) / margin;
		} else if (lifeRatio < margin) {
			// Near top: Fade Out
			fade = lifeRatio / margin;
		}

		// Fade stays between 0 and 1
		const currentOpacity = Math.max(0, Math.min(p.opacity * fade, 1));

		ctx.beginPath();
		const angleStep = (Math.PI * 2) / p.sides;

		for (let i = 0; i <= p.sides; i++) {
			const angle = i * angleStep + p.rotation;
			const x = p.x + p.size * Math.cos(angle);
			const y = p.y + p.size * Math.sin(angle);
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}

		ctx.closePath();

		const originalOpacity = 1;
		ctx.fillStyle = `rgba(0, 0, 0, ${currentOpacity * originalOpacity})`;
		ctx.fill();

		ctx.lineJoin = 'round';
		ctx.lineWidth = 2;
		ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity})`;
		ctx.stroke();
	};

	let globalEntranceAlpha = 0;

	const animate = () => {
		if (!isVisible) return;
		// Gradually increase global visibility when section is entered
		if (globalEntranceAlpha < 1) globalEntranceAlpha += 0.01;

		ctx.clearRect(0, 0, width, height);
		ctx.globalAlpha = globalEntranceAlpha; // Controls the whole canvas

		polygons.forEach((p, i) => {
			p.y -= p.speed;
			p.rotation += p.spin;

			drawRoundedPolygon(p);

			// If it goes off top, reset to bottom
			if (p.y < -p.size) {
				polygons[i] = createPolygon();
			}
		});

		frame = requestAnimationFrame(animate);
	};

	onMount(() => {
		ctx = canvas.getContext('2d')!;

		const resize = () => {
			width = canvas.parentElement?.clientWidth || 0;
			height = canvas.parentElement?.clientHeight || 0;
			canvas.width = width;
			canvas.height = height;
		};

		// Initialize observer
		const observer = new IntersectionObserver(
			(entries) => {
				isVisible = entries[0].isIntersecting;
				if (isVisible) animate();
			},
			{ threshold: 0.1 }
		);

		observer.observe(canvas);
		window.addEventListener('resize', resize);
		resize();

		// Initial population
		polygons = Array.from({ length: count }, () => createPolygon(true));

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas bind:this={canvas} class="floating-canvas"></canvas>

<style>
	.floating-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
		opacity: 0.6;
	}
</style>
