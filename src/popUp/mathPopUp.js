/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor (handle, parent) {
    super(handle)

    this.parent = parent;
    
  }

  create () {
    
    // Math Overlay

    var math = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.40, 'testers','ov_do_math.png').setDepth(1);    

    var mathExit = this.add.sprite( math.width * 1.08, math.height * 0.23, 'btns_main','btn_can000.png').setDepth(2);
    mathExit.displayWidth = 40
    mathExit.scaleY = mathExit.scaleX
    
    var fruitLocker = this.add.sprite( this.game.renderer.width * 0.80, this.game.renderer.height * 0.35, 'testers','loc_fruit.png').setDepth(2);
    
    var mathLocker = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.50, 'testers','loc_math.png').setDepth(2);

  
  }
  
  refresh ()
  {
      this.cameras.main.setPosition(this.parent.x, this.parent.y);
      this.scene.bringToTop();
    }
   
  closeWindow(func){

  }
}