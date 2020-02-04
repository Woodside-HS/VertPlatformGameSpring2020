class Windbox{

  constructor(x, y, w, h, xWind, yWind){
    this.x = x
    this.y = y;
    this.w = w;
    this.h = h;
    this.xWind = xWind;
    this.yWind = yWind;
  }

  update(){

  }

  render(){
    strokeWeight(0);
    fill(173, 216, 230, 120);
    rect(this.x, this.y, this.w, this.h);
    stroke(0, 0, 0);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
