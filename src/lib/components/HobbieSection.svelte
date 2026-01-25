<script>
	import AnimatedCard from './AnimatedCard.svelte';
</script>

<div
	class="min-h-screen pt-8 px-4 py-8 lg:py-16 flex flex-col justify-start md:justify-center items-center"
>
	<h1 class="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-2 lg:mb-4 z-10">Hobbies</h1>

	<p class="text-sm md:text-md text-gray-400 text-center mb-2 max-w-2xl mx-auto z-10">
		Some of the activities I enjoy that reflect a bit more about who I am.
	</p>
	<div class="flex flex-col md:grid md:grid-cols-5 gap-5 py-4 lg:py-12 max-w-5xl">
		<AnimatedCard
			customClass="md:col-span-2 bg-red-800/10"
			animated={true}
			borderColor="var(--color-tertiary)"
			hoverColor="#474747"
		>
			<h3 class="text-2xl mb-2 cursor-default text-primary">Hackathons</h3>
			<p class="text-primary cursor-default">
				I enjoy participating in hackathons centered on Industry 4.0, AI, and other cutting-edge
				fields, where I often step into leadership roles and collaborate to build innovative
				solutions under pressure.
			</p>
		</AnimatedCard>

		<AnimatedCard
			customClass="md:col-span-3 bg-slate-900/10"
			animated={true}
			borderColor="var(--color-primary)"
			hoverColor="var(--color-secondary)"
			><h3 class="text-2xl mb-2 cursor-default text-primary">Competitive Programming</h3>
			<p class="text-primary cursor-default">
				I practice competitive programming as a daily challenge, enjoying the logical thinking and
				wide range of algorithms required to solve complex problems efficiently.
			</p></AnimatedCard
		>
		<AnimatedCard
			customClass="md:col-span-3 bg-blue-800/10"
			animated={true}
			borderColor="var(--color-secondary)"
			hoverColor="var(--color-primary)"
		>
			<h3 class="text-2xl mb-2 cursor-default text-primary">Videogames</h3>
			<p class="text-primary cursor-default">
				One of my favorite hobbies is game development. I enjoy the challenge of combining multiple
				disciplines such as software design, UI/UX, mathematics, design patterns, and
				object-oriented programming to bring interactive experiences to life.
			</p>
		</AnimatedCard>
		<AnimatedCard
			customClass="md:col-span-2 bg-black/20"
			animated={true}
			borderColor="#474747"
			hoverColor="var(--color-tertiary)"
		>
			<h3 class="text-2xl mb-2 cursor-default text-primary">To create</h3>
			<p class="text-primary cursor-default">
				I’m driven by the act of creating, especially when it leads to solutions that help people.
				This passion goes beyond software and extends to building anything that can make a positive
				impact.
			</p>
		</AnimatedCard>
	</div>
</div>
