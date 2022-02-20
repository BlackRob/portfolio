<script>
  export let viewState = 0;
  const layerNumber = 3;

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

<div id="hire" class={changeState(viewState)}>
  <h1>Things I can and will do for money</h1>
  <p>
    As shown by this portfolio, I have some modest skill as a developer, and am
    by my own estimation a decent writer. My goal is to convince people to pay
    me to write or edit or code for them, so I can continue to write and code
    for myself. If you have found your way to this page, let me suggest that I
    can and am willing to do any of the following for money:
  </p>
  <ul>
    <li>write creative content for blogs or magazines</li>
    <li>ghostwrite</li>
    <li>write original poems, songs, speeches or skits for special events</li>
    <li>write advertising copy</li>
    <li>
      proofread/edit/doctor your written work (almost everything is better after
      a second set of eyes has gone over it)
    </li>
    <li>work with React or Svelte for frontend development</li>
    <li>write and edit HTML and CSS</li>
    <li>critique business plans</li>
    <li>consult on major life decisions</li>
  </ul>
  <p>
    If you have a need for any of the above services, please don't hesitate to
    contact me at robert.w.austin@gmail.com, or you can find me on Telegram or
    WhatsApp under my American phone number, +1 313 529 45 43.
  </p>
</div>

<style>
  #hire {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.85);
    height: fit-content;
    padding: 1em 3em;
    border-radius: 0.3em;
  }
</style>
