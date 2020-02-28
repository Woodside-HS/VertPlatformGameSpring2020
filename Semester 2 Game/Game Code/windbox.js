class Windbox{

  constructor(x, y, w, h, xWind, yWind){
    this.x = x
    this.y = y;
    this.w = w;
    this.h = h;
    this.xWind = xWind;
    this.yWind = yWind;
    this.count = 0;
  }

  update(){
    if (game.gameScreen === 9){
      this.count++;
      if (this.count === 60){
        this.yWind = -4;
      } else if (this.count === 120){
        this.yWind = -2;
        this.count = 0;
      }
    } else if (game.gameScreen === 10){
      this.count++;
      if (this.count === 90){
        this.xWind = 0;
        this.yWind = -5;
      } else if (this.count === 180){
        this.xWind = 2;
        this.yWind = 0;
      } else if (this.count === 270){
        this.xWind = -2;
        this.yWind = 0;
        this.count = 0;
      }
    }
  }

  render(){
    strokeWeight(2);
    fill(173, 216, 230, 120);
    stroke(0);
    rect(this.x, this.y, this.w, this.h);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
