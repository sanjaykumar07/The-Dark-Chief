class Theif{
    constructor(){
        this.sprite = createSprite(500,500,20,20);
        this.sprite.shapeColor = "red";
        this.sprite.scale = 0.25
        
        this.restart1 = loadImage("images/restart.png")
        this.stand = loadAnimation("images/move-top/1.png")
        
        this.right = loadAnimation("images/move-right/1.png","images/move-right/6.png","images/move-right/7.png","images/move-right/8.png",
        "images/move-right/9.png","images/move-right/10.png","images/move-right/11.png","images/move-right/12.png","images/move-right/16.png",
        "images/move-right/17.png","images/move-right/18.png","images/move-right/19.png","images/move-right/20.png",)

        this.left = loadAnimation("images/move-left/1.png","images/move-left/6.png","images/move-left/7.png","images/move-left/8.png",
        "images/move-left/9.png","images/move-left/10.png","images/move-left/11.png","images/move-left/12.png","images/move-left/16.png",
        "images/move-left/17.png","images/move-left/18.png","images/move-left/19.png","images/move-left/20.png",)
        
        this.top = loadAnimation("images/move-top/1.png","images/move-top/6.png","images/move-top/7.png","images/move-top/8.png",
        "images/move-top/9.png","images/move-top/10.png","images/move-top/11.png","images/move-top/12.png","images/move-top/16.png",
        "images/move-top/17.png","images/move-top/18.png","images/move-top/19.png","images/move-top/20.png",)

        this.down = loadAnimation("images/move-down/1.png","images/move-down/6.png","images/move-down/7.png","images/move-down/8.png",
        "images/move-down/9.png","images/move-down/10.png","images/move-down/11.png","images/move-down/12.png","images/move-down/16.png",
        "images/move-down/17.png","images/move-down/18.png","images/move-down/19.png","images/move-down/20.png",)

        this.attack = loadAnimation("meleeattack/1.png","meleeattack/3.png",
        "meleeattack/6.png","meleeattack/7.png","meleeattack/8.png","meleeattack/9.png","meleeattack/10.png",
        "meleeattack/11.png","meleeattack/12.png","meleeattack/13.png")

        this.sprite.addAnimation("stand",this.stand);
        this.sprite.addAnimation("top",this.top);
        this.sprite.addAnimation("right",this.right);
        this.sprite.addAnimation("down",this.down);
        this.sprite.addAnimation("left",this.left);
        this.sprite.addAnimation("attack",this.attack);
        this.theifLife = 5;
    }

    theifMovement(){
        this.sprite.collide(edges)
        if(keyDown(UP_ARROW)){
            this.sprite.y += - 5;
            this.sprite.changeAnimation("top",this.top)
        }
        if(keyWentUp(UP_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }
        
        
        if(keyDown(DOWN_ARROW)){
            this.sprite.y +=  5;
            this.sprite.changeAnimation("down",this.down)
        }
        if(keyWentUp(DOWN_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }

        if(keyDown(RIGHT_ARROW)){
            this.sprite.x +=  5;
            this.sprite.changeAnimation("right",this.right)
        }
        if(keyWentUp(RIGHT_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }

        if(keyDown(LEFT_ARROW)){
            this.sprite.x += - 5;
            this.sprite.changeAnimation("left",this.left)
        }

        if(keyWentUp(LEFT_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }

        if(this.theifLife == 0 && gameState === 1){
            gameState = "reset1";
            bgMusic1.stop();
            resetBgMusic.loop()
        }
    }

    theifMovementLast(){
        this.sprite.collide(edges)
        if(keyDown(UP_ARROW)){
            this.sprite.y += - 15;
            this.sprite.changeAnimation("top",this.top)
        }
        if(keyWentUp(UP_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }
        
        
        if(keyDown(DOWN_ARROW)){
            this.sprite.y +=  15;
            this.sprite.changeAnimation("down",this.down)
        }
        if(keyWentUp(DOWN_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }

        if(keyDown(RIGHT_ARROW)){
            this.sprite.x +=  15;
            this.sprite.changeAnimation("right",this.right)
        }
        if(keyWentUp(RIGHT_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }

        if(keyDown(LEFT_ARROW)){
            this.sprite.x += - 15;
            this.sprite.changeAnimation("left",this.left)
        }

        if(keyWentUp(LEFT_ARROW)){
            this.sprite.changeAnimation("stand",this.stand)
        }
    }

    
}