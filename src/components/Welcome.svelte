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
    Welcome to my portfolio! This is where I put some of the things I've written
    and coded. I'm more of a writer than a programmer, but I have some skill at
    both so I'm including both here.
  </p>
  <p>
    It's usually considered impolite to brag about oneself, but that's kind of
    the point of a portfolio: "look at me, I'm special". So since you're here,
    let me just say it: I am special. I'm clever and creative, I have a sense of
    humor. I have pretty good social skills and work well with others. I'm an
    ideas man, a problem solver and an outside-the-box thinker.
  </p>
  <p>
    I'm a also generalist, not a specialist. I know more than enough about a lot
    of things, but I'm not an expert in any one thing. In the job market that's
    generally a disadvantage, but I consider it a strength. It lets me look at
    problems from different angles instead of just the one I'm used to. To
    paraphrase an old cliche, if you're a hammer expert, every problem looks
    like a nail. Well, I may not be the best at hammers, but I can swing one,
    and I can recognize a screw when I see one, too.
  </p>
  <p>
    Anyway, thanks for making it this far. Look around, read some of the things
    I wrote, play the game I coded, and if you have any questions, please don't
    hesitate to contact me, <a href="mailto:email@robert.w.austin@gmail.com"
      >robert.w.austin@gmail.com</a
    >.
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
