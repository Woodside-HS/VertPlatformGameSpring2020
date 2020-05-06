class Game{
  constructor(){
    this.startTime = 0;
    this.currentTime = 0;
    this.framesRunInGameplay = 0;
    this.platforms = [];
    this.windboxes = [];
    this.NPCs = []
    this.platformImages = [];
    this.gameScreen = 31;
    this.char = new Character(width/2, height/4);
    this.char.startScreen = this.gameScreen;
    this.screenState = "title";
    this.speedrunning = false;
    this.firstTime = true;
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
    this.NPCs[1][0] = new NonPC(300, 285, 40, 40, "Testing Testing 1 2 3. Hopefully this works. \nTalking on second line now, cool.", [loadImage('Pictures/Leaf NPC/frame_1.png'),
    loadImage('Pictures/Leaf NPC/frame_2.png'),
    loadImage('Pictures/Leaf NPC/frame_3.png')]);
    this.NPCs[6][0] = new NonPC(600, 135, 40, 40, "To the right to the right. \n to the left to the left. \n I never like the left.", [loadImage('Pictures/Leaf NPC/frame_1.png'),
    loadImage('Pictures/Leaf NPC/frame_2.png'),
    loadImage('Pictures/Leaf NPC/frame_3.png')]);
    this.NPCs[16][0] = new NonPC(470, 40, 40, 40, "The king's tomb has mutliple exits. \n My team went to the left, \n and I haven't heard from them since.", [loadImage('Pictures/Leaf NPC/frame_1.png'),
    loadImage('Pictures/Leaf NPC/frame_2.png'),
    loadImage('Pictures/Leaf NPC/frame_3.png')]);
    this.NPCs[21][0] = new NonPC(550, 250, 40, 40, "Welcome to JungleNook, traveler! \n I hope you enjoy your stay. :) \n If you're looking for the pool, \n it's two doors down to the left", [loadImage('Pictures/Leaf NPC/frame_1.png'),
    loadImage('Pictures/Leaf NPC/frame_2.png'),
    loadImage('Pictures/Leaf NPC/frame_3.png')]);
    this.NPCs[23][0] = new NonPC(150, 410, 40, 40, "JungleNook contains chemicals known to the \n State of California to cause cancer and birth defects \n or other reproductive harm \n Proposition 65, \n California Health & Safety Code \n Section 25249.6 et seq.", [loadImage('Pictures/Leaf NPC/frame_1.png'),
                                                                                                                                                                                                loadImage('Pictures/Leaf NPC/frame_2.png'),
                                                                                                                                                                                                loadImage('Pictures/Leaf NPC/frame_3.png')])
    this.NPCs[27][0] = new NonPC(675, 170, 40, 40, "The ice is really slippery, \n I'd be careful if I were you. \n There might be long falls.", [loadImage('Pictures/Leaf NPC/frame_1.png'),
                                                                                                                                        loadImage('Pictures/Leaf NPC/frame_2.png'),
                                                                                                                                        loadImage('Pictures/Leaf NPC/frame_3.png')]);
  }

  loadPlatforms(){
    //key: type 0 = normal, type 1 = sticky tar, type 2 = sinky tar, type 3 = ice, type 4 = collapsible

    //zone 1 - The Forest

    //screen 1
    this.platforms[0][0] = new Platform(300, height/4, 200, 50, 0); //x, y, width, height, type, slipLevel - base camp
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
    // this.platforms[8][16] = new Platform(400, 670, 140, 30, 0);
    this.platforms[8][16] = new Platform(700, 450, 100, 50, 0);
    this.platforms[8][17] = new Platform(550, 590, 250, 20, 0);
    this.platforms[8][18] = new Platform(650, 610, 150, 20, 0);
    this.platforms[8][19] = new Platform(750, 630, 50, 20, 0);
    //bottom area
    this.platforms[8][20] = new Platform(120, 930, 240, 60, 0);
    this.platforms[8][21] = new Platform(500, 930, 350, 60, 0);

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
    this.platforms[21][10] = new Platform(520, 309, 25, 15, 0);
    this.platforms[21][11] = new Platform(500, 288, 265, 20, 0);
    this.platforms[21][12] = new Platform(720, 309, 25, 15, 0);

    //screem 23
    this.platforms[22][0] = new Platform(0, 100, 175, 40, 1);
    this.platforms[22][1] = new Platform(600, 100, 200, 40, 1);
    this.platforms[22][2] = new Platform(220, 250, 100, 40, 1);
    this.platforms[22][3] = new Platform(450, 375, 75, 40, 2);
    this.platforms[22][4] = new Platform(0, 500, 25, 40, 1);
    this.platforms[22][5] = new Platform(25, 500, 75, 40, 2);
    this.platforms[22][6] = new Platform(425, 500, 125, 40, 1);
    this.platforms[22][7] = new Platform(220, 650, 60, 30, 1);
    this.platforms[22][8] = new Platform(680, 650, 80, 30, 1);
    this.platforms[22][9] = new Platform(400, 775, 100, 40, 1);
    this.platforms[22][10] = new Platform(120, 950, 150, 50, 1);
    this.platforms[22][11] = new Platform(600, 950, 200, 50, 2);

    //screen 24
    this.platforms[23][0] = new Platform(600, 75, 200, 50, 1);
    this.platforms[23][1] = new Platform(475, 250, 75, 40, 1);
    this.platforms[23][2] = new Platform(700, 550, 100, 50, 2);
    this.platforms[23][3] = new Platform(700, 875, 100, 50, 1);
    this.platforms[23][4] = new Platform(0, 650, 100, 50, 1);
    this.platforms[23][5] = new Platform(0, 950, 100, 50, 1);
    this.platforms[23][6] = new Platform(100, 450, 150, 50, 1);
    this.platforms[23][7] = new Platform(200, 500, 180, 50, 1);
    this.platforms[23][8] = new Platform(330, 550, 50, 80, 1);
    this.platforms[23][9] = new Platform(380, 580, 50, 80, 1);
    this.platforms[23][10] = new Platform(380, 660, 100, 140, 1);
    this.platforms[23][11] = new Platform(330, 800, 190, 240, 1);

    //screen 25
    this.platforms[24][0] = new Platform(330, 0, 50, 1000, 1);
    this.platforms[24][1] = new Platform(0, 200, 330, 600, 2);
    this.platforms[24][2] = new Platform(0, 950, 250, 50, 1);
    this.platforms[24][3] = new Platform(380, 0, 120, 80, 1);
    this.platforms[24][4] = new Platform(390, 80, 100, 60, 1);
    this.platforms[24][5] = new Platform(400, 140, 60, 50, 1);
    this.platforms[24][6] = new Platform(410, 190, 40, 30, 1);
    this.platforms[24][7] = new Platform(420, 220, 30, 50, 1);
    this.platforms[24][8] = new Platform(550, 250, 100, 40, 1);
    this.platforms[24][9] = new Platform(600, 500, 100, 40, 1);
    this.platforms[24][10] = new Platform(400, 500, 55, 40, 1);
    this.platforms[24][11] = new Platform(450, 600, 70, 40, 1);
    this.platforms[24][12] = new Platform(750, 650, 80, 40, 1);
    this.platforms[24][13] = new Platform(400, 850, 150, 40, 1);
    this.platforms[24][14] = new Platform(650, 950, 60, 50, 1);

    //screen 26
    this.platforms[25][0] = new Platform(750, 100, 50, 30, 1);
    this.platforms[25][1] = new Platform(550, 100, 100, 30, 2);
    this.platforms[25][2] = new Platform(250, 100, 80, 30, 1);
    this.platforms[25][3] = new Platform(0, 150, 80, 40, 2);
    this.platforms[25][4] = new Platform(0, 350, 70, 40, 2);
    this.platforms[25][5] = new Platform(0, 550, 60, 30, 2);
    this.platforms[25][6] = new Platform(0, 750, 50, 30, 2);
    this.platforms[25][7] = new Platform(485, 300, 175, 25, 1);
    this.platforms[25][8] = new Platform(260, 500, 75, 30, 1);
    this.platforms[25][9] = new Platform(640, 700, 100, 30, 1);
    this.platforms[25][10] = new Platform(0, 950, 280, 50, 1);
    this.platforms[25][11] = new Platform(380, 950, 100, 50, 1);

    //screen 27
    this.platforms[26][0] = new Platform(650, 100, 150, 30, 1);
    this.platforms[26][1] = new Platform(400, 250, 100, 30, 1);
    this.platforms[26][2] = new Platform(100, 400, 140, 30, 1);
    this.platforms[26][3] = new Platform(480, 600, 80, 30, 1);
    this.platforms[26][4] = new Platform(650, 850, 120, 30, 1);
    this.platforms[26][5] = new Platform(325, 970, 150, 30, 1);

    //Zone 5 Ice Caves
    //screen 28
    //roof
    this.platforms[27][0] = new Platform(0, 200, 70, 50, 3, 1);
    this.platforms[27][1] = new Platform(730, 200, 70, 50, 3, 1);
    this.platforms[27][2] = new Platform(70, 210, 70, 50, 3, 1);
    this.platforms[27][3] = new Platform(660, 210, 70, 50, 3, 1);
    this.platforms[27][4] = new Platform(140, 220, 70, 50, 3, 1);
    this.platforms[27][5] = new Platform(590, 220, 70, 50, 3, 1);
    this.platforms[27][6] = new Platform(210, 230, 70, 50, 3, 1);
    this.platforms[27][7] = new Platform(520, 230, 70, 50, 3, 1);
    this.platforms[27][8] = new Platform(280, 240, 70, 50, 3, 1);
    this.platforms[27][9] = new Platform(450, 240, 70, 50, 3, 1);

    //platforms
    this.platforms[27][10] = new Platform(320, 450, 160, 25, 3, 1);
    this.platforms[27][17] = new Platform(35, 575, 200, 20, 3, 1);
    this.platforms[27][18] = new Platform(350, 650, 100, 20, 3, 1);
    this.platforms[27][19] = new Platform(565, 725, 200, 20, 3, 2);
    this.platforms[27][20] = new Platform(200, 850, 400, 30, 3, 1);

    //walls
    this.platforms[27][11] = new Platform(0, 250, 25, 250, 3, 1); //left
    this.platforms[27][12] = new Platform(775, 250, 25, 750, 3, 1); //right
    this.platforms[27][13] = new Platform(0, 500, 35, 250, 3, 1); //left
    this.platforms[27][14] = new Platform(765, 500, 35, 250, 3, 1); //right
    this.platforms[27][15] = new Platform(0, 750, 45, 250, 3, 1); //left
    this.platforms[27][16] = new Platform(755, 750, 45, 250, 3, 1); //right

    //screen 29
    //walls left
    this.platforms[28][0] = new Platform(0, 0, 55, 250, 3, 1);
    this.platforms[28][1] = new Platform(0, 250, 65, 250, 3, 1);
    this.platforms[28][2] = new Platform(0, 500, 75, 250, 3, 1);
    this.platforms[28][3] = new Platform(0, 750, 85, 250, 3, 1);
    //walls right
    this.platforms[28][4] = new Platform(745, 0, 55, 250, 3, 1);
    this.platforms[28][5] = new Platform(735, 250, 65, 250, 3, 1);
    this.platforms[28][6] = new Platform(725, 500, 75, 250, 3, 1);
    this.platforms[28][7] = new Platform(715, 750, 85, 250, 3, 1);

    //platforms
    this.platforms[28][8] = new Platform(480, 200, 350, 40, 3, 2);
    this.platforms[28][9] = new Platform(65, 420, 200, 40, 3, 2);
    this.platforms[28][10] = new Platform(420, 620, 150, 40, 3, 2);
    this.platforms[28][11] = new Platform(200, 820, 100, 40, 3, 2);

    //screen 30
    //walls left
    this.platforms[29][0] = new Platform(0, 0, 95, 250, 3, 1);
    this.platforms[29][1] = new Platform(0, 250, 105, 250, 3, 1);
    this.platforms[29][2] = new Platform(0, 500, 115, 250, 3, 1);
    this.platforms[29][3] = new Platform(0, 750, 125, 250, 3, 1);
    //walls right
    this.platforms[29][4] = new Platform(705, 0, 95, 250, 3, 1);
    this.platforms[29][5] = new Platform(695, 250, 105, 250, 3, 1);
    this.platforms[29][6] = new Platform(685, 500, 115, 250, 3, 1);
    this.platforms[29][7] = new Platform(675, 750, 125, 250, 3, 1);

    //platforms
    this.platforms[29][8] = new Platform(95, 205, 50, 50, 3, 2);
    this.platforms[29][9] = new Platform(240, 580, 80, 40, 3, 2);
    this.platforms[29][10] = new Platform(320, 125, 40, 70, 3, 2);
    this.platforms[29][11] = new Platform(370, 225, 40, 70, 3, 2);
    this.platforms[29][12] = new Platform(420, 325, 40, 70, 3, 2);
    this.platforms[29][13] = new Platform(470, 425, 40, 70, 3, 2);
    this.platforms[29][14] = new Platform(520, 525, 40, 70, 3, 2);
    this.platforms[29][15] = new Platform(350, 860, 170, 30, 3, 2);
    this.platforms[29][16] = new Platform(350, 890, 40, 80, 3, 2);
    this.platforms[29][17] = new Platform(350, 970, 375, 30, 3, 2);

    //screen 31
    //walls left
    this.platforms[30][0] = new Platform(0, 0, 135, 250, 3, 1);
    this.platforms[30][1] = new Platform(0, 250, 145, 250, 3, 1);
    this.platforms[30][2] = new Platform(0, 500, 155, 250, 3, 1);
    this.platforms[30][3] = new Platform(0, 750, 165, 250, 3, 1);
    //walls right
    this.platforms[30][4] = new Platform(665, 0, 135, 250, 3, 1);
    this.platforms[30][5] = new Platform(655, 250, 145, 250, 3, 1);
    this.platforms[30][6] = new Platform(645, 500, 155, 250, 3, 1);
    this.platforms[30][7] = new Platform(635, 750, 165, 250, 3, 1);

    //platforms
    this.platforms[30][8] = new Platform(135, 185, 105, 30, 3, 2);
    this.platforms[30][9] = new Platform(135, 215, 145, 30, 3, 2);
    this.platforms[30][10] = new Platform(560, 350, 105, 30, 3, 2);
    this.platforms[30][11] = new Platform(520, 380, 145, 30, 3, 2);
    this.platforms[30][12] = new Platform(155, 630, 85, 30, 3, 2);
    this.platforms[30][13] = new Platform(155, 660, 125, 30, 3, 2);
    this.platforms[30][14] = new Platform(560, 910, 75, 30, 3, 2);
    this.platforms[30][15] = new Platform(520, 940, 125, 30, 3, 2);
    this.platforms[30][16] = new Platform(165, 970, 115, 30, 3, 2);

    //screen 32
    //walls left
    this.platforms[31][0] = new Platform(0, 0, 175, 250, 3, 1);
    this.platforms[31][1] = new Platform(0, 250, 185, 250, 3, 1);
    this.platforms[31][2] = new Platform(0, 500, 195, 250, 3, 1);
    this.platforms[31][3] = new Platform(0, 750, 205, 250, 3, 1);
    //walls right
    this.platforms[31][4] = new Platform(625, 0, 175, 250, 3, 1);
    this.platforms[31][5] = new Platform(615, 250, 185, 250, 3, 1);
    this.platforms[31][6] = new Platform(605, 500, 195, 250, 3, 1);
    this.platforms[31][7] = new Platform(595, 750, 205, 250, 3, 1);

    //platforms
    this.platforms[31][8] = new Platform(280, 120, 80, 40, 3, 3);
    this.platforms[31][9] = new Platform(495, 500, 110, 30, 3, 3);
    this.platforms[31][10] = new Platform(385, 620, 40, 40, 3, 3);
    this.platforms[31][11] = new Platform(205, 790, 70, 40, 3, 3);
    this.platforms[31][12] = new Platform(525, 960, 70, 40, 3, 3);

    //screen 33
    //walls left
    this.platforms[32][0] = new Platform(0, 0, 215, 250, 3, 1);
    this.platforms[32][1] = new Platform(0, 250, 225, 250, 3, 1);
    this.platforms[32][2] = new Platform(0, 500, 235, 250, 3, 1);
    this.platforms[32][3] = new Platform(0, 750, 245, 250, 3, 1);
    //walls right
    this.platforms[32][4] = new Platform(585, 0, 215, 250, 3, 1);
    this.platforms[32][5] = new Platform(575, 250, 225, 250, 3, 1);
    this.platforms[32][6] = new Platform(565, 500, 235, 250, 3, 1);
    this.platforms[32][7] = new Platform(555, 750, 245, 250, 3, 1);

    //platforms

    //screen 34
    //walls left
    this.platforms[33][0] = new Platform(0, 0, 255, 250, 3, 1);
    this.platforms[33][1] = new Platform(0, 250, 265, 250, 3, 1);
    this.platforms[33][2] = new Platform(0, 500, 275, 250, 3, 1);
    this.platforms[33][3] = new Platform(0, 750, 285, 250, 3, 1);
    //walls right
    this.platforms[33][4] = new Platform(545, 0, 255, 250, 3, 1);
    this.platforms[33][5] = new Platform(535, 250, 265, 250, 3, 1);
    this.platforms[33][6] = new Platform(525, 500, 275, 250, 3, 1);
    this.platforms[33][7] = new Platform(515, 750, 285, 250, 3, 1);

    //platforms

    //screen 35

    //walls
    this.platforms[34][0] = new Platform(0, 0, 295, 250, 3, 1);
    this.platforms[34][1] = new Platform(0, 250, 305, 350, 3, 1);
    this.platforms[34][2] = new Platform(505, 0, 295, 250, 3, 1);
    this.platforms[34][3] = new Platform(495, 250, 305, 350, 3, 1);

    //left descending
    this.platforms[34][4] = new Platform(0, 600, 265, 100, 3, 1);
    this.platforms[34][5] = new Platform(0, 700, 215, 75, 3, 1);
    this.platforms[34][6] = new Platform(0, 750, 190, 50, 3, 1);
    this.platforms[34][7] = new Platform(0, 800, 150, 20, 3, 1);
    this.platforms[34][8] = new Platform(0, 820, 100, 30, 3, 1);
    this.platforms[34][9] = new Platform(0, 850, 50, 40, 3, 1);
    this.platforms[34][10] = new Platform(0, 890, 30, 50, 3, 1);
    this.platforms[34][11] = new Platform(0, 940, 20, 60, 3, 1);
    //right descending
    this.platforms[34][12] = new Platform(535, 600, 265, 100, 3, 1);
    this.platforms[34][13] = new Platform(585, 700, 215, 75, 3, 1);
    this.platforms[34][14] = new Platform(610, 750, 190, 50, 3, 1);
    this.platforms[34][15] = new Platform(650, 800, 150, 20, 3, 1);
    this.platforms[34][16] = new Platform(700, 820, 100, 30, 3, 1);
    this.platforms[34][17] = new Platform(750, 850, 50, 40, 3, 1);
    this.platforms[34][18] = new Platform(770, 890, 30, 50, 3, 1);
    this.platforms[34][19] = new Platform(780, 940, 20, 60, 3, 1);


    //Zone 6 Earth's Fire
    this.platforms[35][0] = new Platform(0, 650, 800, 50, 1)

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
       if (game.gameScreen >= 15){
        if ((this.framesRunInGameplay >= 0 && this.framesRunInGameplay <= 10) ||
        (this.framesRunInGameplay >= 18 && this.framesRunInGameplay <= 23) ||
        (this.framesRunInGameplay >= 27 && this.framesRunInGameplay <= 30)){
          fill(0, 0, 0, 70);
          noStroke();
          rect(0, 0, width, height);
        } else if (this.framesRunInGameplay >= 360){
          this.framesRunInGameplay = 0;
        // } else if (game.gameScreen === 18){
        //   fill(0, 0, 0, 254);
        //   noStroke();
        //   rect(0, 0, 140, height);
        //   rect(140, 0, 20, 770);
        //   rect(160, 0, 75, 610);
        //   rect(235, 0, 120, height);
        //   rect(355, 0, 90, 610);
        //   rect(445, 0, 120, height);
        //   rect(565, 0, 95, 760);
        //   rect(660, 0, 140, height);
        //   setGradient(color(0, 0, 0, 254), color(0, 0, 0, 200), 159, 235, 610, 770);
        //   setGradient(color(0, 0, 0, 200), color(0, 0, 0, 120), 139, 235, 770, height);
        //   setGradient(color(0, 0, 0, 254), color(0, 0, 0, 120), 354, 445, 610, height);
        //   setGradient(color(0, 0, 0, 200), color(0, 0, 0, 120), 564, 660, 760, height);
        } else {
          fill(0, 0, 0, 254);
          noStroke();
          rect(0, 0, width, height);
        }
      } else {
        fill(0, 0, 0, 254);
        noStroke();
        rect(0, 0, width, height);
      }
      image(vision, this.char.loc.x-120, this.char.loc.y-120);
    }
    if (this.char.talking === true){
      textSize(25);
      fill(255);
      let npc = this.NPCs[this.gameScreen][0];
      let sub = npc.text.substring(0, Math.floor(npc.count/60));
      if (npc.loc.y > 500){
        text(sub, 150, 250)
      } else if (npc.loc.y < 500){
        text(sub, 150, 750)
      }
      if (npc.text.substring(Math.floor(npc.count/60)-1, Math.floor(npc.count/60)) === "."){
        npc.count+=1;
      } else {
        npc.count+=12;
      }
      if (npc.count/60 > npc.text.length+12){
        npc.count = 0;
        this.char.talking = false;
      }
    }

    if (this.speedrunning === true){
      fill(255);
      textSize(25);
      this.currentTime = Date.now();
      let minutes = Math.floor((this.currentTime-this.startTime) / 60000);
      let seconds = (((this.currentTime-this.startTime) % 60000) / 1000).toFixed(2);
      let speedrunTime = 0;
      if (minutes < 10){
        speedrunTime = "0" + minutes;
      } else {
        speedrunTime = minutes;
      }

      if (seconds < 10){
        speedrunTime += ":0" + seconds;
      } else {
        speedrunTime += ":" + seconds;
      }

      text(speedrunTime, 650, 50);
      textAlign(LEFT);
    }
  }

  runTitle(){
    if (this.firstTime === true){
      this.startTime = Date.now();
      this.currentTime = Date.now();
      this.firstTime = false;
    }
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

    if (this.speedrunning === true){
      this.startTime += Date.now()-this.currentTime;
      this.currentTime = Date.now();
    }
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
    textSize(20);
    let speedrunString = "• Press P on this \nScreen to Toggle \nSpeedrun Mode \n";
    if (this.speedrunning === false){
      speedrunString+="Disabled";
    } else if (this.speedrunning === true){
      speedrunString+="Enabled";
    }
    text(speedrunString, 550, 75);
    noFill();
    strokeWeight(5);
    rect(650, 850, 100, 100);

    if(keyIsDown(80)){
      if (this.speedrunning === false){
        this.speedrunning = true;
      } else if (this.speedrunning === true){
        this.speedrunning = false;
      }
    }

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

    if (this.speedrunning === true){
      this.startTime += Date.now()-this.currentTime;
      this.currentTime = Date.now();
    }
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

    if (this.speedrunning === true){
      fill(255);
      textSize(25);
      this.startTime += Date.now()-this.currentTime;
      this.currentTime = Date.now();
      let minutes = Math.floor((this.currentTime-this.startTime) / 60000);
      let seconds = (((this.currentTime-this.startTime) % 60000) / 1000).toFixed(2);
      let speedrunTime = 0;
      if (minutes < 10){
        speedrunTime = "0" + minutes;
      } else {
        speedrunTime = minutes;
      }

      if (seconds < 10){
        speedrunTime += ":0" + seconds;
      } else {
        speedrunTime += ":" + seconds;
      }

      text(speedrunTime, 650, 50);
      textAlign(LEFT);
    }
  }
}
