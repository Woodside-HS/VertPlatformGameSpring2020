class Platform{

  constructor(x, y, w, h, type){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.type = type;
    this.platImage = 0;
  }

  update(){
    if (this.x >= 0 && this.y >= 0){
      this.platImage = game.platformImages[game.platformOverlay].get(this.x, this.y, this.w, this.h);
    }
  }

  render(){
    noStroke();
    fill(255);
    if (this.platImage != 0){
      image(this.platImage, this.x, this.y);
      if (this.type === 1){
        fill(0, 0, 0, 80);
        rect(this.x, this.y, this.w, this.h);
      } else if (this.type === 2){
        fill(0, 0, 0, 160);
        rect(this.x, this.y, this.w, this.h);
      }
    } else {
      rect(this.x, this.y, this.w, this.h);
    }
    stroke(0, 0, 0);
    fill(255, 0, 0);
  }

  run(){
    this.update();
    this.render();
  }

} //end of Platform
