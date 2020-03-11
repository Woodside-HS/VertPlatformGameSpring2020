class Game{
  constructor(){
    this.framesRunInGameplay = 0;
    this.platforms = [];
    this.windboxes = [];
    this.NPCs = []
    this.platformImages = [];
    this.gameScreen = 16;
    this.char = new Character(width/2, height/4);
    this.char.startScreen = this.gameScreen;
    this.screenState = "title";
    this.platformOverlay = 0;
    for (var i = 0; i < 43; i++){
      this.platforms[i] = [];
      this.windboxes[i] = [];
      this.NPCs[i] = [];
    }
    this.loadPlatforms();
    this.loadWindboxes();
    this.loadPlatformImages();
    this.loadNPCs();
  }

  run(){
    if (this.screenState === "gameplay"){
      this.runGameplay();
    } else if (this.screenState === "title"){
      this.runTitle();
    } else if (this.screenState === "help"){
      this.runHelp();
    } else if (this.screenState === "pause"){
      this.runPause();
    }
  }

  loadNPCs(){
    this.NPCs[1][0] = new NonPC(300, 285, 40, 40, "Testing Testing 1 2 3. Hopefully this works", loadImage('Pictures/Leaf NPC/frame_1.png'));
    this.NPCs[6][0] = new NonPC(600, 135, 40, 40, "I'd be more careful if I were you. Choose Wisely.", loadImage('Pictures/Leaf NPC/frame_1.png'));
    this.NPCs[16][0] = new NonPC(470, 40, 40, 40, "It's dark and scary here, I knew I should have turned back. Beware, the bog is up ahead.", loadImage('Pictures/Leaf NPC/frame_1.png'));
    this.NPCs[21][0] = new NonPC(550, 250, 40, 40, "Welcome to my Jungle traveler. Bewarned, you may find your footing ... unstable.", loadImage('Pictures/Leaf NPC/frame_1.png'));
  }

  loadPlatforms(){
    //key: type 0 = normal, type 1 = sticky tar, type 2 = sinky tar, type 3 = ice, type 4 = collapsible

    //zone 1 - The Forest

    //screen 1
    this.platforms[0][0] = new Platform(300, height/4, 200, 50, 0); //x, y, width, height - base camp
    //left walls
    this.platforms[0][1] = new Platform(0, height/4.5, 70, height, 0);
    this.platforms[0][2] = new Platform(0, height/9, 60, 120, 0);
    this.platforms[0][3] = new Platform(0, height/18, 45, 120, 0);
    this.platforms[0][4] = new Platform(0, height/27, 30, 120, 0);
    //right walls
    this.platforms[0][5] = new Platform(width-70, height/4.5, 70, height, 0);
    this.platforms[0][6] = new Platform(width-60, height/9, 60, 120, 0);
    this.platforms[0][7] = new Platform(width-45, height/18, 45, 120, 0);
    this.platforms[0][8] = new Platform(width-30, height/27, 30, 120, 0);
    //descending cliff left
    this.platforms[0][9] = new Platform(315, 300, 50, 200, 0);
    this.platforms[0][10] = new Platform(335, 500, 50, 200, 0);
    this.platforms[0][11] = new Platform(345, 700, 50, 200, 0);
    this.platforms[0][12] = new Platform(355, 900, 50, 100, 0);
    //descending right cliff
    this.platforms[0][13] = new Platform(360, 300, 135, 50, 0);
    this.platforms[0][14] = new Platform(360, 325, 125, 50, 0);
    this.platforms[0][15] = new Platform(360, 350, 105, 50, 0);
    this.platforms[0][16] = new Platform(360, 375, 90, 125, 0);
    this.platforms[0][17] = new Platform(385, 500, 50, 125, 0);
    this.platforms[0][18] = new Platform(360, 325, 60, 475, 0);
    this.platforms[0][19] = new Platform(395, 750, 50, 200, 0);
    this.platforms[0][20] = new Platform(375, 890, 50, 200, 0);
    this.platforms[0][21] = new Platform(425, 990, 10, 10, 0);
    //right side platforms
    this.platforms[0][22] = new Platform(630, 350, 100, 50, 0);
    this.platforms[0][23] = new Platform(435, 470, 100, 50, 0);
    this.platforms[0][24] = new Platform(620, 600, 120, 50, 0);
    this.platforms[0][25] = new Platform(400, 780, 145, 50, 0);

    //sccreen 2
    //left arcing platforms
    this.platforms[1][0] = new Platform(0, 325, 600, 50, 0);
    this.platforms[1][1] = new Platform(0, 375, 200, 60, 0);
    this.platforms[1][2] = new Platform(0, 435, 100, 70, 0);
    this.platforms[1][3] = new Platform(0, 505, 25, 80, 0);
    this.platforms[1][4] = new Platform(525, 325, 75, 75, 0);
    //right wall
    this.platforms[1][5] = new Platform(width-70, 0, 70, 160, 0);
    this.platforms[1][6] = new Platform(width-40, 160, 40, 160, 0);
    this.platforms[1][7] = new Platform(width-15, 320, 15, 100, 0);
    this.platforms[1][8] = new Platform(550, 160, 250, 50, 0);
    //left wall
    this.platforms[1][9] = new Platform(0, 0, 70, 350, 0);
    //lower right cliff face
    this.platforms[1][10] = new Platform(500, 600, 300, 160, 0);
    this.platforms[1][11] = new Platform(525, 760, 275, 110, 0);
    this.platforms[1][12] = new Platform(600, 870, 200, 80, 0);
    this.platforms[1][13] = new Platform(700, 950, 100, 50, 0);
    //lower platforms
    this.platforms[1][14] = new Platform(230, 500, 150, 50, 0);
    this.platforms[1][15] = new Platform(0, 690, 170, 50, 0);
    this.platforms[1][16] = new Platform(120, 850, 180, 50, 0);
    //top bounce fixer
    this.platforms[1][17] = new Platform(315, -51, 120, 50, 0);

    //screen 3
    this.platforms[2][0] = new Platform(200, 250, 400, 60, 0);
    this.platforms[2][1] = new Platform(0, 450, 200, 45, 0);
    this.platforms[2][2] = new Platform(300, 650, 200, 35, 0);
    this.platforms[2][3] = new Platform(600, 790, 200, 45, 0);
    this.platforms[2][4] = new Platform(0, 850, 180, 50, 0);
    this.platforms[2][5] = new Platform(700, 0, 100, 75, 0);
    this.platforms[2][6] = new Platform(750, 75, 50, 50, 0);


    //zone 2 - widny ravine

    //screen 4
    this.platforms[3][0] = new Platform(200, 150, 375, 50, 0);
    this.platforms[3][1] = new Platform(0, 350, 250, 50, 0); //wind between 250 - 500 on the y and 625 - 875 on the y
    this.platforms[3][2] = new Platform(455, 580, 200, 50, 0);
    this.platforms[3][3] = new Platform(75, 600, 150, 50), 0;
    this.platforms[3][4] = new Platform(150, 950, 150, 50, 0);
    this.platforms[3][5] = new Platform(675, 825, 125, 50, 0);

    //screen 5
    this.platforms[4][0] = new Platform(0, 125, 250, 50, 0);
    this.platforms[4][1] = new Platform(550, 125, 250, 50, 0);
    this.platforms[4][2] = new Platform(150, 375, 200, 50, 0);
    this.platforms[4][3] = new Platform(560, 375, 125, 50, 0);
    this.platforms[4][4] = new Platform(400, 625, 150, 50, 0);
    this.platforms[4][5] = new Platform(150, 750, 125, 50, 0);
    this.platforms[4][6] = new Platform(200, 950, 400, 50, 0);

    //screen 6
    this.platforms[5][0] = new Platform(125, 150, 200, 50, 0);
    this.platforms[5][1] = new Platform(width-125, 125, 125, 50, 0);
    this.platforms[5][2] = new Platform(0, 450, 125, 50, 0);
    this.platforms[5][3] = new Platform(125, 400, 50, 100, 0);
    this.platforms[5][4] = new Platform(500, 300, 175, 50, 0);
    this.platforms[5][5] = new Platform(width-190, 610, 190, 40, 0);
    this.platforms[5][6] = new Platform(400, 730, 125, 35, 0);
    this.platforms[5][7] = new Platform(275, 765, 125, 35, 0);
    this.platforms[5][8] = new Platform(380, 745, 40, 40, 0);
    this.platforms[5][9] = new Platform(200, 925, 200, 50, 0);

    //screen 7
    this.platforms[6][0] = new Platform(0, 275, 250, 50, 0);
    this.platforms[6][1] = new Platform(0, 325, 175, 40, 0);
    this.platforms[6][2] = new Platform(0, 360, 125, 30, 0);
    this.platforms[6][3] = new Platform(0, 380, 75, 20, 0);
    this.platforms[6][4] = new Platform(350, 440, 150, 35, 0);
    this.platforms[6][5] = new Platform(550, 175, 250, 50, 0);
    this.platforms[6][6] = new Platform(625, 225, 175, 40, 0);
    this.platforms[6][7] = new Platform(675, 260, 125, 30, 0);
    this.platforms[6][8] = new Platform(725, 280, 75, 20, 0);
    this.platforms[6][9] = new Platform(370, 450, 50, 550, 0);
    //right side
    this.platforms[6][10] = new Platform(670, 480, 150, 40, 0);
    this.platforms[6][11] = new Platform(690, 520, 130, 20, 0);
    this.platforms[6][12] = new Platform(710, 540, 110, 10, 0);
    this.platforms[6][13] = new Platform(575, 650, 250, 30, 0);
    this.platforms[6][14] = new Platform(600, 680, 200, 20, 0);
    this.platforms[6][15] = new Platform(625, 700, 200, 15, 0);
    this.platforms[6][16] = new Platform(420, 840, 150, 40, 0);
    this.platforms[6][17] = new Platform(420, 860, 75, 40, 0);
    this.platforms[6][18] = new Platform(420, 760, 30, 120, 0);
    this.platforms[6][19] = new Platform(420, 660, 15, 100, 0);
    this.platforms[6][25] = new Platform(420, 900, 40, 100, 0)
    //left side
    this.platforms[6][20] = new Platform(0, 880, 180, 50, 0);
    this.platforms[6][21] = new Platform(160, 860, 20, 20, 0);
    this.platforms[6][22] = new Platform(250, 575, 150, 40, 0);
    this.platforms[6][23] = new Platform(230, 725, 150, 40, 0);
    this.platforms[6][24] = new Platform(340, 950, 30, 50, 0)

    //screen 8
    this.platforms[7][0] = new Platform(370, 0, 60, 1000, 0);
    this.platforms[7][1] = new Platform(340, 0, 30, 50, 0);
    this.platforms[7][2] = new Platform(430, 0, 20, 100, 0);
    //left side
    this.platforms[7][3] = new Platform(430, 250, 140, 50, 0);
    this.platforms[7][4] = new Platform(430, 300, 70, 30, 0);
    this.platforms[7][5] = new Platform(430, 400, 20, 200, 0);
    this.platforms[7][6] = new Platform(620, 500, 180, 50, 0);
    this.platforms[7][7] = new Platform(620, 550, 30, 15, 0);
    this.platforms[7][8] = new Platform(720, 550, 80, 15, 0);
    this.platforms[7][9] = new Platform(780, 565, 30, 10, 0);
    this.platforms[7][10] = new Platform(430, 800, 150, 50, 0);
    this.platforms[7][11] = new Platform(430, 850, 60, 60, 0);
    this.platforms[7][12] = new Platform(680, 800, 120, 50, 0);
    this.platforms[7][13] = new Platform(740, 850, 60, 30, 0);
    //right side
    this.platforms[7][14] = new Platform(0, 250, 130, 30, 0);
    this.platforms[7][15] = new Platform(320, 250, 50, 80, 0);
    this.platforms[7][16] = new Platform(350, 330, 20, 30, 0);
    this.platforms[7][17] = new Platform(230, 520, 140, 50, 0);
    this.platforms[7][18] = new Platform(340, 570, 30, 350, 0);
    this.platforms[7][19] = new Platform(0, 450, 60, 30, 0);
    this.platforms[7][20] = new Platform(170, 750, 200, 50, 0);
    this.platforms[7][21] = new Platform(300, 800, 70, 40, 0);

    //screen 9
    //column
    this.platforms[8][0] = new Platform(370, 0, 60, 700, 0);
    //left side
    this.platforms[8][1] = new Platform(0, 140, 170, 40, 0);
    this.platforms[8][2] = new Platform(130, 120, 40, 60, 0);
    this.platforms[8][3] = new Platform(320, 0, 80, 80, 0);
    this.platforms[8][4] = new Platform(190, 310, 210, 50, 0);
    this.platforms[8][5] = new Platform(0, 470, 140, 30, 0);
    this.platforms[8][6] = new Platform(0, 450, 20, 50, 0);
    this.platforms[8][7] = new Platform(120, 450, 20, 50, 0);
    this.platforms[8][8] = new Platform(280, 550, 120, 40, 0);
    this.platforms[8][9] = new Platform(200, 650, 200, 50, 0);
    //right side
    this.platforms[8][10] = new Platform(400, 0, 55, 140, 0);
    this.platforms[8][11] = new Platform(400, 140, 200, 40, 0);
    this.platforms[8][12] = new Platform(400, 180, 80, 40, 0);
    this.platforms[8][13] = new Platform(600, 260, 200, 20, 0);
    this.platforms[8][14] = new Platform(400, 330, 120, 40, 0);
    this.platforms[8][15] = new Platform(400, 370, 45, 330, 0);
    this.platforms[8][16] = new Platform(400, 670, 140, 30, 0);
    this.platforms[8][17] = new Platform(700, 450, 100, 50, 0);
    this.platforms[8][18] = new Platform(550, 590, 250, 20, 0);
    this.platforms[8][19] = new Platform(650, 610, 150, 20, 0);
    this.platforms[8][20] = new Platform(750, 630, 50, 20, 0);
    //bottom area
    this.platforms[8][21] = new Platform(120, 930, 240, 60, 0);
    this.platforms[8][22] = new Platform(500, 930, 350, 60, 0);

    //screen 10
    this.platforms[9][0] = new Platform(120, 100, 380, 50, 0);
    this.platforms[9][1] = new Platform(360, 300, 200, 50, 0);
    this.platforms[9][2] = new Platform(420, 500, 200, 50, 0);
    this.platforms[9][3] = new Platform(150, 600, 120, 50, 0);
    this.platforms[9][4] = new Platform(625, 750, 175, 50, 0);
    this.platforms[9][5] = new Platform(225, 850, 200, 50, 0);


    //screen 11
    //mess of platforms
    this.platforms[10][0] = new Platform(0, 100, 250, 40, 0);
    this.platforms[10][1] = new Platform(390, 100, 100, 30, 0);
    this.platforms[10][2] = new Platform(490, 100, 120, 40, 0);
    this.platforms[10][3] = new Platform(400, 180, 40, 60, 0);
    this.platforms[10][4] = new Platform(490, 100, 40, 180, 0);
    this.platforms[10][5] = new Platform(0, 220, 60, 100, 0);
    this.platforms[10][6] = new Platform(140, 220, 80, 30, 0);
    this.platforms[10][7] = new Platform(650, 350, 150, 40, 0);
    this.platforms[10][8] = new Platform(300, 300, 120, 40, 0);
    this.platforms[10][9] = new Platform(0, 430, 80, 40, 0);
    this.platforms[10][10] = new Platform(150, 430, 80, 40, 0);
    this.platforms[10][11] = new Platform(320, 470, 110, 40, 0);
    this.platforms[10][12] = new Platform(490, 390, 60, 80, 0);
    this.platforms[10][13] = new Platform(60, 600, 140, 40, 0);
    this.platforms[10][14] = new Platform(0, 700, 130, 40, 0);
    this.platforms[10][15] = new Platform(110, 740, 130, 40, 0);
    this.platforms[10][16] = new Platform(300, 610, 40, 90, 0);
    this.platforms[10][17] = new Platform(490, 515, 170, 50, 0);
    this.platforms[10][18] = new Platform(750, 430, 50, 90, 0);
    this.platforms[10][19] = new Platform(720, 690, 80, 30, 0);
    this.platforms[10][20] = new Platform(520, 710, 130, 40, 0);
    //bottom catch
    this.platforms[10][21] = new Platform(0, 900, 140, 100, 0);
    this.platforms[10][22] = new Platform(250, 900, 300, 100, 0);
    this.platforms[10][23] = new Platform(660, 900, 140, 100, 0);


    //Zone 3: Ancient Tomb

    //tomb walls
    for (var i = 11; i < 19; i++){
      this.platforms[i][0] = new Platform(0, 0, 40, height, 0);
      this.platforms[i][1] = new Platform(width-40, 0, 40, height, 0);
    }

    //screen 12
    this.platforms[11][2] = new Platform(130, 150, 200, 50, 0);
    this.platforms[11][3] = new Platform(300, 950, 200, 50, 0);
    this.platforms[11][4] = new Platform(470, 150, 200, 50, 0);
    this.platforms[11][5] = new Platform(250, 400, 300, 50, 0);
    this.platforms[11][6] = new Platform(470, 650, 200, 50, 0);
    this.platforms[11][7] = new Platform(130, 650, 200, 50, 0);
    this.platforms[11][8] = new Platform(40, 850, 150, 50, 0);
    this.platforms[11][9] = new Platform(650, 850, 150, 50, 0);
    this.platforms[11][10] = new Platform(0, -100, 140, 100, 0);
    this.platforms[11][11] = new Platform(260, -100, 300, 100, 0);
    this.platforms[11][12] = new Platform(660, -100, 140, 100, 0);

    //screen 13
    this.platforms[12][2] = new Platform(40, 150, 320, 40, 0);
    this.platforms[12][3] = new Platform(120, 300, 240, 40, 0);
    this.platforms[12][4] = new Platform(40, 450, 320, 40, 0);
    this.platforms[12][5] = new Platform(120, 600, 240, 40, 0);
    this.platforms[12][6] = new Platform(40, 750, 320, 40, 0);
    this.platforms[12][7] = new Platform(40, 900, 320, 40, 0);
    this.platforms[12][8] = new Platform(440, 150, 220, 40, 0);
    this.platforms[12][9] = new Platform(440, 300, 320, 40, 0);
    this.platforms[12][10] = new Platform(440, 450, 220, 40, 0);
    this.platforms[12][11] = new Platform(440, 600, 320, 40, 0);
    this.platforms[12][12] = new Platform(440, 750, 80, 40, 0);
    this.platforms[12][13] = new Platform(600, 750, 200, 40, 0);
    this.platforms[12][14] = new Platform(440, 900, 240, 40, 0);
    this.platforms[12][15] = new Platform(300, -100, 200, 100, 0);

    //screen 14
    this.platforms[13][2] = new Platform(40, 100, 500, 50, 0);
    this.platforms[13][3] = new Platform(640, 100, 120, 50, 0);
    this.platforms[13][4] = new Platform(40, 300, 200, 50, 0);
    this.platforms[13][5] = new Platform(340, 300, 320, 50, 0);
    this.platforms[13][6] = new Platform(140, 500, 280, 50, 0);
    this.platforms[13][7] = new Platform(520, 500, 140, 50, 0);
    this.platforms[13][8] = new Platform(140, 700, 120, 50, 0);
    this.platforms[13][9] = new Platform(360, 700, 400, 50, 0);
    this.platforms[13][10] = new Platform(40, 900, 360, 50, 0);
    this.platforms[13][11] = new Platform(500, 900, 160, 50, 0);

    //screen 15
    this.platforms[14][2] = new Platform(120, 80, 100, 40, 0);
    this.platforms[14][3] = new Platform(300, 80, 300, 40, 0);
    this.platforms[14][4] = new Platform(680, 80, 80, 40, 0);
    this.platforms[14][5] = new Platform(120, 240, 280, 40, 0);
    this.platforms[14][6] = new Platform(480, 240, 120, 40, 0);
    this.platforms[14][7] = new Platform(680, 240, 80, 40, 0);
    this.platforms[14][8] = new Platform(120, 400, 100, 40, 0);
    this.platforms[14][9] = new Platform(300, 400, 100, 40, 0);
    this.platforms[14][10] = new Platform(480, 400, 280, 40, 0);
    this.platforms[14][11] = new Platform(40, 560, 180, 40, 0);
    this.platforms[14][12] = new Platform(300, 560, 100, 40, 0);
    this.platforms[14][13] = new Platform(480, 560, 200, 40, 0);
    this.platforms[14][14] = new Platform(40, 720, 180, 40, 0);
    this.platforms[14][15] = new Platform(300, 720, 200, 40, 0);
    this.platforms[14][16] = new Platform(580, 720, 100, 40, 0);
    this.platforms[14][17] = new Platform(40, 880, 80, 40, 0);
    this.platforms[14][18] = new Platform(200, 880, 300, 40, 0);
    this.platforms[14][19] = new Platform(580, 880, 100, 40, 0);

    //screen 16
    this.platforms[15][2] = new Platform(40, 200, 150, 40, 0);
    this.platforms[15][3] = new Platform(190, 400, 150, 40, 0);
    this.platforms[15][4] = new Platform(490, 400, 150, 40, 0);
    this.platforms[15][5] = new Platform(700, 500, 100, 40, 0);
    this.platforms[15][6] = new Platform(520, 600, 150, 40, 0);
    this.platforms[15][7] = new Platform(220, 600, 150, 40, 0);
    this.platforms[15][8] = new Platform(40, 700, 100, 40, 0);
    this.platforms[15][9] = new Platform(100, 850, 150, 40, 0);
    this.platforms[15][10] = new Platform(400, 950, 400, 50, 0);

    //screen 17
    this.platforms[16][2] = new Platform(40, 230, 200, 50, 0);
    this.platforms[16][3] = new Platform(450, 80, 250, 50, 0);
    this.platforms[16][4] = new Platform(260, 400, 200, 50, 0);
    this.platforms[16][5] = new Platform(40, 660, 200, 50, 0);
    this.platforms[16][6] = new Platform(360, 750, 200, 50, 0);
    this.platforms[16][7] = new Platform(0, 950, 400, 50, 0);
    this.platforms[16][8] = new Platform(400, -100, 400, 100, 0);

    //screen 18
    this.platforms[17][2] = new Platform(280, 200, 240, 40, 0);
    this.platforms[17][3] = new Platform(640, 220, 120, 40, 0);
    this.platforms[17][4] = new Platform(360, 420, 160, 40, 0);
    this.platforms[17][5] = new Platform(280, 600, 110, 40, 0);
    this.platforms[17][6] = new Platform(40, 720, 150, 40, 0);
    this.platforms[17][7] = new Platform(400, 950, 360, 50, 0);
    this.platforms[17][8] = new Platform(0, -100, 400, 100, 0);

    //screen 19
    this.platforms[18][2] = new Platform(40, 120, 320, 40, 0);
    this.platforms[18][3] = new Platform(460, 120, 40, 180, 0);
    this.platforms[18][4] = new Platform(180, 270, 320, 40, 0);
    this.platforms[18][5] = new Platform(40, 420, 340, 40, 0);
    this.platforms[18][6] = new Platform(460, 370, 40, 240, 0);
    this.platforms[18][7] = new Platform(140, 570, 130, 40, 0);
    this.platforms[18][8] = new Platform(350, 570, 110, 40, 0);
    this.platforms[18][9] = new Platform(40, 720, 120, 50, 0);
    this.platforms[18][10] = new Platform(560, 720, 140, 40, 0);
    this.platforms[18][11] = new Platform(40, 950, 100, 50, 0);
    this.platforms[18][12] = new Platform(235, 950, 120, 50, 0);
    this.platforms[18][13] = new Platform(445, 950, 120, 50, 0);
    this.platforms[18][14] = new Platform(660, 950, 100, 50, 0);
    this.platforms[18][15] = new Platform(400, -100, 360, 100, 0);

    //Zone 4 Hissing Quagmire
    //screen 20
    this.platforms[19][0] = new Platform(250, 100, 420, 50, 1);
    this.platforms[19][1] = new Platform(0, 450, 450, 50, 1);
    this.platforms[19][2] = new Platform(0, 500, 220, 25, 0);
    this.platforms[19][3] = new Platform(0, 525, 100, 25, 0);
    this.platforms[19][4] = new Platform(400, 500, 50, 25, 0);
    this.platforms[19][5] = new Platform(700, 325, 100, 50, 1);
    this.platforms[19][6] = new Platform(550, 625, 150, 50, 1);
    this.platforms[19][7] = new Platform(200, 850, 150, 50, 1);
    this.platforms[19][8] = new Platform(600, 950, 100, 50, 1);

    //screen 21
    this.platforms[20][0] = new Platform(0, 100, 250, 50, 1);
    this.platforms[20][1] = new Platform(700, 100, 100, 50, 1);
    this.platforms[20][2] = new Platform(300, 300, 200, 50, 1);
    this.platforms[20][3] = new Platform(0, 550, 150, 50, 1);
    this.platforms[20][4] = new Platform(720, 550, 80, 50, 1);
    this.platforms[20][5] = new Platform(350, 750, 100, 50, 1);
    this.platforms[20][6] = new Platform(0, 950, 200, 50, 1);

    //screen 22
    this.platforms[21][0] = new Platform(60, 250, 280, 50, 2);
    this.platforms[21][1] = new Platform(60, 400, 240, 50, 1);
    this.platforms[21][2] = new Platform(0, 650, 150, 50, 1);
    this.platforms[21][3] = new Platform(340, 650, 120, 50, 2);
    this.platforms[21][4] = new Platform(580, 650, 150, 50, 1);
    this.platforms[21][5] = new Platform(250, 950, 300, 50, 1);
    this.platforms[21][6] = new Platform(480, 325, 80, 40, 0);
    this.platforms[21][7] = new Platform(560, 325, 90, 30, 0);
    this.platforms[21][8] = new Platform(650, 325, 60, 80, 0);
    this.platforms[21][9] = new Platform(710, 325, 90, 120, 0);
    this.platforms[21][10] = new Platform(520, 310, 25, 15, 0);
    this.platforms[21][11] = new Platform(500, 290, 265, 20, 0);
    this.platforms[21][12] = new Platform(720, 310, 25, 15, 0);

    //literal bottom
    this.platforms[42][0] = new Platform(0, 900, 800, 100, 0);
  }

  loadWindboxes(){
    //x, y, width, height, x Wind, y Wind
    //screen 4, level 1
    this.windboxes[3][0] = new Windbox(0, 200, width, 250, 1, 0, 0);
    this.windboxes[3][1] = new Windbox(0, 625, width, 250, -1, 0, 1);
    //screen 5, level 1
    this.windboxes[4][0] = new Windbox(0, 150, width, 250, 1, 0, 0);
    this.windboxes[4][1] = new Windbox(0, 400, width, 250, -1, 0, 1);
    this.windboxes[4][2] = new Windbox(0, 650, width, 250, 1, 0, 2);
    //screen 6,level 2
    this.windboxes[5][0] = new Windbox(0, 200, width, 300, 2, 0, 0);
    this.windboxes[5][1] = new Windbox(0, 650, width, 75, -2, 0, 1);
    this.windboxes[5][2] = new Windbox(0, 800, width, 75, -2, 0, 2);
    //screen 7, level 2
    this.windboxes[6][0] = new Windbox(0, 0, width, 460, -2, 0, 0);
    this.windboxes[6][1] = new Windbox(0, 460, width/2, 540, 2, 0, 1);
    this.windboxes[6][2] = new Windbox(width/2, 460, 400, 540, -2, 0, 2);
    //screen 8, level 2
    this.windboxes[7][0] = new Windbox(0, 0, width/2, height, -2, 0, 0);
    this.windboxes[7][1] = new Windbox(width/2, 0, 400, height, 2, 0, 1);
    //screen 9, level 3
    this.windboxes[8][0] = new Windbox(0, 0, width, 350, -2, -3, 0);
    this.windboxes[8][1] = new Windbox(0, 350, width, 350, 2, -3, 1);
    //screen 10, level 3
    this.windboxes[9][0] = new Windbox(0, 0, width, height, 0, -2, 0);
    //screen 11, level 3
    this.windboxes[10][0] = new Windbox(0, 0, width, 750, -2, 0, 0);
  }

  loadPlatformImages(){
    this.platformImages[0] = loadImage('Pictures/The Forest/platform.png');
    this.platformImages[1] = loadImage('Pictures/Windy Ravine/platform.png');
    this.platformImages[2] = loadImage('Pictures/Ancient Tomb/platform.png');
    this.platformImages[3] = loadImage('Pictures/Tar Pits/platform.png');
    this.platformImages[4] = loadImage('Pictures/Ice Cavern/platform.png');
    this.platformImages[5] = loadImage('Pictures/The Core/platform.png');
  }

  runGameplay(){
    this.framesRunInGameplay++;
    for (var i = 0; i < this.NPCs[this.gameScreen].length; i++){
      this.NPCs[this.gameScreen][i].run();
    }
    this.char.run();
    for (var i = 0; i < this.platforms[this.gameScreen].length; i++){
      this.platforms[this.gameScreen][i].run();
    }
    for (var i = 0; i < this.windboxes[this.gameScreen].length; i++){
      this.windboxes[this.gameScreen][i].run();
    }
    if (game.gameScreen >= 11 && game.gameScreen <= 18){
      let vision = get(this.char.loc.x-120, this.char.loc.y-120, 240, 240);
      if (game.gameScreen === 11){
        fill(0, 0, 0, 250);
        noStroke();
        rect(0, 0, 140, height);
        rect(140, 160, 110, height-160);
        rect(250, 0, 300, height);
        rect(550, 160, 110, height-160);
        rect(660, 0, 140, height);
        setGradient(color(0, 0, 0, 0), color(0, 0, 0, 250), 139, 250, 0, 160);
        setGradient(color(0, 0, 0, 0), color(0, 0, 0, 250), 549, 660, 0, 160);
      } else if (game.gameScreen >= 15){
        if ((this.framesRunInGameplay >= 0 && this.framesRunInGameplay <= 10) ||
        (this.framesRunInGameplay >= 18 && this.framesRunInGameplay <= 23) ||
        (this.framesRunInGameplay >= 27 && this.framesRunInGameplay <= 30)){
          fill(0, 0, 0, 70);
          noStroke();
          rect(0, 0, width, height);
        } else if (this.framesRunInGameplay >= 360){
          this.framesRunInGameplay = 0;
        } else if (game.gameScreen === 18){
          fill(0, 0, 0, 250);
          noStroke();
          rect(0, 0, 140, height);
          rect(140, 0, 20, 770);
          rect(160, 0, 75, 610);
          rect(235, 0, 120, height);
          rect(355, 0, 90, 610);
          rect(445, 0, 120, height);
          rect(565, 0, 95, 760);
          rect(660, 0, 140, height);
          setGradient(color(0, 0, 0, 250), color(0, 0, 0, 200), 159, 235, 610, 770);
          setGradient(color(0, 0, 0, 200), color(0, 0, 0, 120), 139, 235, 770, height);
          setGradient(color(0, 0, 0, 250), color(0, 0, 0, 120), 354, 445, 610, height);
          setGradient(color(0, 0, 0, 200), color(0, 0, 0, 120), 564, 660, 760, height);
        } else {
          fill(0, 0, 0, 250);
          noStroke();
          rect(0, 0, width, height);
        }
      } else {
        fill(0, 0, 0, 250);
        noStroke();
        rect(0, 0, width, height);
      }
      image(vision, this.char.loc.x-120, this.char.loc.y-120);
    }
  }

  runTitle(){
    fill(255);
    textSize(60);
    text('GAME', 100, 300);
    text('Play', 590, 920);
    text('Help', 85, 920);
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(50, 850, 200, 100);
    rect(550, 850, 200, 100);
    strokeWeight(0);
  }

  runHelp(){
    fill(255);
    stroke(255);
    textSize(40);
    text("Back", 655, 915);
    textSize(35);
    text("Goal: Get to the Bottom as Fast as Possible", 50, 300);
    textSize(30);
    text("• Fall Too Far, and You Risk Needing to Recover", 50, 500);
    text("• Move by Charging a Jump with the Arrow Keys", 50, 550);
    text("• Pause by Pressing Escape While Playing the Game", 50, 600);
    noFill();
    strokeWeight(5);
    rect(650, 850, 100, 100);

    if(keyIsDown(RIGHT_ARROW)){
      stroke(150);
      rect(400, 850, 100, 100, 10);
      fill(150);
      rect(420, 890, 30, 20);
      triangle(450, 870, 480, 900, 450, 930)
    } else {
      stroke(255);
      rect(400, 850, 100, 100, 10);
      fill(255);
      rect(420, 890, 30, 20);
      triangle(450, 870, 480, 900, 450, 930)
    }

    noFill();
    if(keyIsDown(LEFT_ARROW)){
      stroke(150);
      rect(180, 850, 100, 100, 10);
      fill(150);
      rect(230, 890, 30, 20);
      triangle(230, 870, 200, 900, 230, 930);
    } else {
      stroke(255);
      rect(180, 850, 100, 100, 10);
      fill(255);
      rect(230, 890, 30, 20);
      triangle(230, 870, 200, 900, 230, 930);
    }

    noFill();
    if(keyIsDown(UP_ARROW)){
      stroke(150);
      rect(290, 850, 100, 100, 10);
      fill(150);
      rect(330, 900, 20, 30);
      triangle(310, 900, 340, 870, 370, 900);
    } else {
      stroke(255);
      rect(290, 850, 100, 100, 10);
      fill(255);
      rect(330, 900, 20, 30);
      triangle(310, 900, 340, 870, 370, 900);
    }

    strokeWeight(0);
  }

  runPause(){
    this.char.render();
    for (var i = 0; i < this.platforms[this.gameScreen].length; i++){
      this.platforms[this.gameScreen][i].run();
    }
    for (var i = 0; i < this.windboxes[this.gameScreen].length; i++){
      this.windboxes[this.gameScreen][i].run();
    }
    if (game.gameScreen >= 11 && game.gameScreen <= 18){
      let vision = get(this.char.loc.x-120, this.char.loc.y-120, 240, 240);
      fill(0, 0, 0, 250);
      noStroke();
      rect(0, 0, width, height);
      image(vision, this.char.loc.x-120, this.char.loc.y-120);
    } else {
      fill(120, 120, 120, 70);
      rect(0, 0, width, height);
    }
    fill(120, 120, 120);
    textSize(50);
    text("Paused", 300, 400);

    fill(255);
    textSize(60);
    text('Help', 85, 920);
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(50, 850, 200, 100);
    strokeWeight(0);
  }
}
