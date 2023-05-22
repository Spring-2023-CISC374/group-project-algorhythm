import BaseScene from './BaseScence'

export default class LevelB extends BaseScene{
    constructor() {
       super('LevelB');
    }

    create() {
      console.log('level b');
      super.create('mountain', 'Old MacDonald', 444, 120, 'guy_down',"levelBPreview");
      this.add.image(650, 32, 'map');
      
      //add sounds
      this.soundUp = this.sound.add("c1_sound")
      this.soundDown = this.sound.add("e3_sound")
      this.soundLeft = this.sound.add("g5_sound")
      this.soundRight = this.sound.add("d2_sound")

      //note images
      this.noteLeft = "5"
      this.noteRight = "2"
      this.noteUp = "1"
      this.noteDown = "3"

      // add starts for this level
      const goal1 = this.physics.add.sprite(965, 420, 'star');
      const goal2 = this.physics.add.sprite(650, 330, 'star');
      const goal3 = this.physics.add.sprite(550, 230, 'star');
      const goal4 = this.physics.add.sprite(760, 515, 'star');
      const goal5 = this.physics.add.sprite(865, 320, 'star');
      this.goals.add(goal1);
      this.goals.add(goal2);
      this.goals.add(goal3);
      this.goals.add(goal4);
      this.goals.add(goal5);
      this.goalsLeft = 5
  
    
        //add trees 
      this.add.image(500, 450, 'tree1').setScale(2.0)
      this.add.image(870, 110, 'tree2').setScale(1.3)
      this.add.image(970, 110, 'tree2').setScale(1.3)
      this.add.image(350, 400, 'tree2').setScale(1.3)
      this.add.image(760, 90, 'tree1').setScale(1.3)
      this.add.image(340, 210, 'bush1').setScale(1.7)
      this.add.image(350, 120, 'bush1')
      this.add.image(770, 330, 'bush1').setScale(1.2)
      this.add.image(850, 500, 'stump2')
      this.add.image(450, 50, 'bush2')
      this.add.image(560, 50, 'bush2').setScale(0.8)
      this.add.image(450, 320, 'bush2').setScale(1.2)
      this.add.image(650, 50, 'bush2') 
  
        //add instruction
      this.instruction = this.add.image(650, 400, 'instruction').setInteractive().setVisible(false)
      .on('pointerdown', ()=>this.instruction.setVisible(false));
        
      this.start.on('pointerdown', () => this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex));
      this.editInput(this.userInput, this.noteX, this.noteY, this.noteGroup, this.noteLeft, this.noteRight,
        this.noteUp, this.noteDown, 'LevelB');
      }
  
}