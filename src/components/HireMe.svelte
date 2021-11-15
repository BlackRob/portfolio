<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 3;

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

<div id="hire" class={changeState(viewState)}>
  <h1>Things I can and will do for money</h1>
  <p>
    Sesame snaps jelly-o candy muffin sweet. Marzipan gummies bear claw pudding
    dragée. Chocolate cake cake danish icing bear claw. Soufflé carrot cake
    macaroon toffee icing cake. Shortbread sugar plum chocolate cake cotton
    candy sweet soufflé. Brownie sweet chocolate cake wafer brownie toffee
    pudding sugar plum. Tart tiramisu sweet gingerbread cake tiramisu bear claw.
    Gummi bears tiramisu toffee caramels powder cake sweet roll carrot cake.
    Marshmallow danish sweet sugar plum gummi bears biscuit pastry. Jujubes
    cotton candy sweet tiramisu brownie chocolate bar. Chocolate cake bear claw
    bear claw danish jelly beans. Dessert toffee danish chocolate carrot cake
    dessert sweet lemon drops. Jelly croissant powder muffin chocolate cake
    cake. Jelly chocolate cotton candy jelly-o tootsie roll lollipop. Jujubes
    powder jujubes sweet roll jujubes pudding gummi bears powder chocolate cake.
    Jelly beans gummies toffee pudding cupcake chupa chups wafer cookie
    shortbread.
  </p>
</div>

<style>
  #hire {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.8);
    height: fit-content;
    padding: 1em 2em;
    border-radius: 0.3em;
  }
</style>
