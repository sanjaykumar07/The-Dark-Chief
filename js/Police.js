class Police {
  constructor(x, y, width, height, speed) {
    this.s = speed;
    this.sprite = createSprite(x, y, width, height);
    this.sprite.velocityY = this.s;
    this.sprite.shapeColor = "yellow";

    this.sprite.debug = false;
    this.cir = createSprite(0, 0, 50, 25);
    this.cir.visible = false;
    this.cir.setCollider("circle", -60, 40, 0);
    this.cir.debug = false;

    this.left = loadAnimation(
      "images/police-run-left/1.png",
      "images/police-run-left/2.png",
      "images/police-run-left/3.png",
      "images/police-run-left/4.png",
      "images/police-run-left/5.png",
      "images/police-run-left/6.png",
      "images/police-run-left/7.png",
      "images/police-run-left/8.png"
    );

    this.right = loadAnimation(
      "images/police-run-right/1.png",
      "images/police-run-right/2.png",
      "images/police-run-right/3.png",
      "images/police-run-right/4.png",
      "images/police-run-right/5.png",
      "images/police-run-right/6.png",
      "images/police-run-right/7.png",
      "images/police-run-right/8.png"
    );

    this.stright = loadAnimation(
      "images/police-run-stright/1.png",
      "images/police-run-stright/2.png",
      "images/police-run-stright/3.png",
      "images/police-run-stright/4.png",
      "images/police-run-stright/5.png",
      "images/police-run-stright/6.png",
      "images/police-run-stright/7.png",
      "images/police-run-stright/8.png"
    );

    this.back = loadAnimation(
      "images/police-run-back/1.png",
      "images/police-run-back/2.png",
      "images/police-run-back/3.png",
      "images/police-run-back/4.png",
      "images/police-run-back/5.png",
      "images/police-run-back/6.png",
      "images/police-run-back/7.png",
      "images/police-run-back/8.png"
    );

    this.sprite.addAnimation("right", this.right);
    this.sprite.addAnimation("left", this.left);
    this.sprite.addAnimation("stright", this.stright);
    this.sprite.addAnimation("back", this.back);

    this.shooting = loadSound("sounds/shooting.mp3");

    this.light = createSprite(200, 200);
    this.light.scale = 0.5;

    this.lightTop = loadImage("images/light.png");
    this.lightBack = loadImage("images/light2.png");
    this.lightRight = loadImage("images/light3.png");
    this.lightLeft = loadImage("images/light4.png");

    this.light.addImage("1", this.lightBack);
    this.light.addImage("2", this.lightTop);
    this.light.addImage("3", this.lightRight);
    this.light.addImage("4", this.lightLeft);
  }

  policeMovement() {
    if (gameState === 0) {
      this.light.visible = false;
    }
    if (gameState === "reset1") {
      this.light.visible = false;
    }
    if (gameState === 1) {
      this.light.visible = true;
    }
    if (gameState === 2) {
    }

    if (theif.theifLife != 0) {
      this.sprite.bounceOff(edges);

      this.light.x = this.sprite.x;
      this.light.y = this.sprite.y;
      var framecount = Math.round(random(50, 100));
      if (frameCount % framecount === 0) {
        var rand = Math.round(random(1, 4));

        switch (rand) {
          case 1:
            this.sprite.velocityX = this.s;
            this.sprite.setCollider("rectangle", 50, 0, 100, 50);
            this.cir.setCollider("circle", -60, 0, 40);
            this.sprite.changeAnimation("right", this.right);
            this.sprite.velocityY = 0;
            this.light.changeImage("3", this.right);
            this.light.x = this.sprite.x + 100;
            break;

          case 2:
            this.sprite.velocityX = -this.s;
            this.sprite.setCollider("rectangle", -60, 0, 100, 50);
            this.cir.setCollider("circle", 50, 0, 40);
            this.sprite.changeAnimation("left", this.left);
            this.sprite.velocityY = 0;
            this.light.changeImage("4", this.left);
            this.light.x = this.sprite.x - 100;
            break;

          case 3:
            this.sprite.velocityX = 0;
            this.sprite.setCollider("rectangle", 0, 50, 50, 100);
            this.cir.setCollider("circle", 0, -60, 40);
            this.sprite.changeAnimation("back", this.back);
            this.sprite.velocityY = this.s;
            this.light.changeImage("1", this.down);
            this.light.y = this.sprite.y + 100;
            break;

          case 4:
            this.sprite.velocityX = 0;
            this.sprite.setCollider("rectangle", 0, -50, 50, 100);
            this.cir.setCollider("circle", 0, 60, 40);
            this.sprite.changeAnimation("stright", this.stright);
            this.sprite.velocityY = -this.s;
            this.light.changeImage("2", this.top);
            this.light.y = this.sprite.y - 100;
            break;
        }
      }

      if (this.sprite.velocityX > 0) {
        this.sprite.setCollider("rectangle", 50, 0, 100, 50);
        this.cir.setCollider("circle", -60, 0, 40);
        this.sprite.changeAnimation("right", this.right);

        this.light.changeImage("3", this.right);
        this.light.x = this.sprite.x + 100;
      } else if (this.sprite.velocityX < 0) {
        this.sprite.setCollider("rectangle", -50, 0, 100, 50);
        this.cir.setCollider("circle", 60, 0, 40);
        this.sprite.changeAnimation("left", this.left);

        this.light.changeImage("4", this.left);
        this.light.x = this.sprite.x - 100;
      } else if (this.sprite.velocityY > 0) {
        this.sprite.setCollider("rectangle", 0, 50, 50, 100);
        this.cir.setCollider("circle", 0, -60, 40);
        this.sprite.changeAnimation("back", this.back);

        this.light.changeImage("1", this.down);
        this.light.y = this.sprite.y + 100;
      } else if (this.sprite.velocityY < 0) {
        this.sprite.setCollider("rectangle", 0, -50, 50, 100);
        this.cir.setCollider("circle", 0, 60, 40);
        this.sprite.changeAnimation("stright", this.stright);

        this.light.changeImage("2", this.top);
        this.light.y = this.sprite.y - 100;
      }
    }
  }

  theifCaught() {
    var pos = theif.sprite.position;
    var pos2 = this.sprite.position;
    if (theif.sprite.collide(this.sprite)) {
      pos.x = 500;
      pos.y = 500;
      this.shooting.play();
      theif.sprite.velocityX = 0;
      theif.sprite.velocityY = 0;

      pos2.x = Math.round(random(100, 500));
      pos2.y = Math.round(random(100, 400));

      theif.theifLife += -1;
    }
  }

  policeKilled() {
    this.cir.x = this.sprite.x - 0;
    this.cir.y = this.sprite.y - 0;
    if (theif.sprite.isTouching(this.cir)) {
      policeCount += -1;
      theif.sprite.changeAnimation("attack", theif.attack);
      killing.play();
      this.light.destroy();

      this.sprite.destroy();
      this.cir.destroy();
    }
    textFont("Comic Sans MS");
    text("Police Left : " + policeCount, 200, 30);
  }

  policeSpeed() {
    if (policeCount == 2) {
      this.s = 7;
    }
    if (policeCount == 1) {
      this.s = 9;
    }
  }

  level2Movement() {
    if (this.sprite.velocityY > 0) {
      this.sprite.changeAnimation("back", this.back);
    }

    if (this.sprite.velocityY < 0) {
      this.sprite.changeAnimation("stright", this.stright);
    }
    this.sprite.setCollider("circle", 0, 0, 40);
    this.sprite.debug = false;

    if (this.sprite.isTouching(theif.sprite)) {
      theif.theifLife += -1;
      theif.sprite.x = 100;
      theif.sprite.y = 300;
      this.shooting.play();
    }

    if (theif.theifLife === 0 && gameState === 2) {
      gameState = "reset2";
      bgMusic2.stop();
      diamondAlert = "notTheft"
      resetBgMusic.loop()
    }
  }
}
