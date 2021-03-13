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

   // this.load.image('loaderBg', './assets/images/loader-bg.png')
   // this.load.image('loaderBar', './assets/images/loader-bar.png')

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })
    
    // load your assets

    //load atlass
    this.load.atlas('gs_title', 'assets/game/sprites/title.png','assets/game/sprites/title.json' )
    this.load.atlas('btns', 'assets/game/sprites/buttons.png','assets/game/sprites/buttons.json' )   
    this.load.atlas('elems', 'assets/game/sprites/elements.png','assets/game/sprites/elements.json' )  
    this.load.atlas('windows', 'assets/game/sprites/windows.png','assets/game/sprites/windows.json' )  
    this.load.atlas('testers', 'assets/game/sprites/testers.png','assets/game/sprites/testers.json' )

    //Background
    this.load.image('gs_bg', 'assets/game/sprites/bg.png')

    //audio
    this.load.audio('bgm_title', 'assets/game/audio/soundtrack/bgm_title.mp3')
  }

  update () {
    if (this.fontsReady) {
      this.scene.start('TitleScene')
      
     // this.scene.start('GameScene')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
