<script lang="ts">
  import Arrow from "$lib/components/Arrow.svelte";
  import type { Project } from "$lib/types";
  import Stack from "./Stack.svelte";
  export let projects: Project;

  const { title, url, description, image, growth, stacks } = projects;
</script>

<li class="mb-12">
  <div
    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40"
  >
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
    />
    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">
        <a
          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-slate-300 group/link text-base"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={title}
          ><span
            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
          /><span
            >{title}
            <span class="inline-block">
              <Arrow />
            </span></span
          ></a
        >
      </h3>
      <p class="mt-2 text-sm leading-6 text-gray-400 font-medium text-left">
        {description}
      </p>

      {#if growth?.length}
        <a
          class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://github.com/bchiang7/spotify-profile"
          target="_blank"
          rel="noreferrer"
          aria-label="575 stars on GitHub"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="mr-1 h-3 w-3"
            aria-hidden="true"
            ><path
              fill-rule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clip-rule="evenodd"
            /></svg
          ><span>575</span></a
        >
      {/if}

      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
        {#each stacks as stack}
          <Stack {stack} />
        {/each}
      </ul>
    </div>
    <img
      alt={title}
      loading="lazy"
      width="200"
      height="85"
      decoding="async"
      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      srcset={image}
      src={image}
    />
  </div>
</li>
