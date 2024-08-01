<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const socialLinks = [
    {
      url: "https://github.com/okoliken",
      icon: "fe:github",
    },
    {
      url: "https://twitter.com/jeff_okoli",
      icon: "fa6-brands:x-twitter",
    },
    {
      url: "https://www.instagram.com/jeffokoli.1",
      icon: "mdi:instagram",
    },
    {
      url: "https://www.linkedin.com/in/okoli-jeff-0b1719224",
      icon: "uil:linkedin",
    },
  ];

  const onScroll = () => {
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

  onMount(() => {
    onScroll();
  });
</script>

<svelte:head>
  <meta
  name="description"
  content="I Build Inclusive and Accessible Web Experiences, One Line of Code at a Time."
  />
  <meta content="Hello I am Jeff, I am a Frontend Software Developer" name="description">
  <title>Okoli Jahbuchim Jeff</title>
</svelte:head>

<svelte:window on:scroll={onScroll} />

<div class="relative">
  <div
    class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-Poppins md:px-12 md:py-20 lg:px-24 lg:py-0"
  >
    <div class="lg:flex lg:justify-between lg:gap-4 font-Poppins">
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
            class="mt-3 text-lg font-normal tracking-tight text-slate-200 sm:text-xl"
          >
            Frontend Engineer :)
          </h2>
          <p class="mt-4 max-w-xs leading-normal text-gray-400 font-normal">
            Crafting Inclusive and Accessible Web Experience, One Line of Code
            at a Time.
          </p>

          <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
              {#each ["about", "experience", "projects"] as links}
                <li>
                  <a class="group flex items-center py-3" href="#{links}"
                    ><span
                      class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                    /><span
                      class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                      >{links}</span
                    ></a
                  >
                </li>
              {/each}
            </ul>
          </nav>
        </div>
        <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
          {#each socialLinks as socials}
            <li class="mr-5 text-xs">
              <a
                class="block text-slate-400 hover:text-slate-200"
                href={socials.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon class="text-[1.7rem]" icon={socials.icon} />
              </a>
            </li>
          {/each}
        </ul>
      </header>

      <main class="pt-24 lg:w-1/2 lg:py-24 relative right-0">
        <slot />

        <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Inspired by
            <a
              class="font-normal text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noreferrer"
            >
              Brittany chiang's portfolio.
            </a>
            Built with
            <a
              href="https://kit.svelte.dev/"
              class="font-normal text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">SvelteKit</a
            >
            and
            <a
              href="https://tailwindcss.com/"
              class="font-normal text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Tailwind CSS</a
            >, deployed with
            <a
              href="https://vercel.com/"
              class="font-normal text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Vercel</a
            >. All text is set in the
            <a
              href="https://fonts.google.com/specimen/Raleway"
              class="font-normal text-slate-400 hover:text-slate-300 focus-visible:text-slate-300"
              target="_blank"
              rel="noreferrer">Work Sans</a
            >
            typeface.
          </p>
        </footer>
      </main>
    </div>
  </div>
</div>
