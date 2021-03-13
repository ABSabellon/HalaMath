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
        prefix: 'title',
        suffix: '.png',
        start: 1,
        end: 40
      }),
      repeat : -1,
    })
  }

  create () {

    //create title
    var title = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.30, 'gs_title', 'title001.png').setDepth(1)  
    title.setScale(0.5)
    title.play('moveTitle')
    

    //create background
    var title = this.add.image(0, 0, 'gs_bg').setOrigin(0).setDepth(0)
    title.setScale(0.2)

    //create buttons
    var btn_play = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.60, 'btns','btn_play00.png').setDepth(1)
    btn_play.setScale(0.6)

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
      btn_play.setFrame('btn_play01.png')
    })

    btn_play.on("pointerout", () =>{
      btn_play.setFrame('btn_play00.png')    
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
