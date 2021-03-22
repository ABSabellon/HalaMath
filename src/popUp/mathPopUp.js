/* globals __DEV__ */
import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor (handle, parent) {
    super(handle)
    this.parent = parent;
  }

  init () {
    this.sumLeft = 0;
    this.sumRight = 0;
    this.thousands_left_text = 0;
    this.hundreds_left_text = 0;
    this.tens_left_text = 0;
    this.ones_left_text = 0;
    this.thousands_right_text = 0;
    this.hundreds_right_text = 0;
    this.tens_right_text = 0;
    this.ones_right_text = 0;
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
    
    // Math Overlay
    var math = this.add.sprite( this.game.renderer.width / 2, this.game.renderer.height * 0.40, 'windows','window_bigNoTitle.png').setDepth(1);   
    math.setScale(0.47) 

    var mathText = this.add.sprite(this.game.renderer.width / 2, math.height * .37, 'windows', 'window_completeTextArea.png').setDepth(2)
    mathText.setScale(0.6)

    var mathAccept = this.add.sprite((this.game.renderer.width /2) - 100 , this.game.renderer.height* 0.75, 'btns', 'btn_yes00.png').setDepth(2)
    mathAccept.setScale(0.45)
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

    var mathCancel = this.add.sprite((this.game.renderer.width /2) + 100  , this.game.renderer.height* 0.75, 'btns', 'btn_no00.png').setDepth(2)
    mathCancel.setScale(0.45)
    mathCancel.setInteractive()

    mathCancel.on("pointerover",() =>{
      mathCancel.setFrame('btn_no01.png')
    })

    mathCancel.on("pointerout", () =>{
      mathCancel.setFrame('btn_no00.png')    
    })

    mathCancel.on("pointerup", () =>{  
      scene.scene.remove(handle);    
    })

    //NPC Happiness

    var happy= this.add.sprite((this.game.renderer.width / 2) , 45, 'elems', 'element_faveBlank.png').setDepth(2)
    happy.setScale(0.45)

    var happyMeter= this.add.sprite((this.game.renderer.width / 2) , 41, 'elems', 'element_health01.png').setDepth(2)
    happyMeter.setScale(0.45)
    
    var happyLiner= this.add.sprite((this.game.renderer.width / 2) , 41, 'elems', 'element_meterOverlay.png').setDepth(2)
    happyLiner.setScale(0.45)

    var happyHeart= this.add.sprite((this.game.renderer.width / 2)  + 114, 41, 'elems', 'element_iconHealth01.png').setDepth(3)
    happyHeart.setScale(0.35)

    var happyHeartGrey= this.add.sprite((this.game.renderer.width / 2)  - 114, 41, 'elems', 'element_iconHealth02.png').setDepth(3)
    happyHeartGrey.setScale(0.35)
    

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

    var mathPlus = this.add.sprite(this.game.renderer.width / 2 , this.game.renderer.height* 0.33, 'btns', 'btn_plus02.png').setDepth(2)
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
    var textOffsetY = -15;
    var textOffsetX = -10

    this.box_thousands_left = this.physics.add.image(163 , 194, 'redbox').setDepth(3);
    this.box_hundreds_left = this.physics.add.sprite(213 , 194, 'redbox').setDepth(3);
    this.box_tens_left = this.physics.add.sprite(263 , 194, 'redbox').setDepth(3);
    this.box_ones_left = this.physics.add.sprite(313 , 194, 'redbox').setDepth(3);

    this.box_thousands_left_text = this.add.text(163 + textOffsetX, 194 + textOffsetY, this.thousands_left_text, {fontSize: 32}).setDepth(3);
    this.box_hundreds_left_text = this.add.text(213 + textOffsetX, 194 + textOffsetY, this.hundreds_left_text, {fontSize: 32}).setDepth(3);
    this.box_tens_left_text = this.add.text(263 + textOffsetX, 194 + textOffsetY, this.tens_left_text, {fontSize: 32}).setDepth(3);
    this.box_ones_left_text = this.add.text(313 + textOffsetX, 194 + textOffsetY, this.ones_left_text, {fontSize: 32}).setDepth(3);

    this.outputTextLeft = this.add.text(200,255, this.sumLeft, {fontSize: 32}).setDepth(3);

    //Redboxes RIGHT
    this.box_thousands_right = this.physics.add.image(478 , 194, 'redbox').setDepth(3);
    this.box_hundreds_right = this.physics.add.sprite(528 , 194, 'redbox').setDepth(3);
    this.box_tens_right = this.physics.add.sprite(578 , 194, 'redbox').setDepth(3);
    this.box_ones_right = this.physics.add.sprite(628 , 194, 'redbox').setDepth(3);

    this.box_thousands_right_text = this.add.text(478 + textOffsetX, 194 + textOffsetY, this.thousands_right_text, {fontSize: 32}).setDepth(3);
    this.box_hundreds_right_text = this.add.text(528 + textOffsetX, 194 + textOffsetY, this.hundreds_right_text, {fontSize: 32}).setDepth(3);
    this.box_tens_right_text = this.add.text(578 + textOffsetX, 194 + textOffsetY, this.tens_right_text, {fontSize: 32}).setDepth(3);
    this.box_ones_right_text = this.add.text(628 + textOffsetX, 194 + textOffsetY, this.ones_right_text, {fontSize: 32}).setDepth(3);

    this.outputTextRight = this.add.text(495,255, this.sumRight, {fontSize: 32}).setDepth(3);

    //fruit draggable
    this.fruitsConf.map((conf, index) => {
      this.createFruit(index);
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
    
  createFruit (index) {
    var fruit = this.physics.add.sprite(this.fruitsConf[index].x, this.fruitsConf[index].y, this.fruitsConf[index].atlas, this.fruitsConf[index].atlasKey).setDepth(3).setScale(0.5).setInteractive();
    this.input.setDraggable(fruit);
    fruit.on('pointerdown', (pointer) => {
      fruit.setTint(0xff0000);
      this.createFruit(index);
    });
    fruit.on('pointerout', (pointer) => {
      fruit.clearTint();
    });
    fruit.on('pointerup', (pointer) => {
      fruit.clearTint();
    });

    //Left drag
    this.physics.add.overlap(
      this.box_thousands_left, 
      fruit, 
      function(box, currentFruit){
        if(this.thousands_left_text < 9){
          this.sumLeft += 1000;
          box.setTexture('bluebox');
          this.outputTextLeft.setText(this.sumLeft);
          this.thousands_left_text++;
          this.box_thousands_left_text.setText(this.thousands_left_text);
        }
        currentFruit.destroy();
      },
      null,
      this
    );

    this.physics.add.overlap(
      this.box_hundreds_left, 
      fruit, 
      function(box, currentFruit){
        if(this.hundreds_left_text < 9){
          this.sumLeft += 100;
          box.setTexture('bluebox');
          this.outputTextLeft.setText(this.sumLeft);
          this.hundreds_left_text++;
          this.box_hundreds_left_text.setText(this.hundreds_left_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_tens_left, 
      fruit, 
      function(box, currentFruit){
        if(this.tens_left_text < 9){
          this.sumLeft += 10;
          box.setTexture('bluebox');
          this.outputTextLeft.setText(this.sumLeft);
          this.tens_left_text++;
          this.box_tens_left_text.setText(this.tens_left_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_ones_left, 
      fruit, 
      function(box, currentFruit){
        if(this.ones_left_text < 9){
          this.sumLeft += 1;
          box.setTexture('bluebox');
          this.outputTextLeft.setText(this.sumLeft);
          this.ones_left_text++;
          this.box_ones_left_text.setText(this.ones_left_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    //Right Drag
    this.physics.add.overlap(
      this.box_thousands_right, 
      fruit, 
      function(box, currentFruit){
        if(this.thousands_right_text < 9){
          this.sumRight += 1000;
          box.setTexture('bluebox');
          this.outputTextRight.setText(this.sumRight);
          this.thousands_right_text++;
          this.box_thousands_right_text.setText(this.thousands_right_text);
        }
        currentFruit.destroy();
      },
      null,
      this
    );

    this.physics.add.overlap(
      this.box_hundreds_right, 
      fruit, 
      function(box, currentFruit){
        if(this.hundreds_right_text < 9){
          this.sumRight += 100;
          box.setTexture('bluebox');
          this.outputTextRight.setText(this.sumRight);
          this.hundreds_right_text++;
          this.box_hundreds_right_text.setText(this.hundreds_right_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_tens_right, 
      fruit, 
      function(box, currentFruit){
        if(this.tens_right_text < 9){
          this.sumRight += 10;
          box.setTexture('bluebox');
          this.outputTextRight.setText(this.sumRight);
          this.tens_right_text++;
          this.box_tens_right_text.setText(this.tens_right_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    this.physics.add.overlap(
      this.box_ones_right, 
      fruit, 
      function(box, currentFruit){
        if(this.ones_right_text < 9){
          this.sumRight += 1;
          box.setTexture('bluebox');
          this.outputTextRight.setText(this.sumRight);
          this.ones_right_text++;
          this.box_ones_right_text.setText(this.ones_right_text);
        }
        currentFruit.destroy();
      }, 
      null,
      this
    );

    return fruit;
  }
   
  closeWindow(func){

  }
}