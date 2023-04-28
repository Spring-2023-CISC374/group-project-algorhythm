import Phaser from 'phaser'
import BaseScene from './BaseScence'

export default class Level1 extends BaseScene {
    constructor() {
      super('Level1');
    }
    
    create() {
      super.create('mountain', 'Level 1');

      this.add.image(650,32,"map")
      
      this.player = this.physics.add.sprite(444, 20, 'guy_down');

      //add sounds
      //need to fix
      this.soundUp = this.sound.add("g5_sound")
      this.soundDown = this.sound.add("d2_sound")
      this.soundLeft = this.sound.add("c1_sound")
      this.soundRight = this.sound.add("e3_sound")

      this.goal = this.add.image(865,320,'star')
      .setInteractive()
      .on('pointerdown', ()=>this.goToEnd());
      this.path.setScale(0.8);

      /* this.physics.add.collider(this.player, this.goal)
  this.physics.add.overlap(this.player, this.goal, this.handleArrive, undefined, this)  */
  
      //add trees 
      this.add.image(560, 420, 'tree1').setScale(1.7)
      this.add.image(360, 395, 'tree2')
      this.add.image(880, 125, 'tree3')
      this.add.image(710, 90, 'tree1').setScale(1.3)
      this.add.image(350, 180, 'bush1')
      this.add.image(320, 120, 'bush1')
      this.add.image(350, 50, 'bush1')
      this.add.image(950, 400, 'stump2')
      this.add.image(950, 320, 'bush2')
      this.add.image(960, 520, 'bush2')
      this.add.image(980, 450, 'bush2') 

      //add instruction
      this.instruction = this.add.image(650, 400, 'instruction').setInteractive().setVisible(false)
      .on('pointerdown', ()=>this.instruction.setVisible(false));
      
  this.start.on('pointerdown', () => this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex));
}
}