import Phaser from 'phaser'

export default {
  type: Phaser.AUTO,
  // parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'halamathstorage',
  backgroundColor: 0x999999,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      gravity: {
        y: 0
      }
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'content'
  },
  pixelArt: true
}
