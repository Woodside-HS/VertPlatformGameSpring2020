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
  if (game.gameScreen > 1){
    if (game.gameScreen === 2){
      //starting to windy ravine
      setGradient(color(34, 139, 34), color(104, 109, 117));
    } else {
      if (game.gameScreen > 9){
        if (game.gameScreen === 10){
          //windy ravine to tombs
          setGradient(color(104, 109, 117), color(224, 232, 107));
        } else {
          if (game.gameScreen > 17){
            if (game.gameScreen === 18){
              //tombs to tar
              setGradient(color(224, 232, 107), color(57, 77, 58));
            } else {
              if (game.gameScreen > 25){
                if (game.gameScreen === 26){
                  //tar to ice
                  setGradient(color(57, 77, 58), color(50, 193, 237));
                } else {
                  if (game.gameScreen > 33){
                    if (game.gameScreen === 34){
                      //ice to core
                      setGradient(color(50, 193, 237), color(173, 23, 23));
                    } else {
                      //core
                      background(173, 23, 23);
                    }
                  } else {
                    //ice
                    background(50, 193, 237);
                  }
                }
              } else {
                //tar
                background(57, 77, 58);
              }
            }
          } else {
            //tombs
            background(224, 232, 107);
          }
        }
      } else {
        //windy ravine
        background(104, 109, 117);
      }
    }
  } else {
    //starting area
    background(34, 139, 34);
  }
  stroke(0, 0, 255);
  line(0, 250, width, 250);
  line(0, 500, width, 500);
  line(0, 750, width, 750);
  line(width/2, 0, width/2, height);
  game.run();
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
