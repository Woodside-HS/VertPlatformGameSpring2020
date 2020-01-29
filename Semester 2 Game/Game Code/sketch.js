//  Seth Reis, Joey Jacob
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var game;
function setup() {
  var cnv = createCanvas(800, 1000);
  cnv.position(windowWidth/2-width/2, 30);
  background(0);
  game = new Game();
}

//  The draw function is called @ 30 fps
function draw(){
  background(0);
  stroke(0, 0, 255);
  line(0, 250, width, 250);
  line(0, 500, width, 500);
  line(0, 750, width, 750);
  line(width/2, 0, width/2, height);
  game.run();
}
