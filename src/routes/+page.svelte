<script lang="ts">
  import type { PageData } from "./$types";
  import Intro from "$lib/components/Intro.svelte";
  import WorkHistory from "$lib/components/WorkHistory.svelte";
  import ProjectContainer from "$lib/components/ProjectContainer.svelte";
  import Projects from "$lib/components/Projects.svelte";
  export let data: PageData;
</script>

<Intro />
<section
  id="experience"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-section"
  aria-label="Work experience"
>
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-600/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:my-7 lg:w-full lg:static lg:rounded lg:transform lg:translate-x-[40px]"
  >
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">
      Experience
    </h2>
  </div>

  <div>
    <ol class="group/list">
      {#each data.workHistory as workHistory}
        <WorkHistory {workHistory} />
      {/each}
    </ol>
    <div class="mt-12">
      <a
        class="inline-flex items-center font-medium leading-tight text-slate-200 group"
        aria-label="View Full Résumé"
        href="https://www.canva.com/design/DAFxx9lPwzA/ODiofLQjEMVBmHsJnkDHig/view?utm_content=DAFxx9lPwzA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        target="_blank"
        ><span
          ><span
            class="border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none"
            >View Full<!-- -->
          </span><span class="whitespace-nowrap"
            ><span
              class="border-b border-transparent pb-px transition group-hover:border-white motion-reduce:transition-none"
              >Résumé</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              /></svg
            ></span
          ></span
        ></a
      >
    </div>
  </div>
</section>

<section
  id="projects"
  class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-section"
  aria-label="Selected projects"
>
  <div
    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-600/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:my-7 lg:w-full lg:static lg:rounded lg:transform lg:translate-x-[40px]"
  >
    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">
      Collaborative Project Contributions
    </h2>
  </div>

  <ProjectContainer>
    {#each data.projects as projects}
      <Projects {projects} />
    {/each}
  </ProjectContainer>

  <div class="lg:pt-28">
    <div
      class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-600/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:my-7 lg:w-full lg:static lg:transform lg:translate-x-[40px] lg:rounded"
    >
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">
        Personal Projects
      </h2>
    </div>

    <ProjectContainer>
      {#each data.personal_projects as projects}
        <Projects {projects} />
      {/each}
    </ProjectContainer>
  </div>
</section>
