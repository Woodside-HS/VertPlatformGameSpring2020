//  Seth Reis, Joey Jacob
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var game;
function setup() {
  var cnv = createCanvas(800, 1000);
  cnv.position(windowWidth/2-width/2, 30);
  background(0);
  frameRate(60);
  game = new Game();
}

//  The draw function is called @ 30 fps
function draw(){
  if (game.screenState === "gameplay" || game.screenState === "pause"){
    createBackground();
  } else {
    background(0);
  }
  // stroke(0, 0, 255);
  // line(0, 250, width, 250);
  // line(0, 500, width, 500);
  // line(0, 750, width, 750);
  // line(width/2, 0, width/2, height);
  game.run();
}

function createBackground(){
  if (game.gameScreen >= 0 && game.gameScreen <= 2){
    //starting area
    background(34, 139, 34);
    game.platformOverlay = 0;
  } else if (game.gameScreen >= 3 && game.gameScreen <= 10){
    //windy ravine
    background(104, 109, 117);
    game.platformOverlay = 1;
  } else if (game.gameScreen >= 11 && game.gameScreen <= 18){
    //tombs
    background(224, 232, 107);
    game.platformOverlay = 2;
  } else if (game.gameScreen >= 19 && game.gameScreen <= 26){
    //tar
    background(57, 77, 58);
    game.platformOverlay = 3;
  } else if (game.gameScreen >= 27 && game.gameScreen <= 34){
    //ice
    background(50, 193, 237);
    game.platformOverlay = 4;
  } else if (game.gameScreen >= 35){
    //core
    background(173, 23, 23);
    game.platformOverlay = 5;
  }
}

function setGradient(c1, c2, left, right, top, bottom){
  // noprotect
  strokeWeight(1);
  noFill();
  for (var y = top; y < bottom; y++) {
    var inter = map(y, top, bottom, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(left, y, right, y);
  }
}

function keyPressed(){
  if (keyCode === ESCAPE){
    if (game.screenState === "gameplay"){
      //pause game
      game.screenState = "pause";
    } else if (game.screenState === "pause"){
      //unpause game
      game.screenState = "gameplay";
    }
  }
}

function mouseClicked(){
  if (game.screenState === "title"){
    if (mouseX > 550 && mouseX < 750 && mouseY > 850 && mouseY < 950){
      //click "Start"
      game.screenState = "gameplay";
    } else if (mouseX > 50 && mouseX < 250 && mouseY > 850 && mouseY < 950){
      //click "Help"
      game.screenState = "help";
    }
  } else if (game.screenState === "help"){
    if (mouseX > 650 && mouseX < 750 && mouseY > 850 && mouseY < 950){
      //click "Back"
      game.screenState = "title";
    }
  } else if (game.screenState === "pause"){
    if (mouseX > 50 && mouseX < 250 && mouseY > 850 && mouseY < 950){
      //click "Help"
      game.screenState = "help";
    }
  }
}
