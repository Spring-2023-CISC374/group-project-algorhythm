import BaseScene from './BaseScence'

export default class LevelC extends BaseScene {
    constructor() {
      super('LevelC');
    }
    
    create() {
      console.log('level c');
      super.create('mountain', 'Level C', 444, 20, 'guy_down');
      this.add.image(650, 32, 'map');

      //add sounds
      this.soundUp = this.sound.add("e5_sound")
      this.soundDown = this.sound.add("c5_sound")
      this.soundLeft = this.sound.add("g4_sound")
      this.soundRight = this.sound.add("d5_sound")

      const goal1 = this.physics.add.sprite(650, 220, 'star');
      const goal2 = this.physics.add.sprite(550, 130, 'star');
      const goal3 = this.physics.add.sprite(345, 30, 'star');
      const goal4 = this.physics.add.sprite(650, 20, 'star');
      const goal5 = this.physics.add.sprite(345, 230, 'star');
      const goal6 = this.physics.add.sprite(445, 320, 'star');
      this.goals.add(goal1);
      this.goals.add(goal2);
      this.goals.add(goal3);
      this.goals.add(goal4);
      this.goals.add(goal5);
      this.goals.add(goal6);
      this.goalsLeft = 6

  
      //add trees 
      this.add.image(345, 420, 'bush2');
      this.add.image(745, 320, 'bush2');
      this.add.image(545, 320, 'bush2');
      this.add.image(545, 420, 'bush2');
      this.add.image(765, 60, 'tree3');
      this.add.image(945, 420, 'tree1');

      //add instruction
      this.instruction = this.add.image(650, 400, 'instruction').setInteractive().setVisible(false)
      .on('pointerdown', ()=>this.instruction.setVisible(false));
      
  this.start.on('pointerdown', () => this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex));
}
}