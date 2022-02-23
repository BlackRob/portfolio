<script>
  export let viewState = 0;
  // layerNumber is 10 less than the z-index for content layers
  const layerNumber = 1;

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

<div id="writing" class={changeState(viewState)}>
  <h1>Things I've written</h1>
  <h2>Non-fiction</h2>
  <div class="item">
    <a
      href="https://medium.com/english4it/why-articles-matter-a-native-listeners-perspective-1c53de198920"
    >
      Why Articles Matter: A Native Listener's Perspective
    </a> An article I wrote for an English school I was working at. I tried to explain
    why proper usage of definite and indefinite articles is important in English.
  </div>
  <div class="item">
    <a href="http://workingclasshouses.com"> workingclasshouses.com </a> A blog I
    kept when I was building a tiny house on a trailer. It's not super polished,
    and I don't think anyone ever read it, but I'm proud of some of the writing.
  </div>
  <p>
    I also have experience with technical and semi-technical writing, including
    legal briefs. I pride myself on being able to explain things clearly, making
    complicated ideas easier to understand, and crafting sound, convincing
    arguments to support my points. I have written some longer work (software
    user manuals), but they're not online, so I can't link to them.
  </p>
  <h2>Fiction</h2>
  <div class="item">
    <a href="writings/waves.html"> Waves </a> A fable, and part of a series of stories
    starring the Devil.
  </div>
  <div class="item">
    <a href="writings/the_gingerfolk_ball.html"> The Gingerfolk Ball </a> A rhyming
    story about how gingerbread cookies come to life and have a party on New Year's
    Day. Excerpt.
  </div>
  <div class="item">
    <a href="https://odessa-journal.com/wild-odessa-our-rare-bird/">
      Wild Odessa: Our Rare Bird
    </a> is something I wrote for an online journal in Odessa, Ukraine. I wrote it
    for April Fools' Day, which is traditionally a big deal in Odessa.
  </div>
  <div class="item">
    <a href="writings/the_great_green_tomato.html">The Great Green Tomato</a>
    A short story I wrote for a class I was teaching.
  </div>
  <div class="item">
    <a
      href="https://www.amazon.com/Goblin-King-Monsters-York-Book-ebook/dp/B07D7Y3B67/ref=sr_1_49?crid=1HKHZ13KXJGYH&keywords=the+goblin+king&qid=1645521084&s=digital-text&sprefix=the+goblin+king%2Cdigital-text%2C217&sr=1-49"
      >The Goblin King</a
    >
    I wrote a novel, published it to the Kindle store, then decided I wasn't happy
    with it, so I never did even the first thing to promote it. Might go back and
    fix it some day. It has some good points, but also some flaws. I had plans to
    continue the story.
  </div>
  <h2>Poems</h2>
  <div class="item">
    <a href="writings/the_day_of_the_week_diet.html">The Day-of-the-week Diet</a
    >
  </div>
  <div class="item">
    <a href="writings/i_love_penguins.html">I Love Penguins</a>
  </div>
  <div class="item">
    <a href="writings/bananas.html">A Sonnet About Bananas</a>
  </div>
  <div class="item">
    <a href="writings/gingerpendence_day.html">Gingerpendence Day</a>
  </div>
  <br />
</div>

<style>
  #writing {
    grid-area: overlap;
    background-color: rgba(45, 45, 45, 0.85);
    height: fit-content;
    padding: 1em min(5em, 3vw) 1em min(5em, 3vw);
    border-radius: 0.3em;
  }
</style>
