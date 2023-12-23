<script lang="ts">
  let stacks = [
    "JavaScript",
    "APIs",
    "Figma",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "React",
    "Astro",
    "Svelte.js",
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
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24 scroll-section"
  aria-label="About me"
>
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-600/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
  >
    <h2
      class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
    >
      About
    </h2>
  </div>
  <div>
    <p class="mb-4 text-justify leading-6 text-gray-400 font-light w-full">
      Tech enthusiast turned frontend maestro! From Python to Vue, I've crafted
      sleek interfaces with a passion for perfection. Secured my first role in
      just six months. Let's connect and bring your projects to life with
      excellence in user experiences!
    </p>

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
