<script lang="ts">
	import type { Technology } from '$lib/types';
	import TechnologyChip from './TechnologyChip.svelte';

	// Define the shape of your props
	export let title: string = 'Other Technologies and Knowledge';
	export let items: Technology[] = [];
</script>

<div class="flex flex-col justify-start items-start mb-4">
	<h4 class="text-md mb-1">{title}</h4>
	<div class="w-full flex flex-wrap gap-2 justify-start">
		{#each items as item}
			<TechnologyChip technology={item} />
		{/each}
	</div>
</div>
