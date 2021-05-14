var gameState = 0,
  policeCount = 3,
  status = "created";
var ans = "None";
var diamondAlert = "notTheft";
var start, info;
var timeLeft = 30;
function preload() {
  bgMusic1 = loadSound("sounds/bgMusic1.mp3");
  bgMusic2 = loadSound("sounds/bgMusic2.mp3");
  bgMusic3 = loadSound("sounds/bgMusic3.mp3");
  introMusic = loadSound("sounds/introMusic.mp3");
  killing = loadSound("sounds/killing.mp3");
  diamondSound = loadSound("sounds/Diamond.mp3");
  resetBgMusic = loadSound("sounds/lost.mp3");
  timer = loadSound("sounds/timer.mp3");
  siren = loadSound("sounds/siren.mp3");
  winMusic = loadSound("sounds/win.mp3");

  bg = loadImage("images/bg.jpg");
  bg2 = loadImage("images/bg2.png");
  bg3 = loadImage("images/bg3.jpg");
  quizBg = loadImage("images/quizBg.png");
  winBg = loadImage("images/winBg.jpg");

  bgIntro = loadImage("images/bgIntro.jpg");
  start = loadImage("images/start1.jpg");
  info = loadImage("images/info.jpg");
  infoSlideImg = loadImage("images/infoSlide.jpg");
  closeImg = loadImage("images/close.png");
  level1bannerImg = loadImage("images/level1.jpg");
  level2bannerImg = loadImage("images/level2.png");
  level3banner = loadImage("images/level3Banner.png");
  ok = loadImage("images/ok.png");
  okMouse = loadImage("images/ok-copy.png");

  start1Mouse = loadImage("images/start1Mouse.png");
  infoMouse = loadImage("images/infoMouse.png");

  backbutton = loadImage("images/back.jpg");
  backbuttonMouse = loadImage("images/back-copy.jpg");
  restartImg = loadImage("images/restart.png");
  playAgain = loadImage("images/playagain.png");
  Exit = loadImage("images/exit.png");
  resetBg = loadImage("images/resetBg.png");

  quiz1Img = loadImage("images/quiz1.png");
  quiz2Img = loadImage("images/quiz2.png");
  quiz3Img = loadImage("images/quiz3.png");
  quiz4Img = loadImage("images/quiz4.png");

  submitImg = loadImage("images/submit.png");
  diamondImg = loadImage("images/diamond.png");

  win = createSprite(450, 300);
  win.addImage(winBg);
  win.visible = false;
  win.scale = 2;
}

function setup() {
  createCanvas(900, 600);
  edges = createEdgeSprites();

  pixelDensity(1);
  startButton = createSprite(700, 250);
  startButton.addImage("1", start);
  startButton.addImage("2", start1Mouse);
  startButton.scale = 0.5;
  startButton.visible = false;

  infoButton = createSprite(700, 350);
  infoButton.addImage("1", info);
  infoButton.addImage("2", infoMouse);
  infoButton.scale = 0.5;
  infoButton.visible = false;
  introMusic.loop();

  infoSlide = createSprite(450, 300);
  infoSlide.addImage(infoSlideImg);
  infoSlide.visible = false;
  infoSlide.scale = 0.7;

  closeButton = createSprite(750, 150);
  closeButton.addImage(closeImg);
  closeButton.visible = false;
  closeButton.scale = 0.3;

  level1banner = createSprite(width / 2, height / 2);
  level1banner.addImage(level1bannerImg);
  level1banner.visible = false;
  level1banner.scale = 0.75;

  level2banner = createSprite(width / 2, height / 2);
  level2banner.addImage(level2bannerImg);
  level2banner.visible = false;
  level2banner.scale = 0.75;

  okButton = createSprite(790, 480);
  okButton.addImage("1", ok);
  okButton.addImage("2", okMouse);
  okButton.scale = 0.8;
  okButton.visible = false;

  backButton = createSprite(140, 480);
  backButton.addImage("1", backbutton);
  backButton.addImage("2", backbuttonMouse);
  backButton.visible = false;
  backButton.scale = 0.4;

  playAgain1 = createSprite(450, 300);
  playAgain1.addImage(playAgain);
  playAgain1.visible = false;

  exit = createSprite(450, 390);
  exit.addImage(Exit);
  exit.scale = 1.1;
  exit.visible = false;
}

