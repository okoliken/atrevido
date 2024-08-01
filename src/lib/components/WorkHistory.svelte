<script lang="ts">
  import type { Work } from "$lib/types";
  import Arrow from "./Arrow.svelte";
  import Stack from "./Stack.svelte";
  export let workHistory: Work;

  const { duration, description, companyName, url, role, stacks } = workHistory;
</script>

<li class="mb-12">
  <div
    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-30"
  >
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
    />
    <header
      class="z-10 mb-2 mt-1 text-xs font-normal uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="2018 to Present"
    >
      {duration}
    </header>
    <div class="z-10 sm:col-span-6">
      <h3 class="font-normal leading-snug text-slate-200">
        <div>
          <a
            class="inline-flex items-baseline font-semibold leading-tight text-slate-200 group/link text-base"
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label="Frontend developer at Fundall"
          >
            <span
              class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
            />
            <span>
              {role} ·
              <span class="inline-block">
                {companyName}
                <Arrow />
              </span>
            </span></a
          >
        </div>
      </h3>
      <p class="mt-2 text-sm leading-6 text-gray-400 font-normal text-left">
        {description}
      </p>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        {#each stacks as stack}
          <Stack {stack} />
        {/each}
      </ul>
    </div>
  </div>
</li>
