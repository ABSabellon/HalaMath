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
    
    // load your assets

    //load atlass
    this.load.atlas('gs_title', 'assets/game/sprites/title.png','assets/game/sprites/title.json' )
    this.load.atlas('btns_main', 'assets/game/sprites/btns_main.png','assets/game/sprites/btns_main.json' )    
    this.load.atlas('btns_Others', 'assets/game/sprites/btns_others.png','assets/game/sprites/btns_others.json' )    
    this.load.atlas('testers', 'assets/game/sprites/testers.png','assets/game/sprites/testers.json' )

    //Background
    this.load.image('gs_bg', 'assets/game/test/bg.png')

    //audio
    this.load.audio('bgm_title', 'assets/game/audio/soundtrack/bgm_title.mp3')
  }

  update () {
    if (this.fontsReady) {
     // this.scene.start('TitleScene')
      
      this.scene.start('GameScene')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
