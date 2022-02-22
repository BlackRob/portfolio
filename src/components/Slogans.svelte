<div id="slogans">
  <div class="sloganLeft" />
  <div class="sloganCenter">
    This site was designed and coded by me,<br />
    using the <a href="https://svelte.dev/">Svelte</a> framework.<br />
    Unless stated otherwise, I still own <br />
    the copyright to everything here.
  </div>
  <div class="sloganRight" />
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
    text-align: center;
  }
  .sloganRight {
    margin: 0;
    grid-area: right;
    align-self: center;
    justify-self: start;
  }
</style>
