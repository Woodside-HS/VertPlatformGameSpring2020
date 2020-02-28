class Platform{

  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.platImage = 0;
  }

  update(){
	if (this.x >= 0 && this.y >= 0){
	  this.platImage = game.platformOverlay.get(this.x, this.y, this.w, this.h);
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
