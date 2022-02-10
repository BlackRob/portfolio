<script>
  export let viewState = 0;
  export let layerNumber = 0;
  export let image;

  let currentState = 0;
  let currentBG = 0;
  $: zlayer = "z" + layerNumber;

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

<div
  id={zlayer}
  style="background-image: url('{image}')"
  class={changeState(viewState)}
/>

<style>
  .bg_container {
    position: absolute;
    width: 100%;
    top: 0;
    overflow-y: hidden;
    /* display: flex;
    flex: 1 1 auto; */
  }
  div {
    position: fixed;
    top: 0;
    min-height: 100%;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    overflow: hidden;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #z0 {
    z-index: 0;
  }
  #z1 {
    z-index: 1;
  }
  #z2 {
    z-index: 2;
  }
  #z3 {
    z-index: 3;
  }
  #z4 {
    z-index: 4;
  }
</style>
