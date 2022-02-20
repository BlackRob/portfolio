// This js file takes an image, cuts it into pieces,
// randomly puts all but one of them into a 4x4 grid,
// and allows the pieces to be moved by clicking on a 
// piece adjacent to the empty spot, which will then swap
// the piece into the empty slot. By repeated clicking,
// the user is able to rearrange the original image.
// When all the pieces are arranged, the final missing
// piece will appear and complete the puzzle.

// Using a global object for simplicity
window.game = Object.create(null);
g = window.game; // save some typing :)

window.onload = function(){
  g.canvas = document.createElement("canvas");
  g.context = g.canvas.getContext('2d');
  g.puzzSize = 4; // defaults to 4x4 grid
  g.numPieces = g.puzzSize * g.puzzSize;

  // we create a div and put an image in it as a placeholder
  // before we create the puzzle; the div is added/removed as needed
  g.parent = document.getElementById('gameRow');

  g.colDiv = document.createElement('div');
  g.colDiv.id = "gameCol";

  g.img = document.createElement('img');
  g.img.src = "./simpsons-couch.jpg"; //default
  g.img.classList.add("img-fluid");

  g.colDiv.appendChild(g.img);
  g.parent.appendChild(g.colDiv);

  // variables for the game itself
  g.pieces = [];  // the col divs that will hold our puzzle
  g.pieceImgs = []; //original order, for comparison with
  g.pieceImgsWorking = []; // the current order
  g.currentDivs = g.parent.getElementsByTagName('div');
  g.hiddenPiece = null;
  g.hiddenPieceNum = null;
  g.clickable = [];
  g.moveCounter = 0;

  // other structural elements on the page
  g.modal = document.getElementById('customizeModal');
  g.footerL = document.getElementById('footerL');
  g.movesId = document.getElementById('moves');
  g.footerR = document.getElementById('footerR');
  // this is a workaround until I figure out an issue
  initializeModal();
}

function start() {
  if (g.pieces.length > 0) startOver();
  else {
    makePuzzCols();
    cutUpImage(g);
    playGame(g);
    document.getElementById("start").textContent = "RESET";
  }
}

function initializeModal() {
  // my radio buttons in my customization modal aren't showing
  // up initially unless I do this
  var threethree = document.getElementById("threethree").checked;
  var fourfour = document.getElementById("fourfour").checked;
  var fivefive = document.getElementById("fivefive").checked;
  if (g.puzzSize == 3) { threethree = true; fourfour = false; fivefive = false; check3();}
  if (g.puzzSize == 4) { threethree = false; fourfour = true; fivefive = false; check4();}
  if (g.puzzSize == 5) { threethree = false; fourfour = false; fivefive = true; check5();}
}

function customize() {
  var threethree = document.getElementById("threethree").checked;
  var fourfour = document.getElementById("fourfour").checked;
  var fivefive = document.getElementById("fivefive").checked;
  var newImg = document.getElementById("imgSelector").value;
  var needsRestart = false;

  if (newImg != g.img.src) {
    g.img.src = newImg;
    needsRestart = true;
  }
  if (g.puzzSize != 3 && threethree == true) {
    g.puzzSize = 3;
    g.numPieces = g.puzzSize * g.puzzSize;
    needsRestart = true;
  }
  if (g.puzzSize != 4 && fourfour == true) {
    g.puzzSize = 4;
    g.numPieces = g.puzzSize * g.puzzSize;
    needsRestart = true;
  }
  if (g.puzzSize != 5 && fivefive == true) {
    g.puzzSize = 5;
    g.numPieces = g.puzzSize * g.puzzSize;
    needsRestart = true;
  }
  $("#customizeModal").modal('hide');
  $('.navbar-collapse').collapse('hide');
  if(needsRestart) startOver();
}
function check3() {
  document.getElementById("threethree").checked = true;
}
function check4() {
  document.getElementById("fourfour").checked = true;
}
function check5() {
  document.getElementById("fivefive").checked = true;
}


