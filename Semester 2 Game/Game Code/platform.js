class Platform{

  constructor(x, y, w, h, type){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
  }

  update(){

  }

  render(){
    stroke(255, 255, 255);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    stroke(0, 0, 0);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
