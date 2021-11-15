<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 4;

  let currentState = 0;

  function changeState(viewState) {
    if (viewState === layerNumber) {
      if (viewState === currentState) {
        return "visible";
      } else {
        currentState = viewState;
        return "show";
      }
    } else {
      if (currentState != layerNumber) {
        currentState = viewState;
        return "hidden";
      } else {
        currentState = viewState;
        return "hide";
      }
    }
  }
</script>

<div id="about" class={changeState(viewState)}>
  <h1>About ...</h1>
  <h2>Me</h2>
  <p>
    40-something-year-old American with degrees in Computer Engineering and
    English Literature. I primarily consider myself a writer, but I've also been
    a teacher, tutor, engineer, clerk, surveyor, cook. I'm good at the creative
    stuff and problem solving, not great at doing what I'm told—but I'm trying
    to get better at that. I like gardening and making things. Currently
    traveling.
  </p>
  <h2>My history as a "developer'</h2>
  <p>
    I made my first website in 2001. I took my first computer science course in
    2003. Since then, I've continued dabbling in programming, learning how to do
    things that interested me. I've gotten pretty good as a generalist—I
    understand how computers work and how programs should be structured. But
    I've never had the regular, day-to-day experience of working at a software
    company. Because I've never had that experience, I never became an expert at
    any one thing.
  </p>
</div>

<style>
  #about {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.8);
    height: fit-content;
    padding: 1em 2em;
    border-radius: 0.3em;
  }
</style>
