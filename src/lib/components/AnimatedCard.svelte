<script lang="ts">
	interface AnimatedCardProps {
		animated?: boolean;
		animationType?: 'draw' | 'meet' | 'center';
		borderColor?: string;
		hoverColor?: string;
		customClass?: string;
		children?: import('svelte').Snippet;
	}

	let {
		animated = false,
		animationType = 'draw',
		borderColor = '#ef4444',
		hoverColor = '#06b6d4',
		customClass = '',
		children
	}: AnimatedCardProps = $props();
</script>

<div
	class=" overflow-hidden animated-border p-4 sm:p-6 rounded-md backdrop-blur-xs {animated
		? animationType
		: ''} {customClass}"
	style="--border-color: {borderColor}; --hover-color: {hoverColor};"
>
	{@render children?.()}
</div>

<style>
	.animated-border {
		box-sizing: border-box;
		box-shadow: inset 0 0 0 2px var(--border-color);
		color: var(--border-color);
		position: relative;

		&::before,
		&::after {
			box-sizing: inherit;
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: inherit;
			pointer-events: none;
		}
	}

	.center {
		transition: color 0.25s;

		&:hover {
			color: var(--hover-color);
		}

		&::before,
		&::after {
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			transform-origin: center;
			border-radius: inherit;
		}

		&::before {
			border-top: 3px solid var(--hover-color);
			border-bottom: 3px solid var(--hover-color);
			transform: scale3d(0, 1, 1);
			border-radius: inherit;
		}

		&::after {
			border-left: 3px solid var(--hover-color);
			border-right: 3px solid var(--hover-color);
			transform: scale3d(1, 0, 1);
			border-radius: inherit;
		}

		&:hover::before,
		&:hover::after {
			transform: scale3d(1, 1, 1);
			transition: transform 0.5s;
			border-radius: inherit;
		}
	}

	.draw {
		transition: color 0.25s;

		&::before,
		&::after {
			border: 2px solid transparent;
			width: 0;
			height: 2%;
			border-radius: inherit;
		}

		&::before {
			top: 0;
			left: 0;
		}

		&::after {
			bottom: 0;
			right: 0;
		}

		&:hover {
			color: var(--hover-color);
		}

		&:hover::before,
		&:hover::after {
			width: 100%;
			height: 100%;
		}

		&:hover::before {
			border-top-color: var(--hover-color);
			border-right-color: var(--hover-color);
			transition:
				width 0.2s ease-out,
				height 0.2s ease-out 0.2s;
		}

		&:hover::after {
			border-bottom-color: var(--hover-color);
			border-left-color: var(--hover-color);
			transition:
				border-color 0s ease-out 0.4s,
				width 0.2s ease-out 0.4s,
				height 0.2s ease-out 0.6s;
		}
	}

	.meet {
		transition: color 0.25s;

		&::before,
		&::after {
			border: 2px solid transparent;
			width: 0;
			height: 0;
			border-radius: inherit;
		}

		&::before {
			top: 0;
			left: 0;
		}

		&::after {
			top: 0;
			left: 0;
		}

		&:hover {
			color: var(--hover-color);
		}

		&:hover::before,
		&:hover::after {
			width: 100%;
			height: 100%;
		}

		&:hover::before {
			border-top-color: var(--hover-color);
			border-right-color: var(--hover-color);
			transition:
				width 0.25s ease-out,
				height 0.25s ease-out 0.25s;
		}

		&:hover::after {
			border-bottom-color: var(--hover-color);
			border-left-color: var(--hover-color);
			transition:
				height 0.25s ease-out,
				width 0.25s ease-out 0.25s;
		}
	}
</style>
