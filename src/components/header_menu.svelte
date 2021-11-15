<script>
	export let viewState;

	let currentState = 0;

	if (currentState !== viewState) {
		if (viewState > 0) {
			currentVisibility = "visible";
			currentState = viewState;
		}
		if (viewState === 0) {
			currentVisibility = "hidden";
			currentState = viewState;
		}
	} else {
		currentState = viewState;
	}
</script>

<div id="topbarMenu">
	<div id="firstTwo">
		{#if viewState === 1}
			<button disabled>Writing</button>
		{:else}
			<button
				on:click={() => (viewState = 1)}
				class={viewState === 1 ? "selected" : "unselected"}
			>
				Writing
			</button>
		{/if}
		{#if viewState === 2}
			<button disabled>Code</button>
		{:else}
			<button
				on:click={() => (viewState = 2)}
				class={viewState === 2 ? "selected" : "unselected"}
			>
				Code
			</button>
		{/if}
	</div>
	<div id="secondTwo">
		{#if viewState === 3}
			<button disabled>Hire me</button>
		{:else}
			<button
				on:click={() => (viewState = 3)}
				class={viewState === 3 ? "selected" : "unselected"}
			>
				Hire me
			</button>
		{/if}
		{#if viewState === 4}
			<button disabled>About ...</button>
		{:else}
			<button
				on:click={() => (viewState = 4)}
				class={viewState === 4 ? "selected" : "unselected"}
			>
				About ...
			</button>
		{/if}
	</div>
</div>

<style>
	#topbarMenu {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 0 2em;
		align-content: center;
	}

	#firstTwo,
	#secondTwo {
		display: flex;
		flex-wrap: wrap;
		max-width: 18em;
	}

	.selected {
		color: var(--highlight-color);
	}

	.unselected {
		color: var(--main-text-color);
	}
	button {
		width: 5.5em;
		color: var(--main-text-color);
	}
	button:disabled {
		color: var(--highlight-color);
	}
	button:hover:not(:disabled) {
		background-color: var(--lighter-bg-color);
	}
</style>
