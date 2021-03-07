import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'LoadingScene' })
  }

  preload () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.add.text(100, 100, 'loading fonts...')

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })
     //
    // load your assets
    //
    //Logo Title
    this.load.spritesheet('gs_title', 'assets/game/ui/title/sp_gs_title.png',{
      frameWidth: 1200,
      frameHeight: 475
    })

    //Btns
    this.load.spritesheet('btn_play', 'assets/game/test/btns1.png',{
      frameWidth: 182,
      frameHeight: 191
    })

    //Background
    this.load.image('gs_bg', 'assets/game/test/bg.png')

    //audio
    this.load.audio('bgm_title', 'assets/game/audio/soundtrack/bgm_title.mp3')
  }

  update () {
    if (this.fontsReady) {
      this.scene.start('TitleScene')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
