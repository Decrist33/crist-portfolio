<script lang="ts">
	import { hoverSound } from '$lib/actions/hoverSound';
	import type { Technology } from '$lib/types';
	import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';

	interface Props {
		technology: Technology;
		soundEnabled: boolean;
	}

	let { technology, soundEnabled = true }: Props = $props();
	let showTooltip = $state(false);
	let buttonEl: HTMLElement | undefined = $state();
	let tooltipEl: HTMLElement | undefined = $state();
	let arrowEl: HTMLElement | undefined = $state();

	let soundUrl = '/sounds/pop.mp3';

	async function updateTooltipPosition() {
		if (!buttonEl || !tooltipEl || !arrowEl) return;

		const { x, y, placement, middlewareData } = await computePosition(buttonEl, tooltipEl, {
			placement: 'top',
			middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowEl })]
		});

		Object.assign(tooltipEl.style, {
			left: `${x}px`,
			top: `${y}px`
		});

		// Position the arrow
		if (middlewareData.arrow) {
			const { x: arrowX, y: arrowY } = middlewareData.arrow;
			const side = placement.split('-')[0];

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right'
			}[side];

			Object.assign(arrowEl.style, {
				left: arrowX != null ? `${arrowX}px` : '',
				top: arrowY != null ? `${arrowY}px` : '',
				right: '',
				bottom: '',
				[staticSide!]: '-4px'
			});
		}
	}

	$effect(() => {
		if (showTooltip) {
			updateTooltipPosition();
		}
	});
</script>

<div class="relative inline-block">
	<button
		bind:this={buttonEl}
		use:hoverSound={{ src: soundUrl, enabled: soundEnabled, volume: 0.3 }}
		class="h-7 px-3 rounded-md text-xs transition-all duration-200
		flex items-center justify-center gap-1.5 hover:scale-105 {technology.bgColor ||
			'bg-secondary'} {technology.textColor || 'text-primary'}"
		onmouseenter={() => (showTooltip = true)}
		onmouseleave={() => (showTooltip = false)}
	>
		{#if technology.logo}
			<span class="leading-none">{technology.logo}</span>
		{/if}
		<span class="leading-none">{technology.name}</span>
	</button>

	{#if technology.tooltip && showTooltip}
		<div
			bind:this={tooltipEl}
			class="fixed px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md z-50 shadow-lg border border-gray-700 max-w-xs"
			style="top: 0; left: 0;"
		>
			{technology.tooltip}
			<div
				bind:this={arrowEl}
				class="absolute w-2 h-2 bg-gray-900 border-gray-700 rotate-45"
				style="border-width: 0 1px 1px 0;"
			></div>
		</div>
	{/if}
</div>
