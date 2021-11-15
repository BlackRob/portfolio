<script lang="ts">
	import BackgroundImage from "./components/background_switcher.svelte";
	import HeaderMenu from "./components/header_menu.svelte";
	import Logo from "./components/my_name.svelte";
	import Welcome from "./components/Welcome.svelte";
	import Writing from "./components/Writing.svelte";
	import Code from "./components/Code.svelte";
	import HireMe from "./components/HireMe.svelte";
	import About from "./components/About.svelte";
	import Slogans from "./components/Slogans.svelte";

	//export let name: string;
	export let viewState: number;
</script>

<main>
	<!-- 		layout notes 
		trying to make it work like a state machine --is this a good idea? dunno

		two main layers: 

		background images (level 0-9)
		turn on and off based on viewState
		absolute position, don't scroll
	-->

	<BackgroundImage
		layerNumber={0}
		image="build/static/bwr_sitting_right.jpg"
		{viewState}
	/>
	<BackgroundImage
		layerNumber={1}
		image="build/static/bwr_sitting_center.jpg"
		{viewState}
	/>
	<BackgroundImage
		layerNumber={2}
		image="build/static/bwr_sitting.jpg"
		{viewState}
	/>
	<BackgroundImage
		layerNumber={3}
		image="build/static/bwr_no_glasses.jpg"
		{viewState}
	/>
	<BackgroundImage
		layerNumber={4}
		image="build/static/bwr_standing_sweater.jpg"
		{viewState}
	/>

	<!--
		next main layer is content
		it contains a top banner, with the title and menu
		which itself changes based on the value of viewState
		levels 10-19 are for the content, different pages/sections
	-->
	<div id="topLayer">
		<header>
			<Logo bind:viewState />
			<HeaderMenu bind:viewState />
		</header>

		<div id="content">
			<Welcome {viewState} />
			<Writing {viewState} />
			<Code {viewState} />
			<HireMe {viewState} />
			<About {viewState} />
			<Slogans />
		</div>
	</div>
</main>

<style>
	main {
		padding: 0;
		width: auto;
		height: 100%;
		max-width: 1080px;
		height: auto;
		margin: 0 auto;
		background-color: var(--lighter-bg-color);
	}

	#topLayer {
		position: absolute;
		width: 100%;
		max-width: 1080px;
		z-index: 10;
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		min-height: 100%;
	}

	header {
		background-color: rgba(45, 45, 45, 0.8);
		flex-grow: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		align-content: center;
		box-sizing: border-box;
		width: 100%;
		max-width: 1080px;
		min-height: 10em;
		padding: 1em 3em 1em 3em;
	}

	#content {
		margin: 4em 0em 0em 0em;
		position: relative;
		padding: 1em 5em 1em 5em;
		height: fit-content;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
		grid-template-areas:
			"overlap"
			"bottom";
	}
	/* visible and hidden classes are in global.css */
</style>
