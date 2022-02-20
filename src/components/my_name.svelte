<script>
  export let viewState = 0;
</script>

<div id="bigName">
  {#if viewState === 0}
    <button disabled> Robert Austin </button>
  {:else}
    <button
      on:click={() => {
        viewState = 0;
        window.sessionStorage.setItem("currentState", "0");
      }}
    >
      Robert Austin
    </button>
  {/if}
</div>

<style>
  button {
    font-weight: 300;
    font-size: clamp(1.8rem, calc(1rem + 4vw), 7em);
    color: var(--main-text-color);
    margin: 0;
  }
  button:disabled {
    color: var(--highlight-color);
  }
  button:hover:not(:disabled) {
    background-color: var(--lighter-bg-color);
  }
  #bigName {
    display: flex;
    align-self: flex-start;
    flex: 1 0 auto;
  }
</style>
