import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'TitleScene' })
  }

  preload(){
    //load animation

    this.anims.create({
      key: 'moveTitle',
      frameRate: 10,
      frames: this.anims.generateFrameNames('gs_title',{
        prefix: 'sp_title_mov',
        suffix: '.png',
        start: 1,
        end: 40
      }),
      repeat : -1,
    })
  }

  create () {

    //create title
    var title = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.30, 'gs_title', 'sp_title_mov1.png').setDepth(1)  
    title.displayWidth = 700
    title.scaleY = title.scaleX
    title.play('moveTitle')
    

    //create background
    this.add.image(0, 0, 'gs_bg').setOrigin(0).setDepth(0)

    //create buttons
    var btn_play = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.60, 'btns_main','btn_right000.png').setDepth(1)
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
