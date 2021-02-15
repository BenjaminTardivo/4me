class scene1 extends Phaser.Scene {
    
    constructor() {
      super('menu'); 
    }

    preload(){
        this.load.tilemapTiledJSON('mapa', 'assets/tilemaps/maps/Map1.json');
        this.load.tilemapTiledJSON('mapa2', 'assets/tilemaps/maps/Map2.json');
        this.load.image( 'tiles', 'assets/tilemaps/tiles/0x72_DungeonTilesetII_v1.3.png');
        this.load.spritesheet('player', 'assets/images/pumpkin_dude.png', {
            frameHeight: 32,
            frameWidth: 16,
        });
        this.load.spritesheet('enemy', 'assets/images/doc.png',{
            frameHeight: 32,
            frameWidth: 16,            
        });
        this.load.image('menu', 'assets/images/Menu.png');
        this.load.image('1', 'assets/images/blev1.png');
        this.load.image('2', 'assets/images/blev2.png');
        this.load.image('kokoro', 'assets/images/heart.png');
        this.load.image('redflask', '/assets/images/Frasco_Rojo.png');
        this.load.image('blueflask', '/assets/images/Frasco_Azul.png');
        this.load.image('greenflask', '/assets/images/Frasco_Verde.png');
        this.load.image('yellowflask', '/assets/images/Frasco_Amarillo.png');
        this.load.image('bplay', 'assets/images/Jugar.png');
        this.load.image('bcredits', 'assets/images/Creditos.png');
        this.load.image('bquit', 'assets/images/Salir.png');
        this.load.image('title', 'assets/images/4me.png');
        this.load.image('developers', 'assets/images/Desarrolladores.png');
        this.load.image('tardi', 'assets/images/Benja.png');
        this.load.image('joker', 'assets/images/Yo.png');
        this.load.image('back', 'assets/images/Atras.png');
        this.load.audio('music', 'assets/sound/Anxiety-Creepy_Music_Box.ogg');
    }


    create(){
        this.add.image(250, 150, 'menu').setScale(0.54)
        this.add.image(250, 180, 'title')
        var play = this.add.image(250, 160, 'bplay')
        play.setInteractive()
        play.on('pointerdown', () => this.scene.start('level1'))
        var credits = this.add.image(250, 200, 'bcredits')
        credits.setInteractive()
        credits.on('pointerdown', () => this.scene.start('credits'))
        var quit = this.add.image( 250, 240, 'bquit')
        quit.setInteractive();
        quit.on('pointerdown', () => window.location.href = "http://www.google.com");
        
    }
}
export default scene1;