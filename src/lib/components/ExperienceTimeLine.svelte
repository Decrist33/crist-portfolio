<!-- ExperienceTimeline.svelte -->
<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import type { Experience } from '$lib/types';

	interface Props {
		experiences: Experience[];
	}

	let { experiences }: Props = $props();
</script>

<div class="w-full max-w-7xl mx-auto py-4 lg:py-12">
	<div class="space-y-0 flex flex-col justify-start items-center">
		{#each experiences as experience, i}
			<ExperienceCard {experience} />

			{#if i < experiences.length - 1}
				<div class="flex justify-center py-4 sm:py-8">
					<div class="w-0.5 h-10 sm:h-14 bg-white/30"></div>
				</div>
			{/if}
		{/each}
	</div>
</div>
