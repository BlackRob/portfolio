<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 4;

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

<div id="about" class={changeState(viewState)}>
  <h1>About ...</h1>
  <h2>Me</h2>
  <p>
    40-something-year-old American with degrees in Computer Engineering and
    English Literature. I primarily consider myself a writer, but I've also been
    a teacher, tutor, engineer, clerk, surveyor, proofreader, editor, laborer,
    builder and a cook. I'm good at the creative stuff and problem solving, not
    great at following orders. I like gardening and making things. Currently
    traveling.
  </p>
  <p>
    I don't use much social media, but <a
      href="https://www.instagram.com/robert.w.austin/">I am on instagram</a
    >.
  </p>
  <h2>My history as a 'developer'</h2>
  <p>
    I made my first website in 2001. I took my first computer science course in
    2003. Since then, I've continued dabbling in programming, learning how to do
    things that interested me. I've gotten pretty good as a generalist—I
    understand how computers work and how programs should be structured. But
    I've never had the regular, day-to-day experience of working at a software
    company. Because I've never had that experience, I never became an expert at
    any one thing. So I do have some weaknesses as a developer.
  </p>
  <p>
    <i>On the other hand</i>... I'm phenomenal at working as part of a team. I
    get along with everyone, can give people honest feedback without hurting
    their feelings, have strong enough technical skills that I can understand
    why a problem should be solved in a particular way, and am an above-average communicator. It's a lot easier for a motivated team player to
    improve their technical skills than for someone with good technicals but
    poor people skills to learn to work well with others.
  </p>
  <h2>Contacting me</h2>
  <p>
    I have an email address, <a href="mailto:email@robert.w.austin@gmail.com"
      >robert.w.austin@gmail.com</a
    >, and can also be found on WhatsApp and Telegram via my US phone number, +1
    313 529 45 43.
  </p>
  <br />
</div>

<style>
  #about {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.85);
    height: fit-content;
    padding: 1em min(5em, 3vw) 1em min(5em, 3vw);
    border-radius: 0.3em;
  }
</style>
