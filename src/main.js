import Phaser from 'phaser'

import LoadingScene from './scenes/LoadingScene'
import TitleScene from './scenes/TitleScene'
import GameScene from './scenes/GameScene'

import config from './config'

const gameConfig = Object.assign(config, {
  scene: [LoadingScene, TitleScene, GameScene]
})

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig)
  }
}

window.game = new Game()
