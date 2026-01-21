<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="h-dvh pb-[env(safe-area-inset-bottom)] w-screen relative overflow-y-auto scroll-smooth">
	{@render children()}
</div>
