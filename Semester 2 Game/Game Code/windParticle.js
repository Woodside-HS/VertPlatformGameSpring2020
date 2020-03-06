class windParticle{
  constructor(x1, y1, x2, y2, id){
    this.loc = createVector(random(x1, x2), random(y1+10, y2-10));
    this.vel = createVector(0, 0);
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.id = id;
  }

  update(){
    this.vel = createVector(game.windboxes[game.gameScreen][this.id].xWind*5, game.windboxes[game.gameScreen][this.id].yWind*5)
    this.loc.add(this.vel);

    if (this.loc.x < this.x1){
      this.loc.x = this.x2-1;
    } else if (this.loc.x > this.x2){
      this.loc.x = this.x1+1;
    }
    if (this.loc.y < this.y1){
      this.loc.y = this.y2-1;
    } else if (this.loc.y > this.y2){
      this.loc.y = this.y1+1;
    }
  }

  render(){
    noStroke();
    fill(125, 125, 125, 125);
    ellipse(this.loc.x, this.loc.y, 8);
  }

  run(){
    this.update();
    this.render();
  }
}
