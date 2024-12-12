<script module>
  const modules = import.meta.glob("./**.svelte");

  const links = Object.keys(modules)
    .filter((file) => file.includes("+page.svelte"))
    .map((file) => {
      const parts = file.split("/");
      // Determine the title
      const title = parts.length > 2 ? parts[parts.length - 2] : "Home";
      // Generate the link
      const path = file.replace("./", "").replace("+page.svelte", "");
      return { title, link: `/${path}` };
    });
</script>

<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<nav class="flex flex-col justify-center items-center sticky top-0 bg-black">
  <div class="flex w-full h-full justify-center items-center text-white">
    <div class="flex w-full h-full justify-center items-center">
      <h1 class="text-center text-4xl font-bold">Recipes</h1>
      <ul class="flex w-full h-full justify-center items-center">
        {#each links as item}
          <li class="flex w-full h-full justify-center items-center">
            <a class="text-center text-xl font-bold" href={item.link}
              >{item.title}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

{@render children()}
