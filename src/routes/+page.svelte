<script lang="ts">
  import type { PageData } from "./$types";
  import Intro from "$lib/components/Intro.svelte";
  import WorkHistory from "$lib/components/WorkHistory.svelte";
  import ProjectContainer from "$lib/components/ProjectContainer.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import ResumeLink from "$lib/components/ResumeLink.svelte";
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
      <ResumeLink />
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

  <div class="lg:pt-16">
    <div
    id="personalProjects"
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
