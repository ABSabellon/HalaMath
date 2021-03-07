/* globals __DEV__ */
import Phaser from 'phaser'


export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {

  }
  
  preload () {

  }

  create () {

    //Background
    this.load.image('gs_bg', 'assets/game/test/bg.png')
   
  }
}