function makePuzzCols() {
  if (g.parent.querySelector("#gameCol") != null) {
    g.parent.removeChild(g.colDiv);
  }

  for (var i = 0; i < g.numPieces; i++) {
    // create a col div
    var myDiv = document.createElement('div');
    myDiv.classList.add("pieces", "col", "px-0");
    myDiv.id = "piece" + i;
    // create an img for in the col
    var myImg = document.createElement('img');
    myImg.classList.add("img-fluid");
    myImg.id = "img" + i;
    myImg.style.opacity = "1";
    // put img in div then add div to document
    myDiv.appendChild(myImg);
    g.parent.appendChild(myDiv);
    // we need to add a fake-out, full width column
    // to split up where we want our cols to wrap
    if ( (i+1)%g.puzzSize == 0 && (i+1) != g.numPieces ) {
      var wrapDiv = document.createElement('div');
      wrapDiv.classList.add("w-100");
      g.parent.appendChild(wrapDiv);
    }
  }
  g.pieces = document.querySelectorAll('.pieces');
}

function cutUpImage(g) {
  var iw = g.img.width;
  var ih = g.img.height;
  var clipWidth = iw/g.puzzSize;
  var clipHeight = ih/g.puzzSize;
  g.canvas.width = clipWidth;
  g.canvas.height = clipHeight;
  
  var i = 0;
  for (var y = 0; y < g.puzzSize; y++) {
    for (var x = 0; x < g.puzzSize; x++) {
      g.context.drawImage( g.img, 
        x*clipWidth, y*clipHeight, clipWidth, clipHeight, 
        0, 0, clipWidth, clipHeight);
      var ni = new Image();
      ni.src = g.canvas.toDataURL('img/jpeg',1);
      g.pieceImgs[i++] = ni;
    }
  }

  g.pieceImgsWorking = unSolve(g.pieceImgs);

  for ( var j = 0; j < g.numPieces; j++) {
    g.pieces[j].firstChild.src = g.pieceImgsWorking[j].src;
  }
}

function playGame(g) {
  // make a tile "invisible"
  g.hiddenPieceNum = random(g.numPieces);
  g.hiddenPiece = g.pieces[g.hiddenPieceNum].firstChild;
  g.hiddenPiece.style.opacity = "0";
  // idea: figure out which pieces, when clicked,
  // could slide into hidden piece's spot, then
  // make those pieces clickable; when one of them
  // is clicked, make that invisible, remove event
  // listeners, then recalculate to find the new
  // clickables... repeat until won!
  findClickables(g);
}

function findClickables(g){
  g.clickable = [];
  for ( var i = 0; i < g.numPieces; i++) {
    if (g.pieces[i].firstChild.style.opacity == 0) {
      g.hiddenPieceNum = i;
      g.hiddenPiece = g.pieces[g.hiddenPieceNum].firstChild;
    }
    // check if piece[i] has an open spot above it
    if (i > g.puzzSize - 1) {
      if ((g.pieces[i - g.puzzSize].firstChild.style.opacity == 0)){
        g.clickable.push(i);
      }
    }
    // check if piece[i] has an open spot below it
    if (i < g.puzzSize*(g.puzzSize - 1)) {
      if ((g.pieces[i + g.puzzSize].firstChild.style.opacity == 0)){
        g.clickable.push(i);
      }
    }
    // check if piece[i] has an open spot to the right
    if (i%g.puzzSize < g.puzzSize-1 ) {
      if ((g.pieces[i + 1].firstChild.style.opacity == 0)){
        g.clickable.push(i);
      }
    }
    // check if piece[i] has an open spot to the left
    if (i%g.puzzSize > 0) {
      if ((g.pieces[i - 1].firstChild.style.opacity == 0)){
        g.clickable.push(i);
      }
    }
  }
  // now that we know which pieces could be moved to the
  // empty spot, make them clickable
  g.clickable.forEach(function(a){
    g.pieces[a].firstChild.addEventListener("click", movePiece);
    //console.log("made " + a + " clickable");
  })
}

