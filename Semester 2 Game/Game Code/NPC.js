class NonPC{
  constructor(x, y, w, h, text, images){
    this.loc = createVector(x, y);
    this.text = text
    this.w = w;
    this.h = h;
    this.count = 0;
    this.timing = 0;
    this.frames = images;
  }

  update(){
    this.timing++;
  }

  render(){
    if (this.count === 0){
      if (this.timing >= 0 && this.timing < 30){
        image(this.frames[0], this.loc.x, this.loc.y);
      } else if (this.timing >= 30 && this.timing < 60){
        image(this.frames[1], this.loc.x, this.loc.y);
      } else if (this.timing >= 60 && this.timing < 90){
        image(this.frames[2], this.loc.x, this.loc.y);
      } else if (this.timing >= 90 && this.timing < 120){
        image(this.frames[1], this.loc.x, this.loc.y);
      } else if (this.timing >= 120){
        this.timing = 0;
        image(this.frames[0], this.loc.x, this.loc.y);
      }
    } else if (this.count != 0){
      if (this.count/60 <= this.text.length){
        if ((Math.floor(this.count/60))%2 === 0){
          image(this.frames[1], this.loc.x, this.loc.y);
        } else if ((Math.floor(this.count/60))%2 === 1){
          image(this.frames[2], this.loc.x, this.loc.y);
        }
      } else {
        image(this.frames[1], this.loc.x, this.loc.y);
      }
    }
  }

  run(){
    this.update();
    this.render();
  }







}
