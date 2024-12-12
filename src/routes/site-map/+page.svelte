{#if true}
  {@const Code = `
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
        return { title, link: \`/\${path}\` };
      });
    </script>

    {#each links as item}
          <li class="flex w-full h-full justify-center items-center">
            <a class="text-center text-xl font-bold" href={item.link}
              >{item.title}</a
            >
          </li>
    {/each}
`}
  <pre>
    {Code}
</pre>
{/if}
