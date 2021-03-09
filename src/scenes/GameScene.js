/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {
    this.fruitsConf = [
      {x: this.game.renderer.width * 0.3, y: this.game.renderer.height * 0.8, atlas: 'testers', atlasKey: 'ent_fruit_1.png'},
      {x: this.game.renderer.width * 0.7, y: this.game.renderer.height * 0.8, atlas: 'testers', atlasKey: 'ent_fruit_2.png'}
    ];
  }
  
  preload () {

  }

  cloneSprite (index) {
    var clone = this.add.sprite(this.fruitsConf[index].x, this.fruitsConf[index].y, this.fruitsConf[index].atlas, this.fruitsConf[index].atlasKey).setDepth(3).setInteractive();
    this.input.setDraggable(clone);
    clone.on('pointerdown', (pointer) => {
      clone.setTint(0xff0000);
      this.cloneSprite(index);
    });
    clone.on('pointerout', (pointer) => {
      clone.clearTint();
    });
    clone.on('pointerup', (pointer) => {
      clone.clearTint();
    });
  }

  create () {
    //create background
    this.add.image(0, 0, 'gs_bg').setOrigin(0).setDepth(0);
    
    // Math Overlay (Will move this to an overlay / pop up window later)
    var math = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.40, 'testers','ov_do_math.png').setDepth(1);

    this.fruitsConf.map((conf, index) => {
      var fruit = this.add.sprite(conf.x, conf.y, conf.atlas,conf.atlasKey).setDepth(3).setInteractive();
      this.input.setDraggable(fruit);

      fruit.on('pointerdown', (pointer) => {
        fruit.setTint(0xff0000);
        this.cloneSprite(index);
      });

      fruit.on('pointerout', (pointer) => {
        fruit.clearTint();
      });
  
      fruit.on('pointerup', (pointer) => {
        fruit.clearTint();
      });
    });

    this.input.on('dragstart', (pointer, gameObject) => {
      console.log('dragstart');
      gameObject.setTint(0xff0000);
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    this.input.on('dragend', (pointer, gameObject) => {
        gameObject.clearTint();
    });
 
  }
}