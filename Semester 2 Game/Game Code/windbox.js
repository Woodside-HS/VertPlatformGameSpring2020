class Windbox{

  constructor(y, h, direction, intensity){
    this.y = y;
    this.h = h;
    this.dir = direction;
    this.level = intensity;
  }

  update(){

  }

  render(){
    strokeWeight(0);
    fill(173, 216, 230, 200-40*this.level);
    rect(0, this.y, width, this.h);
    stroke(0, 0, 0);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
