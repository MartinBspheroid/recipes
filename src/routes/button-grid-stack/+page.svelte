<script lang="ts">
  let loadingState = $state(false);
  import Loader from "./loader.svg.svelte";
  import About from "./about.svelte";
  let text = $state("Hello");

  const toggle = async () => {
    if (loadingState) {
      return;
    }
    loadingState = true;
    await new Promise((r) => setTimeout(r, 1000));
    loadingState = false;
  };
</script>

<div class="flex flex-col w-full h-screen justify-center items-center">
  <About />
  <button
    onclick={() => {
      toggle();
    }}
    class="bg-black *:transition-all grid rounded-xl p-4 text-white [grid-template-areas:_'stack']"
  >
    <span
      class={"loader-text content-center h-full [grid-area:stack]"}
      class:opacity-0={loadingState}
      class:opacity-100={!loadingState}>{text}</span
    >
    <span
      class="[grid-area:stack]"
      class:opacity-0={!loadingState}
      class:opacity-100={loadingState}
    >
      <Loader />
    </span>
  </button>

  <div class="text-center">
    <label for="text">Change text</label>
    <input
      type="text"
      bind:value={text}
      class=" [&:hover:bg-white] border [&:focus:bg-white] rounded-xl p-4"
    />
  </div>
</div>