function draw() {
  background("white");
  toggleZoomScreen();
  textSize(20);
  fill("black");
  textStyle(BOLD);
  textFont("Comic Sans MS");
  if (gameState === 0) {
    background(bgIntro);
    startButton.visible = true;
    infoButton.visible = true;
    win.visible = false;
    exit.visible = false;
    playAgain1.visible = false;
    bgMusic2.stop();
    ans = "None";
    if (mousePressedOver(startButton)) {
      gameState = "intro1";
      bgMusic1.loop();
      introMusic.stop();
    }

    if (mouseIsOver(startButton)) {
      startButton.changeImage("2", start1Mouse);
    } else {
      startButton.changeImage("1", start);
    }

    if (mouseIsOver(infoButton)) {
      infoButton.changeImage("2", infoMouse);
    } else {
      infoButton.changeImage("1", info);
    }

    if (mousePressedOver(infoButton)) {
      infoSlide.visible = true;
      closeButton.visible = true;
    }

    if (mousePressedOver(closeButton)) {
      closeButton.visible = false;
      infoSlide.visible = false;
    }
  } else {
    startButton.visible = false;
    infoButton.visible = false;
    closeButton.visible = false;
    infoSlide.visible = false;
  }

  if (gameState === "intro1") {
    background(0);
    policeCount = 3;
    level1banner.visible = true;
    okButton.visible = true;
    backButton.visible = true;
    playAgain1.visible = false;
    exit.visible = false;

    if (mousePressedOver(okButton)) {
      status = "started";
      level1banner.visible = false;
      okButton.visible = false;
      backButton.visible = false;
      gameState = 1;
    }

    if (mouseIsOver(okButton)) {
      okButton.changeImage("2", okMouse);
    } else {
      okButton.changeImage("1", ok);
    }

    if (mousePressedOver(backButton)) {
      level1banner.visible = false;
      okButton.visible = false;
      backButton.visible = false;
      gameState = 0;
      bgMusic1.stop();
      introMusic.loop();
    }
    if (mouseIsOver(backButton)) {
      backButton.changeImage("2", backbuttonMouse);
    } else {
      backButton.changeImage("1", backbutton);
    }
  }

  if (gameState === "intro2") {
    if (status === "started") {
      status = "created";

      bgMusic1.stop();
      resetBgMusic.stop();
      bgMusic2.loop();
      ans = "None";
    }

    background(0);
    okButton.visible = true;

    playAgain1.visible = false;
    exit.visible = false;
    level2banner.visible = true;
    if (mousePressedOver(okButton)) {
      status = "started";
      okButton.visible = false;
      backButton.visible = false;
      gameState = 2;
    }

    if (mouseIsOver(okButton)) {
      okButton.changeImage("2", okMouse);
    } else {
      okButton.changeImage("1", ok);
    }
    police1.light.visible = false;
    police2.light.visible = false;
    police3.light.visible = false;
    theif.sprite.visible = false;
  } else {
    level2banner.visible = false;
  }

  if (gameState === "intro3") {
    background(level3banner);
    resetBgMusic.stop();
    timeLeft = 30;
    okButton.visible = true;
    playAgain1.visible = false;
    exit.visible = false;

    quiz1.visible = false;
    quiz2.visible = false;
    quiz3.visible = false;
    quiz4.visible = false;
    submit.visible = false;

    if (mousePressedOver(okButton)) {
      status = "started";
      level1banner.visible = false;
      okButton.visible = false;
      backButton.visible = false;
      gameState = 3;
    }

    if (mouseIsOver(okButton)) {
      okButton.changeImage("2", okMouse);
    } else {
      okButton.changeImage("1", ok);
    }
  }

  if (gameState === 1) {
    if (status === "started" && gameState === 1) {
      status = "created";
      theif = new Theif();

      police1 = new Police(
        Math.round(random(50, 550)),
        Math.round(random(50, 350)),
        0,
        0,
        5
      );
      police2 = new Police(
        Math.round(random(50, 550)),
        Math.round(random(50, 350)),
        0,
        0,
        5
      );
      police3 = new Police(
        Math.round(random(50, 550)),
        Math.round(random(50, 350)),
        0,
        0,
        5
      );

      obstracle1 = new Obstracle(160, 160, 180, 40);
      obstracle2 = new Obstracle(230, 218, 40, 75);
      obstracle7 = new Obstracle(668, 380, 35, 75);
      obstracle8 = new Obstracle(740, 440, 180, 40);
    }

    background(bg);

    text("Life : " + theif.theifLife, 100, 30);
    text("Police Left : " + policeCount, 200, 30);
    theif.theifMovement();

    police1.theifCaught();
    police2.theifCaught();
    police3.theifCaught();

    police1.policeKilled();
    police2.policeKilled();
    police3.policeKilled();

    police1.policeSpeed();
    police2.policeSpeed();
    police3.policeSpeed();

    police1.policeMovement();
    police2.policeMovement();
    police3.policeMovement();

    obstracle1.bounce();
    obstracle2.bounce();
    obstracle7.bounce();
    obstracle8.bounce();

    if (policeCount === 0) {
      gameState = "intro2";
      status = "started";
    }
  }

  if (gameState === "reset1") {
    background(resetBg);

    if (mousePressedOver(playAgain1)) {
      exit.visible = false;
      gameState = "intro1";
      resetBgMusic.stop();
      bgMusic1.loop();
    }
    exit.visible = true;
    playAgain1.visible = true;
    playAgain1.y = 300;

    if (mousePressedOver(exit)) {
      gameState = 0;
      exit.visible = false;
      resetBgMusic.stop();
      introMusic.loop();
    }

    police1.sprite.visible = false;
    police2.sprite.visible = false;
    police3.sprite.visible = false;
    theif.sprite.destroy();
  }

  if (gameState === "reset2") {
    background(resetBg);

    if (mousePressedOver(playAgain1)) {
      gameState = "intro2";
      theif.theifLife = 3;
      resetBgMusic.stop();
      bgMusic2.loop();
    }
    exit.visible = true;
    playAgain1.visible = true;
    diamond.visible = false;

    if (mousePressedOver(exit)) {
      gameState = 0;
      exit.visible = false;
      introMusic.play();
      resetBgMusic.stop();
    }

    police1.sprite.visible = false;
    police2.sprite.visible = false;
    police3.sprite.visible = false;
    theif.sprite.visible = false;
  }

  if (gameState === "reset3") {
    background(resetBg);
    timeLeft = 30;
    theif.theifLife = 2;
    playAgain1.y = 300;
    if (mousePressedOver(playAgain1)) {
      gameState = "intro3";
      resetBgMusic.stop();
      bgMusic3.loop();
    }
    exit.visible = true;
    playAgain1.visible = true;

    if (mousePressedOver(exit)) {
      gameState = 0;
      exit.visible = false;
      introMusic.play();
      resetBgMusic.stop();
    }

    helicopter.sprite.visible = false;
    theif.sprite.visible = false;
  }

  if (gameState === 2) {
    background(bg2);
    if (status === "started") {
      status = "created";

      police1 = new Police(500, 70, 0, 0, 7);
      police2 = new Police(300, 530, 0, 0, -7);
      theif.sprite.x = 100;
      theif.sprite.y = 300;
      theif.sprite.changeAnimation("stand", theif.stand);

      diamond = createSprite(400, 300, 20, 20);
      diamond.addImage(diamondImg);
      diamond.scale = 0.1;

      obstracle11 = new Obstracle(70, 300, 40, 800);
      obstracle12 = new Obstracle(330, 70, 600, 40);
      obstracle13 = new Obstracle(330, 530, 600, 40);
      obstracle14 = new Obstracle(740, 440, 180, 40);
      obstracle15 = new Obstracle(620, 120, 40, 160);
      obstracle16 = new Obstracle(700, 190, 200, 40);
      obstracle17 = new Obstracle(620, 480, 40, 150);
      obstracle18 = new Obstracle(700, 400, 200, 40);

      level2door = createSprite(800, 300, 5, 50);
      level2door.visible = false;
    }
    theif.sprite.visible = true;
    obstracle11.bounce();
    obstracle12.bounce();
    obstracle13.bounce();
    obstracle14.bounce();
    obstracle15.bounce();
    obstracle16.bounce();
    obstracle17.bounce();
    obstracle18.bounce();
    policeCount = 2;

    police1.light.visible = false;
    police2.light.visible = false;
    police3.light.visible = false;
    playAgain1.visible = false;
    exit.visible = false;

    police1.level2Movement();
    police2.level2Movement();

    if (theif.sprite.isTouching(level2door) && diamondAlert === "theft") {
      gameState = "quiz";
      status = "started";
      level2door.destroy();
    }

    if (theif.sprite.isTouching(diamond)) {
      diamond.destroy();
      diamondSound.play();
      diamondAlert = "theft";
    }

    theif.theifMovement();
    police1.sprite.bounceOff(edges);
    police2.sprite.bounceOff(edges);
    fill("white");
    text("Life : " + theif.theifLife, 700, 50);
    text("Police Left : " + policeCount, 700, 80);
  }

  if (gameState === "quiz") {
    if (status === "started") {
      status = "created";
      quiz1 = createSprite(370, 250);
      quiz1.addImage(quiz1Img);

      quiz2 = createSprite(520, 250);
      quiz2.addImage(quiz2Img);

      quiz3 = createSprite(370, 350);
      quiz3.addImage(quiz3Img);

      quiz4 = createSprite(520, 350);
      quiz4.addImage(quiz4Img);

      submit = createSprite(440, 450);
      submit.addImage(submitImg);
      submit.scale = 0.5;

      diamond.destroy();
      theif.sprite.visible = false;
      police1.sprite.destroy();
      police2.sprite.destroy();
    }

    background(quizBg);
    fill("yellow");
    textSize(20);
    text("selected : " + ans, 380, 200);

    quiz1.visible = true;
    quiz2.visible = true;
    quiz3.visible = true;
    quiz4.visible = true;
    submit.visible = true;

    playAgain1.visible = false;
    exit.visible = false;

    if (mouseIsOver(quiz1)) {
      quiz1.scale = 1.2;
    } else {
      quiz1.scale = 1;
    }

    if (mouseIsOver(quiz2)) {
      quiz2.scale = 1.2;
    } else {
      quiz2.scale = 1;
    }

    if (mouseIsOver(quiz3)) {
      quiz3.scale = 1.2;
    } else {
      quiz3.scale = 1;
    }

    if (mouseIsOver(quiz4)) {
      quiz4.scale = 1.2;
    } else {
      quiz4.scale = 1;
    }

    if (mousePressedOver(quiz4)) {
      ans = 12;
      quiz4.scale = 1.2;
    }

    if (mousePressedOver(quiz1)) {
      ans = 3;
      quiz1.scale = 1.2;
    }

    if (mousePressedOver(quiz2)) {
      ans = 6;
      quiz2.scale = 1.2;
    }

    if (mousePressedOver(quiz3)) {
      ans = 9;
      quiz3.scale = 1.2;
    }

    if (mousePressedOver(submit) && ans === 12) {
      bgMusic3.loop();
      bgMusic2.stop();
      gameState = "intro3";
      status = "started";
    }
  }

  if (gameState === 3) {
    if (status === "started") {
      status = "created";

      createCanvas(bg3.width, bg3.height);
      edges = createEdgeSprites();
      helicopter = new Helicopter(400, 200);

      theif = new Theif();
      quiz1.destroy();
      quiz2.destroy();
      quiz3.destroy();
      quiz4.destroy();
      submit.destroy();
      timer.loop();
      theif.sprite.x = 450;
      theif.sprite.y = 530;
      theif.theifLife = 2;
    }
    background(bg3);
    if (frameCount % 10 === 0) {
      timeLeft += -1;
    }
    torch(helicopter.sprite, bg3);
    fill("yellow");
    textSize(20);
    text("Time remain to escape : " + timeLeft, 350, 30);

    text("Life : " + theif.theifLife, 250, 30);
    theif.sprite.collide(edges);
    theif.sprite.visible = true;
    helicopter.heliMovement();
    theif.theifMovementLast();

    if (helicopter.sprite.isTouching(theif.sprite)) {
      theif.theifLife += -1;
      theif.sprite.x = 450;
      theif.sprite.y = 530;
      siren.play();
      helicopter.sprite.x = 250;
      helicopter.sprite.y = 20;
    }
    if (theif.theifLife === 0) {
      gameState = "reset3";
      bgMusic3.stop();
      timer.stop();
      resetBgMusic.loop();
    }

    if (timeLeft <= 0) {
      gameState = "win";
      status = "started";
      winMusic.loop();
      playAgain1.y = 200;
    }
  } else {
    timer.stop();
  }

  if (gameState === "win") {
    if (status === "started") {
      status = "created";
      line = createSprite(450, 550, 1200, 10);
    }
    background("white");
    line.visible = false;
    playAgain1.visible = true;
    playAgain1.velocityY = 10;
    playAgain1.collide(line);

    helicopter.sprite.destroy();
    bgMusic3.stop();
    win.visible = true;
    if (mousePressedOver(playAgain1)) {
      gameState = 0;
      playAgain1.visible = false;
      introMusic.loop();
      winMusic.stop();
      status = "started";
      ans = "None";
    }
    theif.sprite.visible = false;
  } else {
    win.visible = false;
  }
  drawSprites();
}
