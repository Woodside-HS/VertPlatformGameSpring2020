class Game{
  constructor(){
    this.platforms = [];
    this.windboxes = [];
    this.waterzones = [];
    this.gameScreen = 0;
    this.char = new Character(width/2, height/4);
    for (var i = 0; i < 43; i++){
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
    this.platforms[0][0] = new Platform(300, height/4, 200, 50); //x, y, width, height - base camp
    //screen 1
    //left walls
    this.platforms[0][1] = new Platform(0, height/4.5, 70, height);
    this.platforms[0][2] = new Platform(0, height/9, 60, 120);
    this.platforms[0][3] = new Platform(0, height/18, 45, 120);
    this.platforms[0][4] = new Platform(0, height/27, 30, 120);
    //right walls
    this.platforms[0][5] = new Platform(width-70, height/4.5, 70, height);
    this.platforms[0][6] = new Platform(width-60, height/9, 60, 120);
    this.platforms[0][7] = new Platform(width-45, height/18, 45, 120);
    this.platforms[0][8] = new Platform(width-30, height/27, 30, 120);
    //descending cliff left
    this.platforms[0][9] = new Platform(315, 300, 50, 200);
    this.platforms[0][10] = new Platform(335, 500, 50, 200);
    this.platforms[0][11] = new Platform(345, 700, 50, 200);
    this.platforms[0][12] = new Platform(355, 900, 50, 200);
    //descending right cliff
    this.platforms[0][13] = new Platform(355, 300, 140, 50);
    this.platforms[0][14] = new Platform(335, 325, 150, 50);
    this.platforms[0][15] = new Platform(315, 350, 150, 50);
    this.platforms[0][16] = new Platform(360, 375, 90, 125);
    this.platforms[0][17] = new Platform(385, 500, 50, 125);
    this.platforms[0][18] = new Platform(370, 625, 50, 125);
    this.platforms[0][19] = new Platform(395, 750, 50, 200);
    this.platforms[0][20] = new Platform(375, 890, 50, 200);
    this.platforms[0][21] = new Platform(425, 990, 10, 10);
    //right side platforms
    this.platforms[0][22] = new Platform(630, 350, 100, 50)
    this.platforms[0][23] = new Platform(435, 470, 100, 50)
    this.platforms[0][24] = new Platform(620, 600, 120, 50)
    this.platforms[0][25] = new Platform(345, 750, 200, 50)
    //left arcing platforms
    this.platforms[1][0] = new Platform(0, 325, 600, 50);
    this.platforms[1][1] = new Platform(0, 375, 200, 60);
    this.platforms[1][2] = new Platform(0, 435, 100, 70);
    this.platforms[1][3] = new Platform(0, 505, 25, 80);
    this.platforms[1][4] = new Platform(525, 325, 75, 75);
    //right wall
    this.platforms[1][5] = new Platform(width-70, 0, 70, 160);
    this.platforms[1][6] = new Platform(width-40, 160, 40, 160);
    this.platforms[1][7] = new Platform(width-15, 320, 15, 100);
    this.platforms[1][8] = new Platform(550, 160, 250, 50);
    //left wall
    this.platforms[1][9] = new Platform(0, 0, 70, 350);
    //lower right cliff face
    this.platforms[1][10] = new Platform(500, 600, 300, 160);
    this.platforms[1][11] = new Platform(525, 760, 275, 110);
    this.platforms[1][12] = new Platform(600, 870, 200, 80);
    this.platforms[1][13] = new Platform(700, 950, 100, 50);
    //lower platforms
    this.platforms[1][14] = new Platform(230, 500, 150, 50);
    this.platforms[1][15] = new Platform(0, 690, 170, 50);
    this.platforms[1][16] = new Platform(120, 850, 180, 50);
    //screen 3
    this.platforms[2][0] = new Platform(200, 250, 400, 50);
    this.platforms[2][1] = new Platform(0, 450, 200, 50);
    this.platforms[2][2] = new Platform(300, 650, 200, 50);
    this.platforms[2][3] = new Platform(600, 790, 200, 50);
    this.platforms[2][4] = new Platform(0, 850, 180, 50);
    this.platforms[2][5] = new Platform(700, 0, 100, 75);
    this.platforms[2][6] = new Platform(750, 75, 50, 50);
    //literal bottom
    this.platforms[42][0] = new Platform(0, 900, 800, 100)
  }
}
