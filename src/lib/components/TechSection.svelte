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

<div
	bind:this={techDiv}
	class=" min-h-screen flex flex-col justify-center items-center transition-all duration-300 {isVisible
		? 'opacity-100 translate-y-0'
		: 'opacity-0 translate-y-8'}"
>
	<h3 class="text-2xl sm:text-3xl md:text-4xl mb-2 lg:mb-4">Technologies</h3>
	<div
		class=" flex flex-col justify-start items-start border border-solid border-primary
			w-full max-w-5xl p-4 sm:p-6 rounded-md backdrop-blur-xs bg-black/20"
	>
		{#each skillsArray as skill}
			<ItemList title={skill.title} items={skill.skills} />
		{/each}
	</div>
</div>
