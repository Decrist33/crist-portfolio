<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	import ExperienceTimeline from '$lib/components/ExperienceTimeLine.svelte';
	import type { Experience } from '$lib/types';

	const experiences: Experience[] = [
		{
			orientation: 'left',
			title: 'Software Engineer in WERA Agentes Aduanales (Customs Agency)',
			subtitle: 'Ago 2024 - Nov 2025',
			content: [
				'Identified business improvement opportunities; designed, developed, and implemented projects while prioritizing security and performance.',
				'Designed systems and created new business solutions for both internal and external use.',
				'Maintained legacy code to enhance functionality and optimize performance.'
			],
			image: '/experience/programming.png',
			technologies: [
				{
					name: 'Python'
				},
				{
					name: 'JavaScript'
				},
				{
					name: 'TypeScript'
				},
				{
					name: 'React'
				},
				{
					name: 'FastAPI'
				},
				{
					name: 'PHP'
				},
				{
					name: 'Laravel'
				},
				{
					name: 'C#'
				},
				{
					name: 'Docker'
				},
				{
					name: 'SQL'
				},
				{
					name: 'Tailwind CSS'
				},
				{
					name: 'Git'
				},
				{
					name: '+',
					tooltip:
						'Among other technologies, these are the ones I used the most. I’m someone who always enjoys learning and improving.'
				}
			]
		},
		{
			orientation: 'right',
			title: 'Software Engineer at Transportadora Norte de Chihuahua (TNCH)',
			subtitle: 'Jul 2022 - Ago 2024',
			content: [
				'Maintained and developed new software solutions for existing business challenges, applying requirements engineering to design, develop, and deliver efficient systems.',
				'Improved the aesthetics of legacy landing page to create a more modern and attractive design.'
			],
			image: '/experience/transportadora.png',
			technologies: [
				{
					name: 'Python'
				},
				{
					name: 'C#'
				},
				{
					name: '.NET'
				},
				{
					name: 'SQL'
				},
				{
					name: 'JavaScript'
				},
				{
					name: 'HTML'
				},
				{
					name: 'CSS'
				},
				{
					name: 'IIS'
				},
				{
					name: 'AWS'
				},
				{
					name: 'Git'
				},
				{
					name: '+',
					tooltip:
						'Among other technologies, these are the ones I used the most. I’m someone who always enjoys learning and improving.'
				}
			]
		},
		{
			orientation: 'left',
			title: 'Freelance Software Developer',
			subtitle: 'Jan 2020 - Present',
			content: [
				'Create custom software solutions for private businesses and clients using full-stack technologies to meet specific technical requirements.',
				'Supported a PhD candidate in software development and data science, utilizing Unity and Kinect for biometric body tracking and Python for data analysis.'
			],
			technologies: [
				{
					name: 'Python'
				},
				{
					name: 'C#'
				},
				{
					name: '.NET'
				},
				{
					name: 'SQL'
				},
				{
					name: 'JavaScript'
				},
				{
					name: 'HTML'
				},
				{
					name: 'CSS'
				},
				{
					name: 'Unity'
				},
				{
					name: 'React'
				},
				{
					name: 'Git'
				},
				{
					name: '+',
					tooltip:
						'Among other technologies, these are the ones I used the most. I’m someone who always enjoys learning and improving.'
				}
			]
		}
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
		class="flex flex-col justify-center items-center relative z-10 h-4/5 sm:h-130 w-4/5
		max-w-5xl border border-solid border-white px-6 sm:px-12 pt-6 sm:pt-12 pb-4 rounded-md
		bg-black/30 overflow-y-auto transition-all ease-out"
	>
		<div class="w-full">
			<h1 class="text-2xl sm:text-4xl text-primary mb-1">Cristobal Elizalde</h1>
			<h2 class="text-sm sm:text-md pl-0.5 mb-6">Software Engineer</h2>
		</div>

		<p class="text-md sm:text-lg md:text-xl grow">
			I’m a software solutions creator with proficiency in technologies such as Python, FastAPI,
			JavaScript, TypeScript, React, C#, .NET, Java, SQL, HTML, CSS, Flutter, and Git. Although
			these are the technologies I’ve used the most, I always enjoy learning new ones and improving
			my proficiency in those I already know, in order to deliver excellent, efficient, and reliable
			solutions.
		</p>
		<a href="#experience" class="flex justify-center items-center hover:cursor-pointer">
			<ChevronDown class="animate-float" />
		</a>
	</div>
</section>

<section id="experience">
	<div class="min-h-screen from-gray-900 via-slate-900 to-gray-900">
		<div class="container mx-auto py-8 lg:py-16">
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

<style lang="postcss">
	@reference "tailwindcss";
</style>
