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
