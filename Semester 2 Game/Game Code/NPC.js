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
    this.timimg++;
  }

  render(){
    //fill(255);
    if (this.count === 0){
      if (this.timing >= 0 && this.timimg < 30){
        image(this.frames[0], this.loc.x, this.loc.y);
        console.log("first frame");
      } else if (this.timing >= 30 && this.timimg < 60){
        image(this.frames[1], this.loc.x, this.loc.y);
      } else if (this.timing >= 60 && this.timimg < 90){
        image(this.frames[2], this.loc.x, this.loc.y);
      } else if (this.timing >= 90 && this.timimg < 120){
        image(this.frames[1], this.loc.x, this.loc.y);
      } else if (this.timimg >= 120){
        this.timing = 0;
      }
    } else if (this.count != 0){
      if (this.timing >= 0 && this.timimg < 30){
        image(this.frames[1], this.loc.x, this.loc.y);
      } else if (this.timing >= 30 && this.timimg < 60){
        image(this.frames[2], this.loc.x, this.loc.y);
      } else if (this.timing >= 60){
        this.timimg = 0;
      }
    }

    //rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  run(){
    this.update();
    this.render();
  }







}
