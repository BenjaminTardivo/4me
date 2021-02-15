
class level1 extends Phaser.Scene {
    
    constructor() {
      super('level1'); 
    }
create(){


    cursors = this.input.keyboard.createCursorKeys();

    var map = this.make.tilemap({ key: 'mapa' });

    var tileset = map.addTilesetImage('0x72_DungeonTilesetII_v1.3', 'tiles')

    this.add.image(25, 25, 'redflask')
    this.add.image(235, 24, 'blueflask')
    this.add.image(345, 26, 'yellowflask')
    this.add.image(125, 25, 'greenflask')

    countR = this.add.text(32, 20, '= ' + '0').setScale(0.75)
    countG = this.add.text(132, 20, '= ' + '0').setScale(0.75)
    countB = this.add.text(242, 20, '= ' + '0').setScale(0.75)
    countY = this.add.text(352, 20, '= ' + '0').setScale(0.75)

    var corazones = this.add.group({
        key: 'kokoro',
        repeat: 2,
        setXY:
        {
            x: 25,
            y: 150,
            stepX: 39
        },
        setScale: { x: .05, y: .05 }
    })

    
    floor = map.createStaticLayer('Fondo', tileset, 125, 75)
    layer = map.createStaticLayer('Objetos', tileset, 125, 75)
    flask = map.createDynamicLayer('Frascos', tileset, 125, 75) 
    flaskA = map.createDynamicLayer('FrascosA', tileset, 125, 75) 
    flaskR = map.createDynamicLayer('FrascosR', tileset, 125, 75) 
    flaskV = map.createDynamicLayer('FrascosV', tileset, 125, 75) 
    Door = map.createDynamicLayer('Puerta', tileset, 125, 75)
    player = this.physics.add.sprite( 150, 125, 'player')
    .setSize(12, 20)
    player.body.offset.y = 13;




    flask.setTileIndexCallback(502, this.Hityellow, null, this)
    flaskA.setTileIndexCallback(500, this.Hitblue, null, this)
    flaskR.setTileIndexCallback(499, this.Hitred, null, this)
    flaskV.setTileIndexCallback(501, this.Hitgreen, null, this)
    Door.setTileIndexCallback(595, () => {track.stop(), this.scene.start('level2')}, null, this)
    Door.setTileIndexCallback(627, () => {track.stop(), this.scene.start('level2')}, null, this)

    this.physics.add.overlap(player, Door)
    this.physics.add.overlap(player, flask)
    this.physics.add.overlap(player, flaskA)
    this.physics.add.overlap(player, flaskR)
    this.physics.add.overlap(player, flaskV)


    this.anims.create({
        key: 'stay',
        frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
        frameRate: 10,
        repeat: 0,
    })
    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('player', {start: 4, end: 7}),
        frameRate: 10,
        repeat: 0,
    })
    this.anims.create({
        key: 'move',
        frames: this.anims.generateFrameNumbers('enemy', {start: 4, end: 7}),
        frameRate: 10,
        repeat: 0,
    })
    

    layer.setCollisionByExclusion(-1, true)
    this.physics.add.collider(player, layer)

    yellowF = 0
    redF = 0
    greenF = 0
    blueF = 0
    lives = 3

    enemy = this.physics.add.group()
    enemy1= enemy.create(150, 267)
    enemy1.play('move').setSize(12, 20).body.offset.y = 13;
    enemy2= enemy.create(212, 120)
    enemy2.play('move').setSize(12, 20).body.offset.y = 13;
    enemy3= enemy.create(278, 267)
    enemy3.play('move').setSize(12, 20).body.offset.y = 13;
    enemy4= enemy.create(340, 120)
    enemy4.play('move').setSize(12, 20).body.offset.y = 13;
    enemy5= enemy.create(405, 200)
    enemy5.play('move').setSize(12, 20).body.offset.y = 13;

    this.physics.add.overlap(player, enemy1, loselive, null, this)
    this.physics.add.overlap(player, enemy2, loselive, null, this)
    this.physics.add.overlap(player, enemy3, loselive, null, this)
    this.physics.add.overlap(player, enemy4, loselive, null, this)
    this.physics.add.overlap(player, enemy5, loselive, null, this)


    this.tweenEnemy1 = this.tweens.add({
        targets: enemy1,
        duration:1600,
        x: 246,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy2 = this.tweens.add({
        targets: enemy2,
        duration:2000,
        x: 308,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy3 = this.tweens.add({
        targets: enemy3,
        duration:1500,
        x: 374,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy4 = this.tweens.add({
        targets: enemy4,
        duration:1800,
        x: 420,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy5 = this.tweens.add({
        targets: enemy5,
        duration:1000,
        x: 453,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })

    track = this.sound.add("music", { loop: true });
    track.play();

    function loselive(){
        if(controlaAlfa){                
                       
            controlaAlfa = false
    
            if(lives > 0){
                
    
    
            setTimeout(() => {
                player.setAlpha(0.4)
                player.setTint(0xff0000)
            }, 150)
            
            setTimeout(() => {
                player.setAlpha(1)
                player.clearTint()
            }, 250)
    
            setTimeout(() => {
                player.setAlpha(0.4)
                player.setTint(0xff0000)
            }, 350)
    
            setTimeout(() => {
                player.setAlpha(1)
                player.clearTint()
            }, 450)
        }
    
        setTimeout(() => {
            controlaAlfa = true
        }, 750)
    
        setTimeout(() => {
           
          lives--
    
           if(lives > -1){
    
                var arrCorazones = corazones.getChildren()[corazones.getChildren().length -1]
    
                if(arrCorazones !== undefined){
                arrCorazones.destroy()
                }
           }
    
        }, 250)
    }
    
        console.log(lives)
    }
}


Hityellow(sprite, tile){
    yellowF++ 
    flask.removeTileAt(tile.x, tile.y);
    console.log(yellowF)
    countY.setText('= ' + yellowF)
}
Hitred(sprite, tile){
    redF++
    flaskR.removeTileAt(tile.x, tile.y)
    console.log(redF)
    countR.setText('= ' + redF)
}
Hitblue(sprite, tile){
    blueF++
    flaskA.removeTileAt(tile.x, tile.y)
    console.log(blueF)
    countB.setText('= ' + blueF)
}
Hitgreen(sprite, tile){
    greenF++
    flaskV.removeTileAt(tile.x, tile.y)
    console.log(greenF)
    countG.setText('= ' + greenF)
}

update() {
    enemy1.anims.play('move', true)
    enemy2.anims.play('move', true)
    enemy3.anims.play('move', true)
    enemy4.anims.play('move', true)
    enemy5.anims.play('move', true)
    player.setVelocity(0);
    player.anims.chain('stay', true)
    
    if(cursors.left.isDown){
        player.setVelocityX(-100)
        player.anims.play('run', true).setFlip(true, false)
    }
    if(cursors.right.isDown){
        player.setVelocityX(100)
        player.anims.play('run', true).setFlip(false, false)
    }
    if(cursors.up.isDown){
        player.setVelocityY(-100)
        player.anims.play('run', true)
    }
    if(cursors.down.isDown){
        player.setVelocityY(100)
        player.anims.play('run', true)
    }

    if(enemy1.x == 246){
        enemy1.flipX = true
    }
    else if(enemy1.x == 150){
        enemy1.flipX = false
    }
    if(enemy2.x == 308){
        enemy2.flipX = true
    }
    else if(enemy2.x == 212){
        enemy2.flipX = false
    }
    if(enemy3.x == 374){
        enemy3.flipX = true
    }
    else if(enemy3.x == 278){
        enemy3.flipX = false
    }
    if(enemy4.x == 420){
        enemy4.flipX = true
    }
    else if(enemy4.x == 340){
        enemy4.flipX = false
    }
    if(enemy5.x == 453){
        enemy5.flipX = true
    }
    else if(enemy5.x == 405){
        enemy5.flipX = false
    }

    if (lives == 0){
        track.stop()
        this.scene.restart()
    }
    
 }

}
export default level1