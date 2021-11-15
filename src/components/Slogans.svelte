<div id="slogans">
  <div class="sloganLeft">See a problem,<br />solve a problem</div>
  <div class="sloganCenter">JOAT</div>
  <div class="sloganRight">
    <strong>F</strong>ix <strong>T</strong>he <strong>W</strong>orld
  </div>
</div>

<style>
  #slogans {
    grid-area: bottom;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: "left center right";
    margin: 2em auto 0em auto;
    padding: 1em 2em;
    background-color: rgba(45, 45, 45, 0.8);
    border-radius: 0.3em;
  }
  .sloganLeft {
    margin: 0;
    grid-area: left;
    align-self: center;
    justify-self: end;
  }
  .sloganCenter {
    margin: 1em;
    grid-area: center;
    align-self: center;
    justify-self: center;
  }
  .sloganRight {
    margin: 0;
    grid-area: right;
    align-self: center;
    justify-self: start;
  }
</style>
