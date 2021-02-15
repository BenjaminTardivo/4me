class level2 extends Phaser.Scene {
    
    constructor() {
      super('level2'); 
    }
create(){


    cursors = this.input.keyboard.createCursorKeys();

    var map = this.make.tilemap({ key: 'mapa2' });

    var tileset = map.addTilesetImage('0x72_DungeonTilesetII_v1.3', 'tiles')

    this.add.image(145, 25, 'redflask')
    this.add.image(295, 24, 'blueflask')
    this.add.image(370, 26, 'yellowflask')
    this.add.image(220, 25, 'greenflask')

    countR = this.add.text(152, 20, '= ' + '0').setScale(0.75)
    countG = this.add.text(227, 20, '= ' + '0').setScale(0.75)
    countB = this.add.text(302, 20, '= ' + '0').setScale(0.75)
    countY = this.add.text(377, 20, '= ' + '0').setScale(0.75)

    var corazones = this.add.group({
        key: 'kokoro',
        repeat: 2,
        setXY:
        {
            x: 25,
            y: 25,
            stepX: 39
        },
        setScale: { x: .05, y: .05 }
    })

    
    floor = map.createStaticLayer('Fondo2', tileset, 75, 50);
    layer = map.createStaticLayer('Objetos2', tileset, 75, 50)
    flask = map.createDynamicLayer('Frascos2', tileset, 75, 50) 
    flaskA = map.createDynamicLayer('FrascosA2', tileset, 75, 50) 
    flaskR = map.createDynamicLayer('FrascosR2', tileset, 75, 50) 
    flaskV = map.createDynamicLayer('FrascosV2', tileset, 75, 50) 
    Door = map.createDynamicLayer('Puerta2', tileset, 75, 50)
    player = this.physics.add.sprite( 100, 85, 'player')
    .setSize(12, 20)
    player.body.offset.y = 13;

    flask.setTileIndexCallback(502, this.Hityellow, null, this)
    flaskA.setTileIndexCallback(500, this.Hitblue, null, this)
    flaskR.setTileIndexCallback(499, this.Hitred, null, this)
    flaskV.setTileIndexCallback(501, this.Hitgreen, null, this)
    Door.setTileIndexCallback(595, () => {track.stop(), this.scene.start('menu')}, null, this)
    Door.setTileIndexCallback(627, () => {track.stop(), this.scene.start('menu')}, null, this)

    this.physics.add.overlap(player, Door)
    this.physics.add.overlap(player, chest)
    this.physics.add.overlap(player, flask)
    this.physics.add.overlap(player, flaskA)
    this.physics.add.overlap(player, flaskR)
    this.physics.add.overlap(player, flaskV)


    layer.setCollisionByExclusion(-1, true)
    this.physics.add.collider(player, layer)

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

    enemy = this.physics.add.group()
    enemy1= enemy.create(228, 90)
    enemy1.play('move').setSize(12, 20).body.offset.y = 13;
    enemy2= enemy.create(276, 238)
    enemy2.play('move').setSize(12, 20).body.offset.y = 13;
    enemy3= enemy.create(180, 238)
    enemy3.play('move').setSize(12, 20).body.offset.y = 13;
    enemy4= enemy.create(324, 198)
    enemy4.play('move').setSize(12, 20).body.offset.y = 13;
    enemy5= enemy.create(324, 174)
    enemy5.play('move').setSize(12, 20).body.offset.y = 13;

    this.physics.add.overlap(player, enemy1, loselive, null, this)
    this.physics.add.overlap(player, enemy2, loselive, null, this)
    this.physics.add.overlap(player, enemy3, loselive, null, this)
    this.physics.add.overlap(player, enemy4, loselive, null, this)
    this.physics.add.overlap(player, enemy5, loselive, null, this)
    
    yellowF = 0
    redF = 0
    greenF = 0
    blueF = 0
    lives = 3

    this.tweenEnemy1 = this.tweens.add({
        targets: enemy1,
        duration:1600,
        x: 276,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy2 = this.tweens.add({
        targets: enemy2,
        duration:1600,
        x: 228,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy3 = this.tweens.add({
        targets: enemy3,
        duration:1800,
        y: 198,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy4 = this.tweens.add({
        targets: enemy4,
        duration:1800,
        y: 238,
        repeat: -1,
        yoyo: true,
        ease: 'linear',                
                
    })
    this.tweenEnemy5 = this.tweens.add({
        targets: enemy5,
        duration:800,
        y: 85,
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

    if(enemy1.x == 276){
        enemy1.flipX = true
    }
    else if(enemy1.x == 228){
        enemy1.flipX = false
    }
    if(enemy2.x == 276){
        enemy2.flipX = true
    }
    else if(enemy2.x == 228){
        enemy2.flipX = false
    }
    if(enemy3.y == 238){
        enemy3.flipX = false
    }
    else if(enemy3.y == 198){
        enemy3.flipX = true
    }
    if(enemy4.y == 238){
        enemy4.flipX = true
    }
    else if(enemy4.y == 198){
        enemy4.flipX = true
    }
    if(enemy5.y == 174){
        enemy5.flipX = false
    }
    else if(enemy5.y == 85){
        enemy5.flipX = true
    }

    if (lives == 0){
        track.stop()
        this.scene.restart()
    }
}
}
export default level2