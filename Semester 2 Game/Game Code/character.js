class Character{
  constructor(x, y){
    this.loc = createVector(x, y)
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.charSprite = loadImage('Pictures/Character/character_stance.png');
    this.xChange = 0;
    this.yChange = 0;
    this.moving = false;
    this.talking = false;
    this.fallDist = 0;
    this.startPos = 0;
    this.endPos = 0;
    this.startScreen = 0;
    this.endScreen = 0;
    this.start = 0;
    this.waitTime = 0;
    this.now = 0;
    this.beingBlown = false;
    this.readyToCalcFalling = false;
    this.onPlatform = false;
    this.platformOn = 0;
    this.keyIsBeingPressed = false;
  }

  run(){
    if (keyIsPressed === true){
      this.keyIsBeingPressed = true;
    } else {
      this.keyIsBeingPressed = false;
    }
    if (this.now - this.start >= this.waitTime){
      if (this.readyToCalcFalling){
        this.calcFallDamage();
      }
      this.screenCheck();
      this.checkWindbox();
      this.checkPlatform();
      if(this.moving === false){
        this.checkKeys();
      }
      this.interact();
      this.update();
      this.render();
    } else {
      this.checkWindbox();
      this.checkPlatform();
      this.screenCheck();
      this.update();
      fill(0, 0, 255);
      noStroke();
      rect(this.loc.x-20, this.loc.y-40, 40, 40);
      this.now = Date.now();
      if (this.now - this.start >= this.waitTime){
        this.start = 0;
        this.waitTime = 0;
        this.now = 0;
        this.readyToCalcFalling = false;
      }
    }
  }

  checkPlatform(){
    for (var i = 0; i < game.platforms[game.gameScreen].length; i++){
      let sideState = 0;
      let plat = game.platforms[game.gameScreen][i];
      //check if land on top
      if(this.loc.x+20 > plat.x && this.loc.x-20 < plat.x + plat.w && this.loc.y > plat.y && this.loc.y < plat.y + plat.h && this.vel.y > 0){
        if (this.platformOn.type === 2){

        } else {
          sideState = 1;
        }
      }
      //check if hit right
      if(this.loc.x-20 > plat.x + plat.w-20 && this.loc.x-20 < plat.x + plat.w && this.loc.y > plat.y && this.loc.y-40 < plat.y + plat.h && this.vel.x <= 0){
        sideState = 2;
      }
      //check if hit left
      if(this.loc.x+20 > plat.x && this.loc.x+20 < plat.x + 20 && this.loc.y > plat.y && this.loc.y-40 < plat.y + plat.h && this.vel.x >= 0){
        sideState = 2;
      }
      //check if hit bottom
      if(this.loc.x+20 > plat.x && this.loc.x-20 < plat.x + plat.w && this.loc.y-40 > plat.y + plat.h-20 && this.loc.y-40 < plat.y + plat.h && this.vel.y <= 0){
        sideState = 3;
      }
      //seperate, check if on platform
      if(this.loc.x+20 > plat.x && this.loc.x-20 < plat.x + plat.w && this.loc.y+1 > plat.y && this.loc.y-40 < plat.y + plat.h){
        this.onPlatform = true;
      }
      if(sideState === 1){
        this.platformOn = plat;
        this.xChange = 0;
        this.yChange = 0;
        this.moving = false;
        this.acc = createVector(0, 0);
        if (this.platformOn.type === 2){
          this.vel = createVector(0, 0);
          this.vel.y += 0.3;
        } else {
          this.vel = createVector(0, 0);
          this.loc.y = plat.y;
        }
        this.endPos = this.loc.y;
        this.endScreen = game.gameScreen;
        this.fallDist = (this.endPos - this.startPos) + 1000 * (this.endScreen - this.startScreen);
        this.startPos = this.loc.y;
        this.startScreen = game.gameScreen;
        console.log("Fall Distance: " + this.fallDist);
        this.readyToCalcFalling = true;
      } else if(sideState === 2){
        this.vel.x = -this.vel.x;
      } else if(sideState === 3){
        this.vel.y = -this.vel.y;
      }
    }
    if (this.onPlatform === false){
      this.platformOn = 0;
    }
  }

  checkWindbox(){
    for (var i = 0; i < game.windboxes[game.gameScreen].length; i++){
      let windbox = game.windboxes[game.gameScreen][i];
      //check if inside
      if(this.loc.y > windbox.y && this.loc.y-40 < windbox.y + windbox.h && this.loc.x + 20 > windbox.x && this.loc.x-20 < windbox.x + windbox.w){
        this.vel.x += (windbox.xWind)/10;
        this.vel.y += (windbox.yWind)/10;
      }
    }
  }

  screenCheck(){
    //goes through top
    if(this.loc.y > height){
      game.gameScreen++
      this.loc.y = 1
    }
    //goes through bottom
    if(this.loc.y < 0 && game.gameScreen > 0){
      game.gameScreen--
      this.loc.y = height-1
    }
    //bounce off sides
    if (this.loc.x-20 < 0){
      this.vel.x= -this.vel.x;
      this.loc.x = 22;
    }
    if (this.loc.x+20 > width){
      this.vel.x= -this.vel.x;
      this.loc.x = width-22;
    }
  }

  checkKeys(){
    //limits
    if(keyIsDown(RIGHT_ARROW) && abs(this.xChange) <= 30){
      if (this.xChange === 0){
        this.xChange++;
      }
      this.xChange++;
    }
    if(keyIsDown(LEFT_ARROW) && abs(this.xChange) <= 30){
      if (this.xChange === 0){
        this.xChange--;
      }
      this.xChange--;
    }
    if(keyIsDown(UP_ARROW) && abs(this.yChange) <= 40){
      if (this.yChange === 0){
        this.yChange--;
      }
      this.yChange--;
    }

    //no limits
    //if(keyIsDown(RIGHT_ARROW)){
    //this.xChange++;
    //}
    //if(keyIsDown(LEFT_ARROW)){
    //this.xChange--;
    //}
    //if(keyIsDown(UP_ARROW)){
    //this.yChange--;
    //}
  }

  update(){
    if (this.onPlatform === true){
      this.acc = createVector(0, 0);
    } else {
      this.acc = createVector(0, 0.5);
    }

    // //midair jump
    // if(((this.xChange != 0 || this.yChange != 0)) && keyIsPressed === false && this.moving === false){
    //   this.acc = createVector(0, 0.5);
    //   this.vel.x += this.xChange/2;
    //   this.vel.y += this.yChange/2;
    //   //this.vel = createVector(this.xChange/2, this.yChange/2);
    //   this.moving = true;
    //   this.startPos = this.loc.y;
    //   this.startScreen = game.gameScreen;
    // }

    //realistic jump
    if(((this.xChange != 0 || this.yChange != 0)) && keyIsPressed === false && this.moving === false && this.onPlatform === true){
      this.acc = createVector(0, 0.5);
      if (this.platformOn.type === 0){
        this.vel.x += this.xChange/2;
        this.vel.y += this.yChange/2;
      } else if (this.platformOn.type === 1){
        this.vel.x += this.xChange/3;
        this.vel.y += this.yChange/3;
      } else if (this.platformOn.type === 2){
        if (this.loc.y > this.platformOn.y+10){
          this.loc.x += this.xChange;
          this.loc.y += this.yChange;
        } else {
          this.vel.x += this.xChange/2;
          this.vel.y += this.yChange/2;
        }
      } else {
        this.vel.x += this.xChange/2;
        this.vel.y += this.yChange/2;
      }

      this.moving = true;
      this.startPos = this.loc.y;
      this.startScreen = game.gameScreen;
      this.platformOn = 0;
    }
    this.vel.add(this.acc);
    this.vel.limit(40)
    this.loc.add(this.vel);
    textSize(20);
    fill(255, 0, 255);
    text("Velocity: " + sqrt(sq(this.vel.x) + sq(this.vel.y)), 250, 30);
    this.onPlatform = false;
  }

  render(){
    fill(240, 178, 134);
    noStroke();
    if (this.keyIsBeingPressed === true && this.moving === false){
      image(this.charSprite, this.loc.x-40, this.loc.y-20, 80, 20);
      this.keyIsBeingPressed = false;
    } else {
      image(this.charSprite, this.loc.x-20, this.loc.y-40, 40, 40);
    }
  }

  calcFallDamage(){
    if (this.fallDist > 400){
      this.waitTime = this.fallDist*10;
      console.log("Wait Time: " + this.waitTime/1000 + " Seconds");
      this.start = Date.now();
      this.now = this.start;
    }
  }

  interact(){
    for (var i = 0; i < game.NPCs[game.gameScreen].length; i++){
      if(this.loc.x+20 > game.NPCs[game.gameScreen][i].loc.x-30
        && this.loc.x-20 < game.NPCs[game.gameScreen][i].loc.x + game.NPCs[game.gameScreen][0].w+30
        && this.loc.y > game.NPCs[game.gameScreen][i].loc.y-30
        && this.loc.y-40 < game.NPCs[game.gameScreen][i].loc.y + game.NPCs[game.gameScreen][0].h
        && keyIsDown(CONTROL)){
          this.talking = true
        }
    }
  }

}
