class NonPC{
  constructor(x, y, w, h, text, img){
    this.loc = createVector(x, y);
    this.text = text
    this.w = w;
    this.h = h;
    this.count = 0;
    this.img = img;
  }

  update(){
  }

  render(){
    fill(255)
    image(this.img, this.loc.x, this.loc.y);
    //rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  run(){
    this.update();
    this.render();
  }







}
