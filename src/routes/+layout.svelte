<script lang="ts">
  import "../app.css";
  import Icon from "@iconify/svelte";

  const onScroll = (e: Event) => {
    const sections = document.querySelectorAll(".scroll-section");

    // Loop through each section and check if it is in the viewport
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        // Section is in the viewport
        const sectionId = section.id;

        // Update the corresponding link's active state
        const link = document.querySelector(`nav a[href="#${sectionId}"]`);

        // Remove 'active-link' class from all links
        document.querySelectorAll("nav a").forEach((link) => {
          link.classList.remove("active");
        });

        // Add 'active-link' class to the current link
        link?.classList.add("active");
      }
    });
  };
</script>

<svelte:head>
  <title>Okoli Jahbuchim Jeff</title>
  <meta
    name="description"
    content="I Build Inclusive and Accessible Web Experiences, One Line of Code at a Time."
  />
</svelte:head>

<svelte:window on:scroll={onScroll} />

<div class="relative">
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4 font-Raleway">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
      >
        <div>
          <h1
            class="text-4xl font-bold tracking-wide text-slate-100 sm:text-5xl"
          >
            Okoli Jahbuchim
          </h1>
          <h2
            class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl"
          >
            Frontend developer
          </h2>
          <p class="mt-4 max-w-xs leading-normal text-gray-400 font-light">
            I Build Inclusive and Accessible Web Experiences, One Line of Code
            at a Time.
          </p>

          <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
              <li>
                <a class="group flex items-center py-3" href="#about"
                  ><span
                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  /><span
                    class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >About</span
                  ></a
                >
              </li>
              <li>
                <a class="group flex items-center py-3" href="#experience"
                  ><span
                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  /><span
                    class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >Experience</span
                  ></a
                >
              </li>
              <li>
                <a class="group flex items-center py-3" href="#projects"
                  ><span
                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  /><span
                    class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                    >Projects</span
                  ></a
                >
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li class="mr-5 text-xs">
            <a
              class="block text-slate-400 hover:text-slate-200"
              href="https://github.com/okoliken"
              target="_blank"
              rel="noreferrer"
            >
              <Icon class="text-[1.7rem]" icon="fe:github" />
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a
              class="block text-slate-400 hover:text-slate-200"
              href="https://twitter.com/jeff_okoli"
              target="_blank"
              rel="noreferrer"
              ><Icon class="text-[1.7rem]" icon="mdi:twitter" />
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a
              class="block text-slate-400 hover:text-slate-200"
              href="https://www.instagram.com/jeffokoli.1"
              target="_blank"
              rel="noreferrer"
            >
              <Icon class="text-[1.7rem]" icon="mdi:instagram" />
            </a>
          </li>
          <li class="mr-5 text-xs">
            <a
              class="block text-slate-400 hover:text-slate-200"
              href="https://www.linkedin.com/in/okoli-jeff-0b1719224"
              target="_blank"
              rel="noreferrer"
            >
              <Icon class="text-[1.7rem]" icon="uil:linkedin" />
            </a>
          </li>
        </ul>
      </header>

      <main class="pt-24 lg:w-1/2 lg:py-24 relative right-0">
        <slot />

        <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Built with<!-- -->
            <a
              href="https://kit.svelte.dev/"
              class="font-medium text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">SvelteKit</a
            >
            <!-- -->and<!-- -->
            <a
              href="https://tailwindcss.com/"
              class="font-medium text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Tailwind CSS</a
            >, deployed with<!-- -->
            <a
              href="https://vercel.com/"
              class="font-medium text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Vercel</a
            >. All text is set in the<!-- -->
            <a
              href="https://fonts.google.com/specimen/Raleway"
              class="font-medium text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Raleway</a
            >
            <!-- -->typeface.
          </p>
        </footer>
      </main>
    </div>
  </div>
</div>
