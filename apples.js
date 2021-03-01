class Apple {
    constructor(sprite) {
        this.y = random(400, 700);
        this.x = 1500;
        sprite = createSprite(this.x, this.y);
        sprite.addImage(appleImage);
        sprite.velocityX = -4;
        sprite.lifetime = (1500);
        sprite.scale = 0.1;
    }
}