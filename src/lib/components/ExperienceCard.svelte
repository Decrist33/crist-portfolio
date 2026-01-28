<script lang="ts">
	import { onMount } from 'svelte';
	import TechnologyChip from './TechnologyChip.svelte';
	import type { Experience } from '$lib/types';

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();
	let cardElement: HTMLDivElement;
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
			{ threshold: 0.2 }
		);

		if (cardElement) {
			observer.observe(cardElement);
		}

		return () => {
			if (cardElement) {
				observer.unobserve(cardElement);
			}
		};
	});

	const isLeft = experience.orientation === 'left';
</script>

<div
	bind:this={cardElement}
	class=" max-w-6xl rounded-md overflow-auto backdrop-blur-xs border-2 transition-all duration-300 hover:border-primary {isVisible
		? 'opacity-100 scale-100'
		: 'opacity-0 scale-75'} {experience.borderColor || 'border-secondary'}
		bg-black/20"
>
	<div class="p-4 sm:p-6">
		<!-- Title and Subtitle -->
		<div class="w-full mb-6 {isLeft ? 'text-left' : 'text-right'}">
			<h3 class="text-md sm:text-2xl font-bold text-white cursor-default">{experience.title}</h3>
			<div class="text-xs sm:text-sm text-gray-400 mb-1">{experience.subtitle}</div>
		</div>

		<!-- Content and Image -->
		<div
			class="flex flex-col {isLeft
				? 'lg:flex-row'
				: 'lg:flex-row-reverse'} gap-6 items-center lg:items-stretch mb-6"
		>
			<!-- Text Content -->
			<div class="flex-1 flex flex-col justify-between text-left">
				<ul
					class="text-gray-300 text-sm sm:text-md leading-relaxed space-y-2 mb-2 {isLeft
						? 'pl-5'
						: 'pr-5'} list-disc {isLeft ? '' : 'list-inside'}"
				>
					{#each experience.content as item}
						<li>{item}</li>
					{/each}
				</ul>

				<!-- Technologies -->
				{#if experience.technologies && experience.technologies.length > 0}
					<div class="flex flex-wrap gap-2 justify-start">
						{#each experience.technologies as tech}
							<TechnologyChip technology={tech} />
						{/each}
					</div>
				{/if}
			</div>

			<!-- Image -->
			{#if experience.image}
				<div class="w-full md:w-96 shrink-0">
					<div class="rounded-md overflow-hidden bg-gray-800 aspect-video shadow-lg">
						<img
							src={experience.image}
							alt={experience.title}
							class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
