class Helicopter {
  constructor(x, y, width, height) {
    this.s = 20;
    this.sprite = createSprite(x, y, width, height);
    this.sprite.velocityY = this.s;
    this.sprite.visible = false
   
    this.sprite.setCollider("circle", 0, 0, 120);
    this.sprite.debug = false;
  }

  heliMovement() {
    this.sprite.bounceOff(edges);


    if (frameCount % 20 === 0) {
      var rand = Math.round(random(1, 4));
      
      switch (rand) {
        case 1:
          this.sprite.velocityX = this.s;
          this.sprite.velocityY = 0;
          break;

        case 2:
          this.sprite.velocityX = -this.s;

          this.sprite.velocityY = 0;
          break;

        case 3:
          this.sprite.velocityX = 0;

          this.sprite.velocityY = this.s;
          break;

        case 4:
          this.sprite.velocityX = 0;

          this.sprite.velocityY = -this.s;
          break;
      }
    }
  }
}
