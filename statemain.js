var StateMain={
    preload:function(){
     game.load.image("background", "src/img/background.png");
     game.load.spritesheet("basurero", "src/img/plane/basurero.png", 445, 285, 2);
    },
    create:function(){ 
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.background = game.add.tileSprite(0, 0,game.width, game.height, 'background');
    this.basurero = game.add.sprite(50,0, "basurero");
    this.basurero.scale.setTo(0.4)
    this.basurero.animations.add('fly', [0,1], 1, true);
    this.basurero.animations.play('fly');
    this.basurero.animations.play('fly');
    game.physics.enable([this.plane], Phaser.Physics.ARCADE);
    this.bottom= game.height-120;
    this.top = 0;
    },
    speed:function(){
    this.basurero.body.velocity.y = -300;
    },
    update:function(){
    if(game.input.activePointer.isDown){
            this.speed();
        }
        if(this.basurero.y < this.top){
            this.basurero.y = this.top;
            this.basurero.body.gravity.y = 0;
        }
        if(this.basurero.y > this.bottom){
            this.basurero.y = this.bottom;
            this.basurero.body.gravity.y = 0;
        }else{
            this.basurero.body.gravity.y = 500;
        }
    }
}
