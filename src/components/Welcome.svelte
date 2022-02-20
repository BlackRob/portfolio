<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 0;

  let currentState = parseInt(window.sessionStorage.getItem("currentState"));

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

<div id="welcome" class={changeState(viewState)}>
  <h1>Hi!</h1>
  <p>
    Welcome to my online portfolio! This is where I put things I've written and
    coded. I'm more of a writer than a programmer, but I have some skill at both
    so I'm including both here.
  </p>
  <p>
    It's usually considered impolite to brag about yourself, but that's kind of
    the point of a portfolio: "look at me, I'm special". So since we're here,
    let me just say it: I am special. I'm clever and creative, I have a sense of
    humor. I'm a generalist, not a specialist. I know more than enough aobut a
    lot of things, but I'm not an expert in anything. In the job market that's
    generally a disadvantage, but I consider it a strength. It lets me look at
    problems from different angles instead of just the one I'm used to. To
    paraphrase an old cliche, if you're a hammer expert, every problem looks
    like a nail. Well, I may not be the best at hammers, but I can swing one,
    and I know a screw when I see one, too.
  </p>
</div>

<style>
  #welcome {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.85);
    height: fit-content;
    padding: 1em 3em;
    border-radius: 0.3em;
  }
</style>
