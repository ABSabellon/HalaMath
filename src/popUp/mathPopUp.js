/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor (handle, parent) {
    super(handle)

    this.parent = parent;
    
  }

  create () {

    //const for center of scene
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    
    // Math Overlay
    var math = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.40, 'windows','window_big.png').setDepth(1);   
    math.setScale(0.47) 

    var mathText = this.add.sprite(screenCenterX, math.height * .37, 'windows', 'window_completeTextArea.png').setDepth(2)
    mathText.setScale(0.6)

    var mathAccept = this.add.sprite(this.game.renderer.width * 0.37 , this.game.renderer.height* 0.75, 'btns', 'btn_yes00.png').setDepth(2)
    mathAccept.setScale(0.5)
    mathAccept.setInteractive()

    mathAccept.on("pointerover",() =>{
      mathAccept.setFrame('btn_yes01.png')
    })

    mathAccept.on("pointerout", () =>{
      mathAccept.setFrame('btn_yes00.png')    
    })

    mathAccept.on("pointerup", () =>{
      console.log("You Toucha My BAGUETTE!")     
    })

    var mathCancel = this.add.sprite(this.game.renderer.width * 0.63 , this.game.renderer.height* 0.75, 'btns', 'btn_no00.png').setDepth(2)
    mathCancel.setScale(0.5)
    mathCancel.setInteractive()

    mathCancel.on("pointerover",() =>{
      mathCancel.setFrame('btn_no01.png')
    })

    mathCancel.on("pointerout", () =>{
      mathCancel.setFrame('btn_no00.png')    
    })

    mathCancel.on("pointerup", () =>{  
      console.log("You Toucha My BAGUETTE!")     
    })

    //Left Fruits

    var mathFruitLeftOnes = this.add.sprite(this.game.renderer.width * 0.39 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitLeftOnes.setScale(0.15)

    var mathFruitLeftTens = this.add.sprite(this.game.renderer.width * 0.33 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitLeftTens.setScale(0.15)

    var mathFruitLeftHundreds = this.add.sprite(this.game.renderer.width * 0.27 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitLeftHundreds.setScale(0.15)

    var mathFruitLeftThousands = this.add.sprite(this.game.renderer.width * 0.21 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitLeftThousands.setScale(0.15)
    
    //Math Operator

    var mathPlus = this.add.sprite(screenCenterX , this.game.renderer.height* 0.33, 'btns', 'btn_plus02.png').setDepth(2)
    mathPlus.setScale(0.4)

    //Right Fruits

    var mathFruitRightOnes = this.add.sprite(this.game.renderer.width * 0.78 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitRightOnes.setScale(0.15)

    var mathFruitRightTens = this.add.sprite(this.game.renderer.width * 0.72 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitRightTens.setScale(0.15)

    var mathFruitRightHundreds = this.add.sprite(this.game.renderer.width * 0.66 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitRightHundreds.setScale(0.15)

    var mathFruitRightThousands = this.add.sprite(this.game.renderer.width * 0.60 , this.game.renderer.height* 0.33, 'windows', 'window_completeIconArea.png').setDepth(2)
    mathFruitRightThousands.setScale(0.15)
  }
  
  refresh ()
  {
      this.cameras.main.setPosition(this.parent.x, this.parent.y);
      this.scene.bringToTop();
    }
   
  closeWindow(func){

  }
}