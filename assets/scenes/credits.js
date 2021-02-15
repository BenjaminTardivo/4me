class credits extends Phaser.Scene {
    
    constructor() {
      super('credits'); 
    }
    create(){

    this.add.image(250, 150, 'menu').setScale(0.54)
    this.add.image(250, 100, 'developers')
    this.add.image(250, 180, 'tardi')
    this.add.image(250, 210, 'joker')
    var bback = this.add.image(60, 40, 'back')
    bback.setInteractive()
    bback.on('pointerdown', () => this.scene.start('menu'))

    }
}   
export default credits