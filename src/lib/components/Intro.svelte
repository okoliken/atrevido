<script lang="ts">
	
  let paragraphs = [
    "I am enthusiastic about bringing my technical skills and unwavering dedication to your organization. If you are in search of a frontend developer who can deliver excellence in user experiences while meticulously attending to detail, let us connect and make your projects come to life!.",
  ];

  let stacks = [
    "JavaScript",
    "APIs",
    "Figma",
    "Vue & Nuxt",
    "TypeScript",
    "React",
    "Astro",
    "Svelte",
    "SvelteKit",
    "AppWrite",
    "Plugins",
    "Supabase",
    "Pinia",
    "Vuex",
    "Python",
    "TailwindCss",
    "Vuetify",
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
    <h2
      class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
    >
      About
    </h2>
  </div>
  <div>
    <p class="mb-4 text-justify leading-6 text-gray-400 font-light w-full">
      In 2019, I started learning tech stuff at NIIT. I began with Python and
      SQL. In the second semester, I got into web development and learned the
      basics of HTML, CSS, and JavaScript. That's when I decided to specialize
      in frontend development, focusing on making cool and user-friendly
      interfaces. I picked up <a
        class="text-slate-200 font-bold hover:underline"
        href="https://react.dev"
        target="_blank">React</a
      >
      then
      <a
        class="text-slate-200 font-bold hover:underline"
        href="https://vuejs.org/"
        target="_blank">Vue</a
      >. Within six months of picking up Vue, I secured my first entry-level
      role. My journey has been a remarkable one, characterized by continuous
      learning and growth.
    </p>
    {#each paragraphs as paragraph}
      <p class="mb-4 text-justify leading-6 text-gray-400 font-light w-full">
        {paragraph}
      </p>
    {/each}

    <p class="font-medium leading-snug text-slate-200 pt-4">
      Below are a list of my tools and languages
    </p>

	<ul class="mt-2 flex flex-wrap" aria-label="Tools and Technologies used">
    {#each stacks as stack}
      <li class="mr-1.5 mt-2">
        <div
          class="flex items-center rounded-full bg-slate-400/10 px-3 py-1 text-xs font-medium leading-5 text-slate-300"
        >
          {stack}
        </div>
      </li>
    {/each}
  </ul>
  </div>
</section>
