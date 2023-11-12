<script lang="ts">
	let paragraphs = [
		"I have successfully contributed to FinTech projects, where precision and security are paramount, and I firmly believe that a well-crafted user interface can significantly influence a software product's success.",
		'I am enthusiastic about bringing my technical skills and unwavering dedication to your organization. If you are in search of a frontend developer who can deliver excellence in user experiences while meticulously attending to detail, let us connect and make your projects come to life!.'
	];
</script>

<section
	id="about"
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-section"
	aria-label="About me"
>
	<div
		class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
	</div>
	<div>
		<p class="mb-4 text-justify leading-6 text-gray-400 font-light w-full">
			In 2019, I started learning tech stuff at NIIT. I began with Python and SQL. In the second
			semester, I got into web development and learned the basics of HTML, CSS, and JavaScript.
			That's when I decided to specialize in frontend development, focusing on making cool and
			user-friendly interfaces. I picked up <a
				class="text-slate-200 font-bold hover:underline"
				href="https://react.dev"
				target="_blank">React</a
			>
			then
			<a class="text-slate-200 font-bold hover:underline" href="https://vuejs.org/" target="_blank"
				>Vue</a
			>. Within six months of picking up Vue, I secured my first entry-level role. My journey has
			been a remarkable one, characterized by continuous learning and growth.
		</p>
		{#each paragraphs as paragraph}
			<p class="mb-4 text-justify leading-6 text-gray-400 font-light w-full">
				{paragraph}
			</p>
		{/each}
	</div>
</section>
