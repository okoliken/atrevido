<script lang="ts">
  import Stack from "./Stack.svelte";
  let stacks = [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Nuxt.js",
    "Pinia",
    "Vuex",
    "React",
    "Redux ToolKit",
    "Styled Components",
    "Tailwind-Css",
    "Farmer Motion",
    "Tanstack Query",
    "Svelte",
    "AppWrite",
    "Supabase",
    "Figma",
    "Jira",
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
    <p class="mb-4 text-left leading-6 text-gray-400 font-medium w-full">
      Seasoned Front-end Engineer with 3+ years in Vue.js and React.js. Skilled
      in creating responsive, user-centric web applications. Adept in modern
      development practices, with a focus on quality and efficiency. Committed
      to ongoing learning and collaboration to drive project success.
    </p>

    <p class="font-medium leading-snug text-slate-200 pt-4">
      Below are a list of my tools and language(s)
    </p>

    <ul class="mt-2 flex flex-wrap" aria-label="Tools and Technologies used">
      {#each stacks as stack}
        <Stack {stack} />
      {/each}
    </ul>
  </div>
</section>
