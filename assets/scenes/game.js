import scene1 from './scene1.js'
import level1 from './level1.js'
import level2 from './level2.js'
import credits from './credits.js'
var config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH, 
      width: 500, 
      height: 300, 
    },
    physics: {
      default: "arcade", 
      arcade: {
        gravity: { y: 0 }, 
        debug: false, 
      },
    },
    scene: [scene1, level1, level2, credits],
  };
  
  
 var game = new Phaser.Game(config);