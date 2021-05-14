class Obstracle{
    constructor(x,y,width,height){
       this.sprite = createSprite(x,y,width,height)
       this.sprite.visible = false;
    }


bounce(){
    theif.sprite.bounceOff(this.sprite)
    police1.sprite.bounceOff(this.sprite)
    police2.sprite.bounceOff(this.sprite)
    police3.sprite.bounceOff(this.sprite)
}

}           