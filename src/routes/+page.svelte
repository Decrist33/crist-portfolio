<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	import ExperienceTimeline from '$lib/components/ExperienceTimeLine.svelte';
	import type { SkillsProps } from '$lib/types';
	import TechSection from '$lib/components/TechSection.svelte';
	import { backend, experiences, frontend, interested, languages, other } from '$lib/tech-stack';
	import FloatingPolygons from '$lib/components/FloatingPolygons.svelte';

	const skillsArray: SkillsProps[] = [
		{ title: 'Languages', skills: languages },
		{ title: 'Frontend Frameworks & Technologies', skills: frontend },
		{ title: 'Backend Frameworks & Technologies', skills: backend },
		{ title: 'Other Technologies and Knowledge', skills: other },
		{ title: 'Interested/Learning', skills: interested }
	];
</script>

<section
	id="hero"
	class="relative h-screen w-full overflow-hidden flex items-center justify-center"
>
	<!-- Background -->
	<div
		class="absolute inset-0 bg-[url('/dark.jpg')] bg-cover bg-center scale-110 blur-lg brightness-75"
	></div>

	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/30"></div>

	<!-- Content -->
	<div
		class="flex flex-col relative z-10
         w-11/12 max-w-5xl
         h-fit max-h-[90dvh]
         border border-solid border-white
         px-6 py-6 sm:px-12 sm:pt-12 sm:pb-4
         rounded-md bg-black/30
         overflow-y-auto transition-all ease-out"
	>
		<div class="w-full shrink-0">
			<h1 class="text-2xl sm:text-4xl text-primary mb-1">Cristobal Elizalde</h1>
			<h2 class="text-sm sm:text-md md:text-lg pl-0.5 mb-4 sm:mb-6">Software Developer Engineer</h2>
		</div>

		<div class="overflow-y-auto pr-2 custom-scrollbar">
			<p class="text-md sm:text-lg md:text-xl">
				I’m a software solutions creator with over 3 years of experience developing software. My
				goal is to deliver efficient, well-designed, and reliable solutions on time. As an engineer,
				I do more than just write code, I track requirements, design systems, make technical
				decisions, suggest improvements, troubleshoot issues, identify opportunities, and evaluate
				new technologies when appropriate.
			</p>
		</div>

		<a
			href="#experience"
			class="mt-4 flex justify-center items-center shrink-0 hover:cursor-pointer"
		>
			<ChevronDown class="animate-float" />
		</a>
	</div>
</section>

<div class="relative">
	<FloatingPolygons count={5} minSize={30} maxSize={70} />
	<section id="experience">
		<div class="min-h-screen pt-8">
			<div class="container mx-auto px-4 py-8 lg:py-16">
				<h1 class="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-2 lg:mb-4">
					Experience
				</h1>

				<p class="text-sm md:text-md text-gray-400 text-center mb-2 max-w-2xl mx-auto">
					A timeline of my career journey and the technologies I've worked with
				</p>

				<ExperienceTimeline {experiences} />
			</div>
		</div>
	</section>

	<section id="technologies" class="px-4">
		<TechSection {skillsArray} />
	</section>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
