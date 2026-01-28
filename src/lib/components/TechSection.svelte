<script lang="ts">
	import type { SkillsProps } from '$lib/types';
	import { onMount } from 'svelte';
	import ItemList from './ItemList.svelte';

	interface Props {
		skillsArray: SkillsProps[];
	}

	let { skillsArray }: Props = $props();

	let techDiv: HTMLDivElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.4 }
		);

		if (techDiv) {
			observer.observe(techDiv);
		}

		return () => {
			if (techDiv) {
				observer.unobserve(techDiv);
			}
		};
	});
</script>

<div class=" min-h-screen flex flex-col justify-center items-center">
	<h3 class="text-2xl sm:text-3xl md:text-4xl mb-2 lg:mb-4 cursor-default">Technologies</h3>
	<div
		bind:this={techDiv}
		class=" flex flex-col justify-start items-start border-2 border-solid border-primary transition-all duration-300
			w-full max-w-5xl p-4 sm:p-6 rounded-md backdrop-blur-xs bg-black/20 {isVisible
			? 'opacity-100 scale-100'
			: 'opacity-0 scale-75'}"
	>
		{#each skillsArray as skill}
			<ItemList title={skill.title} items={skill.skills} />
		{/each}
	</div>
</div>
