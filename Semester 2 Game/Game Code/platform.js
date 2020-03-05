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
    // if (this.type != 0){
    //   this.platImage = game.platformImages[this.type+4].get(this.x, this.y, this.w, this.h);
    // } else {
    //   this.platImage = game.platformImages[game.platformOverlay].get(this.x, this.y, this.w, this.h);
    // }
    this.platImage = game.platformImages[game.platformOverlay].get(this.x, this.y, this.w, this.h);
	}
  }

  render(){
    noStroke();
    fill(255);
	if (this.platImage != 0){
	  image(this.platImage, this.x, this.y);
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