function movePiece(e){
  g.moveCounter++;
  g.movesId.textContent = "MOVES: " + g.moveCounter;
  // swap images in pieces so it looks like they moved
  var tempImg = g.hiddenPiece.src;
  g.hiddenPiece.src = e.target.src;
  e.target.src = tempImg;
  // change the opacity so the right piece is still hidden
  e.target.style.opacity = 0;
  g.hiddenPiece.style.opacity = 1;
  // check if this move solved the game
  if (solved(g)) {
    //e.target.style.opacity = 1;
    resetDivs();
  }
  else {
    g.clickable.forEach(function(a){
      g.pieces[a].firstChild.removeEventListener("click", movePiece);
    })
    findClickables(g);
  }
}

function solved(g) {
  for ( var i=0; i < g.numPieces; i++ ) {
    if (g.pieces[i].firstChild.src != g.pieceImgs[i].src ) return false;
  }
  var win = document.getElementById("winner");
  win.textContent = "You won! Good job!";
  return true;
}

function startOver(){
  resetDivs();
  var win = document.getElementById("winner");
  win.textContent = "";
  g.pieces = [];
  g.pieceImgs = [];
  g.hiddenPiece = null;
  g.moveCounter = 0;
  g.movesId.textContent = "MOVES: " + g.moveCounter;
  document.getElementById("start").textContent = "START";
}


// helper functions
function resetDivs() {
  // remove all divs created when last game was made
  var theDivs = g.currentDivs;
  while (theDivs[0]) g.parent.removeChild(theDivs[0]);
  // replace with original picture
  g.parent.appendChild(g.colDiv);
}

function unSolve(_){
  /*  don't actually use the source file, because globals,
      but included it in the call for clarity */
  // setup some function scope aliases to make this readable
  var sz = g.puzzSize;
  var sz2 = sz * sz;
  // we need an ordered array to disorder
  var shuffled = [];
  for ( var i = 0; i < sz2; i++) shuffled.push(i);
  // create an array of all possible legal moves for this size grid:
  // start with an empty array
  var tiles = [];
  /*  imagine the grid is like this (for a 3x3)
          0 1 2
          3 4 5
          6 7 8
      for each numbered position, make an entry into the array;
      the value of that entry will be another array, which will be 
      filled with the numbers of all the pieces that could slide
      vertically or horizontally into that positions spot if it were
      to disappear */  
  for ( var i = 0; i < sz2; i++) {
      tiles[i] = [];
      // check if piece[i] has an open spot above it
      if (i > sz - 1) tiles[i].push(i - sz);
      // check if piece[i] has an open spot below it
      if (i < sz*(sz - 1)) tiles[i].push(i + sz);
      // check if piece[i] has an open spot to the right
      if (i % sz < sz - 1 ) tiles[i].push(i + 1);
      // check if piece[i] has an open spot to the left
      if (i % sz > 0) tiles[i].push(i - 1);
  }
  /*  now we know each possible next position from each current position:
      imagine starting from the solved puzzle and work backwards, randomly
      choosing a move, then repeating 100 times (should be enough) */
  var active = Math.floor(Math.random()*sz2); //starting point
  for ( var i = 0; i < 100; i++) {
      var temp = shuffled[active];
      var next = tiles[active][Math.floor(Math.random()*tiles[active].length)];
      shuffled[active] = shuffled[next];
      shuffled[next] = temp;
      active = next;
  }
  // using tiles as a cipher, return a remapped version of our original array
  return g.pieceImgs.map(function(x,i){
      return g.pieceImgs[shuffled[i]];
  });
}

function random(number) {
  return Math.floor(Math.random()*number);
}

