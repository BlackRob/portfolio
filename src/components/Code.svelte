<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 2;

  let currentState = parseInt(window.sessionStorage.getItem("currentState"));

  function changeState(viewState) {
    if (viewState === layerNumber) {
      if (viewState === currentState) {
        return "visible";
      } else {
        return "show";
      }
    } else {
      if (currentState != layerNumber) {
        return "hidden";
      } else {
        return "hide";
      }
    }
  }
</script>

<div id="code" class={changeState(viewState)}>
  <h1>Stuff I've coded</h1>
  <div class="item">
    <p>
      I invented a grammar game for one of my classes, and it was popular enough
      that I decided to make a digital version. The result was the game
      "details". I think it has commercial potential, but it still has some
      issues, and I've been doing other things.
    </p>
    <p>
      <a href="https://details.grumbly.games"
        ><img
          src="images/details_ss.png"
          alt="screenshot of a sentence-building grammar game named details"
        /></a
      >
    </p>
    <p>
      I also built a site to go with the game that would feature educational
      materials,
      <a href="https://grumbly.games">grumbly.games</a>. My motivation ran out
      before I could finish it (the problem was I needed to make videos showing
      how to play the game, but I got frustrated because the videos weren't
      turning out well.) But I did manage to make some cool stuff, like this
      interactive, animated
      <a href="https://grumbly.games/posts/200606_question_wheel"
        >"Wheel of Questions"</a
      > using SVG and CSS.
    </p>
    <figure
      style="position: relative; padding-bottom: 100%; margin: 20px 0px 40px 0px; display: flex; flex-flow: column;"
    >
      <iframe
        title="animated interactive question wheel"
        style="position: absolute; display: block; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid black; box-shadow: 1px 1px 3px var(--headerbg);"
        src="https://grumbly.games/questionwheel"
        frameBorder="0"
      />
      <figcaption
        style="position: absolute; width: 100%; bottom: -35px; font-size: 90%; text-align: center;"
      >
        <a
          href="https://grumbly.games/questionwheel"
          rel="noopener noreferrer"
          target="_blank">click here to open in a new tab</a
        >
      </figcaption>
    </figure>
  </div>

  <div class="item">
    <p>
      My second React project, "SIMON" was made for freeCodeCamp's frontend
      course. I had "simple, mobile-first, responsive" in mind when I designed
      it. I taught myself promises and ES6 syntax to build it, and used SVG and
      web-audio for the animation and sounds. The code can be found in my
      <a href="https://github.com/BlackRob/React"> GitHub React repository </a>.
    </p>
    <p>
      <a href="portfolio/simon/index.html"
        ><img
          src="images/simon_screenshot.png"
          alt="screenshot of a simon-style memory game"
        /></a
      >
    </p>
  </div>

  <div class="item">
    <p>
      A traditional sliding puzzle. My first non-trivial javascript project, as
      such it has a few issues with code structure, but it works, so I've never
      gone back to refactor it. I also used Bootstrap, because a lot of people
      were talking about it at the time.
    </p>
    <p>
      <a href="portfolio/slider/slider.html"
        ><img
          src="images/slider_puzzle_ss.jpg"
          alt="screenshot of a slider puzzle I coded"
        /></a
      >
    </p>
  </div>
  <br />
</div>

<style>
  #code {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.85);
    height: fit-content;
    padding: 1em min(5em, 3vw) 1em min(5em, 3vw);
    border-radius: 0.3em;
  }
</style>
