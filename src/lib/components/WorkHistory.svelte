<script lang="ts">
  import type { Work } from "$lib/types";
  import Arrow from "./Arrow.svelte";
  export let workHistory: Work;

  const { duration, description, companyName, url, role, stacks } =
    workHistory;
</script>

<li class="mb-12">
  <div
    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"
    />
    <header
      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="2018 to Present"
    >
      {duration}
    </header>
    <div class="z-10 sm:col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">
        <div>
          <a
            class="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
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
      <p class="mt-2 text-sm leading-6 text-gray-400 font-light text-justify">
        {description}
      </p>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
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
  </div>
</li>

<!-- 

	<ul class="mt-2 flex flex-wrap" aria-label="Related links"><li class="mr-4"><a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href="https://developer.apple.com/documentation/musickitjs" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg><span>MusicKit.js</span></a></li><li class="mr-4"><a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg><span>9to5Mac</span></a></li><li class="mr-4"><a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg><span>The Verge</span></a></li></ul>
 -->
