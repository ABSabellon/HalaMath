/* globals __DEV__ */
import Phaser from 'phaser'
import mathPopUp from '../popUp/mathPopUp'

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
    var title = this.add.image(0, 0, 'gs_bg').setOrigin(0).setDepth(0)
    title.setScale(0.2)  

    //popUp Button PlaceHolder
    var popUP = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.50, 'btns','btn_play00.png').setDepth(1)
    popUP.displayWidth = 80
    popUP.scaleY = popUP.scaleX

    popUP.setInteractive()
    popUP.on("pointerup", () =>{
      this.openWindow(mathPopUp)       
    })

    //fruit draggable
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

  openWindow(func){

    var x = Phaser.Math.Between(400, 600);
    var y = Phaser.Math.Between(64, 128);

    var handle = 'window' + this.count++;

    var win = this.add.zone(x, y, func.WIDTH, func.HEIGHT).setInteractive().setOrigin(0).setDepth(1);

    var popUpWin = new func(handle, win);

    this.input.setDraggable(win);

    win.on('drag', function (pointer, dragX, dragY) {

        this.x = dragX;
        this.y = dragY;

        popUpWin.refresh()

    });

    this.scene.add(handle, popUpWin, true);
  }
}