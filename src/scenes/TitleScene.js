import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'TitleScene' })
  }

  create () {
    let title = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.30, 'gs_title').setDepth(1) 
    title.displayWidth = 700
    title.scaleY = title.scaleX
    
    this.add.image(0, 0, 'gs_bg').setOrigin(0).setDepth(0)

    let btn_play = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.60, 'btn_play').setDepth(1)
    btn_play.displayWidth = 80
    btn_play.scaleY = btn_play.scaleX

    //Pressing the Play button will direct to game scene
    /**
     * 
     * PointerEVents:
     *    pointerover - hovering
     *    pointerout - not hovering
     *    pointerup - click and release
     *    pointerdown - just click 
     */


    btn_play.setInteractive()

    btn_play.on("pointerover",() =>{
      console.log("HOVA")
    })

    btn_play.on("pointerout", () =>{
      console.log("OUTTA HERE")      
    })

    btn_play.on("pointerup", () =>{
      this.scene.start('GameScene')       
    })

    //create audio

    this.sound.play("bgm_title",{
      loop: true
    })

  }

  update () {}
}
