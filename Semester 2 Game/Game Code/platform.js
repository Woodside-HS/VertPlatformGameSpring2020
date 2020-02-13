class Platform{

  constructor(x, y, w, h, type){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.platImage;
  }

  update(){
    this.platImage = game.platformOverlay.get(this.x, this.y, this.w, this.h);
  }

  render(){
    noStroke();
    fill(255);
    //rect(this.x, this.y, this.w, this.h);
    image(this.platImage, this.x, this.y);
    stroke(0, 0, 0);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
