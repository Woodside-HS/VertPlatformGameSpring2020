class NonPC{
  constructor(x, y, w, h, text){
    this.loc = createVector(x, y);
    this.text = text
    this.w = w;
    this.h = h;
  }

  update(){
  }

  render(){
    fill(255)
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

  run(){
    this.update();
    this.render();
  }







}
