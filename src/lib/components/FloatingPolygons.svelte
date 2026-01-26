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
	export let count = 15;
	export let minSize = 20;
	export let maxSize = 60;

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let frame: number;
	let polygons: Polygon[] = [];
	let globalEntranceAlpha = 0;
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
		const sides = [triangle, square, pentagon, hexagon][Math.floor(Math.random() * 4)];
		return {
			x: Math.random() * width,
			y: isInitial ? Math.random() * height : height + 100,
			size: Math.random() * (maxSize - minSize) + minSize,
			sides: sides,
			rotation: Math.random() * Math.PI * 2,
			speed: Math.random() * deaccelerator + speed,
			spin: (Math.random() - deaccelerator) * speed,
			opacity: 1
		};
	};

	const drawRoundedPolygon = (p: Polygon) => {
		const dissapearDetonant = 200;
		const lifeRatio = Math.max(p.y - dissapearDetonant, 0) / height;

		let fade = 1;
		const margin = 0.2;

		if (lifeRatio > 1 - margin) {
			fade = (1 - lifeRatio) / margin;
		} else if (lifeRatio < margin) {
			fade = lifeRatio / margin;
		}

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

		ctx.fillStyle = `rgba(0, 0, 0, ${currentOpacity})`;
		ctx.fill();

		ctx.lineJoin = 'round';
		ctx.lineWidth = 2;
		ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity})`;
		ctx.stroke();
	};

	const animate = () => {
		if (globalEntranceAlpha < 1) globalEntranceAlpha += 0.01;

		ctx.clearRect(0, 0, width, height);
		ctx.globalAlpha = globalEntranceAlpha;

		polygons.forEach((p, i) => {
			p.y -= p.speed;
			p.rotation += p.spin;

			drawRoundedPolygon(p);

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

		window.addEventListener('resize', resize);
		resize();

		polygons = Array.from({ length: count }, () => createPolygon(true));
		animate();

		return () => {
			window.removeEventListener('resize', resize);
		};
	});

	onDestroy(() => {
		if (frame) cancelAnimationFrame(frame);
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
