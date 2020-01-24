class Game{
  constructor(){
    this.platforms = [];
    this.gameScreen = 0;
    this.char = new Character(width/2, height/4);
    for (var i = 0; i < 3; i++){
      this.platforms[i] = [];
    }
    this.loadPlatforms();
  }

  run(){
    this.char.run();
    for (var i = 0; i < this.platforms[this.gameScreen].length; i++){
      this.platforms[this.gameScreen][i].run();
    }
  }

  loadPlatforms(){
    this.platforms[0][0] = new Platform(width/2-100, height/4, 200, 50); //x, y, width, height - base camp
    this.platforms[0][1] = new Platform(0, height/4.5, 70, height); //left walls
    this.platforms[0][2] = new Platform(0, height/9, 60, 120);
    this.platforms[0][3] = new Platform(0, height/18, 45, 120);
    this.platforms[0][4] = new Platform(0, height/27, 30, 120);
    this.platforms[0][5] = new Platform(width-70, height/4.5, 70, height); //right walls
    this.platforms[0][6] = new Platform(width-60, height/9, 60, 120);
    this.platforms[0][7] = new Platform(width-45, height/18, 45, 120);
    this.platforms[0][8] = new Platform(width-30, height/27, 30, 120);
    this.platforms[0][9] = new Platform(width/2-85, this.platforms[0][0].y+50, 50, 200); //descending cliff left
    this.platforms[0][10] = new Platform(width/2-65, this.platforms[0][9].y+200, 50, 200);
    this.platforms[0][11] = new Platform(width/2-45, this.platforms[0][10].y+200, 50, 200);
    this.platforms[0][12] = new Platform(width/2-25, this.platforms[0][11].y+200, 50, 200);
    //left arcing platforms
    this.platforms[1][0] = new Platform(0, 325, 600, 50);
    this.platforms[1][1] = new Platform(0, 375, 200, 75);
    this.platforms[1][2] = new Platform(0, 450, 100, 100);
    this.platforms[1][3] = new Platform(0, 550, 25, 150);
    //right wall
    this.platforms[1][4] = new Platform(width-75, 0, 75, 160);
    this.platforms[1][5] = new Platform(width-40, 160, 40, 160);
    this.platforms[1][6] = new Platform(width-15, 320, 15, 100);
    this.platforms[1][7] = new Platform(550, 170, 250, 50);
    //left wall
    this.platforms[1][8] = new Platform(0, 0, 75, 350);
    //lower right cliff face
    this.platforms[1][9] = new Platform(500, 600, 300, 160);
    this.platforms[1][10] = new Platform(525, 760, 275, 110);
    this.platforms[1][11] = new Platform(600, 870, 200, 80);
    this.platforms[1][12] = new Platform(700, 950, 100, 50);

  }
}
