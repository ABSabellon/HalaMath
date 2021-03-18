/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor (handle, parent) {
    super(handle)
    this.parent = parent;
  }

  init () {
    this.sum = 0;
    this.fruitsConf = [
      {x: this.game.renderer.width * 0.25, y: this.game.renderer.height * 0.6, atlas: 'testers', atlasKey: 'ent_fruit_1.png'},
      {x: this.game.renderer.width * 0.75, y: this.game.renderer.height * 0.6, atlas: 'testers', atlasKey: 'ent_fruit_2.png'}
    ];
  }

  preload () {
    this.load.image('redbox', 'assets/game/test/redbox.png');
    this.load.image('bluebox', 'assets/game/test/bluebox.png');
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

    //Left Fruit Text
    var mathFruitLeftText = this.add.sprite(this.game.renderer.width * 0.3, this.game.renderer.height* 0.45, 'windows', 'window_completeTextArea.png').setDepth(2)
    mathFruitLeftText.setScale(0.3)
    
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

    //Right Fruit Text

    var mathFruitRightText = this.add.sprite(this.game.renderer.width * 0.69, this.game.renderer.height* 0.45, 'windows', 'window_completeTextArea.png').setDepth(2)
    mathFruitRightText.setScale(0.3)


    //Redboxes LEFT
    this.box_thousands_left = this.physics.add.image(163 , 194, 'redbox').setDepth(3);
    this.box_hundreds_left = this.physics.add.sprite(213 , 194, 'redbox').setDepth(3);
    this.box_tens_left = this.physics.add.sprite(263 , 194, 'redbox').setDepth(3);
    this.box_ones_left = this.physics.add.sprite(313 , 194, 'redbox').setDepth(3);

    this.outputText = this.add.text(200,255, this.sum, {fontSize: 32}).setDepth(3);

    //Redboxes RIGHT
    // this.box_thousands_right = this.physics.add.image(478 , 194, 'redbox').setDepth(3);
    // this.box_hundreds_right = this.physics.add.sprite(528 , 194, 'redbox').setDepth(3);
    // this.box_tens_right = this.physics.add.sprite(578 , 194, 'redbox').setDepth(3);
    // this.box_ones_right = this.physics.add.sprite(628 , 194, 'redbox').setDepth(3);

    // this.outputTextRight = this.add.text(495,255, this.sum, {fontSize: 32}).setDepth(3);

    //fruit draggable
    this.fruitsConf.map((conf, index) => {
      var fruit = this.physics.add.sprite(conf.x, conf.y, conf.atlas, conf.atlasKey).setDepth(3).setScale(0.5).setInteractive();
      this.input.setDraggable(fruit);

      fruit.on('pointerdown', (pointer) => {
        fruit.setTint(0xff0000);
        this.cloneSprite(index);
      });

      fruit.on('pointerout', (pointer) => {
        fruit.clearTint();
      });
  
      fruit.on('pointerup', (pointer) => {
        fruit.clearTint();
      });

      this.physics.add.overlap(
        this.box_thousands_left, 
        fruit, 
        function(box, fruit){
          this.sum += 1000;
          box.setTexture('bluebox');
          this.outputText.setText(this.sum);
          fruit.destroy();
        },
        null,
        this
      );

      this.physics.add.overlap(
        this.box_hundreds_left, 
        fruit, 
        function(box, fruit){
          this.sum += 100;
          box.setTexture('bluebox');
          this.outputText.setText(this.sum);
          fruit.destroy();
        }, 
        null,
        this
      );

      this.physics.add.overlap(
        this.box_tens_left, 
        fruit, 
        function(box, fruit){
          this.sum += 10;
          box.setTexture('bluebox');
          this.outputText.setText(this.sum);
          fruit.destroy();
        }, 
        null,
        this
      );

      this.physics.add.overlap(
        this.box_ones_left, 
        fruit, 
        function(box, fruit){
          this.sum += 1;
          box.setTexture('bluebox');
          this.outputText.setText(this.sum);
          fruit.destroy();
        }, 
        null,
        this
      );
    });

    this.input.on('dragstart', (pointer, gameObject) => {
      gameObject.setTint(0xff0000);
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    this.input.on('dragend', (pointer, gameObject) => {
        gameObject.clearTint();
        gameObject.destroy();
    });
  }
  
  refresh ()
  {
      this.cameras.main.setPosition(this.parent.x, this.parent.y);
      this.scene.bringToTop();
  }
    
  cloneSprite (index) {

    var clone = this.physics.add.sprite(this.fruitsConf[index].x, this.fruitsConf[index].y, this.fruitsConf[index].atlas, this.fruitsConf[index].atlasKey).setDepth(3).setScale(0.5).setInteractive();
    this.input.setDraggable(clone);
    clone.on('pointerdown', (pointer) => {
      clone.setTint(0xff0000);
      this.cloneSprite(index);
    });
    clone.on('pointerout', (pointer) => {
      clone.clearTint();
    });
    clone.on('pointerup', (pointer) => {
      clone.clearTint();
    });

    this.physics.add.overlap(
      this.box_thousands_left, 
      clone, 
      function(box, fruit){
        this.sum += 1000;
        box.setTexture('bluebox');
        this.outputText.setText(this.sum);
        fruit.destroy();
      },
      null,
      this
    );

    this.physics.add.overlap(
      this.box_hundreds_left, 
      clone, 
      function(box, fruit){
        this.sum += 100;
        box.setTexture('bluebox');
        this.outputText.setText(this.sum);
        fruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_tens_left, 
      clone, 
      function(box, fruit){
        this.sum += 10;
        box.setTexture('bluebox');
        this.outputText.setText(this.sum);
        fruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_ones_left, 
      clone, 
      function(box, fruit){
        this.sum += 1;
        box.setTexture('bluebox');
        this.outputText.setText(this.sum);
        fruit.destroy();
      }, 
      null,
      this
    );
  }
   
  closeWindow(func){

  }
}