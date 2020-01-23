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
    this.platforms[0][0] = new Platform(width/2-100, height/4, 200, 65); //x, y, width, height
    this.platforms[0][1] = new Platform(width/2-78, 300, 190, 60);
    this.platforms[0][2] = new Platform(width/2-85, 350, 165, 45);
    this.platforms[0][3] = new Platform(width/2-55, 380, 130, 40);
    this.platforms[0][4] = new Platform(width/2-45, 410, 110, 35);
    this.platforms[1][0] = new Platform(0, height/2+200, width, 35);

  }
}
