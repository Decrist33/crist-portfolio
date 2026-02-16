<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="h-dvh pb-[env(safe-area-inset-bottom)] w-screen relative overflow-y-auto scroll-smooth scrollbar-modern"
>
	{@render children()}
</div>

<style>
	.scrollbar-modern {
		scrollbar-width: thin;
		scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
	}

	.scrollbar-modern::-webkit-scrollbar {
		width: 8px;
	}

	.scrollbar-modern::-webkit-scrollbar-track {
		background: transparent;
	}

	.scrollbar-modern::-webkit-scrollbar-thumb {
		background-color: rgba(156, 163, 175, 0.5);
		border-radius: 4px;
		transition: background-color 0.2s ease;
	}

	.scrollbar-modern::-webkit-scrollbar-thumb:hover {
		background-color: rgba(156, 163, 175, 0.8);
	}
</style>
