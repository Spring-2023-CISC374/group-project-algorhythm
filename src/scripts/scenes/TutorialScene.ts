import BaseScene from './BaseScence'

export default class TutorialScene extends BaseScene {

    constructor() {
      super('TutorialScene');
    }
  
    create() {
        super.create('mountain', 'Tutorial', 340, 320, 'guy_right');

        //this.player = this.physics.add.sprite(340, 320, 'guy_right');
        const goal1 = this.physics.add.sprite(655, 320, 'star');
        this.goals.add(goal1);
        this.goalsLeft++

        //add sounds
        //need to fix
        this.soundUp = this.sound.add("c1_sound")
        this.soundDown = this.sound.add("g5_sound")
        this.soundLeft = this.sound.add("a6_sound")
        this.soundRight = this.sound.add("d2_sound")

        //note images
        this.noteLeft = "1"
        this.noteRight = "2"
        this.noteUp = "3"
        this.noteDown = "4"

        /* this.goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8); */

        //add trees 
        this.add.image(660, 200, 'tree1')
        this.add.image(760, 455, 'tree2')
        this.add.image(800, 255, 'tree3')
        this.add.image(550, 255, 'bush1')
        this.add.image(450, 200, 'tree3')
        this.add.image(480, 350, 'rock1')
        this.add.image(430, 420, 'stump2')
        this.add.image(630, 420, 'bush2')
        this.add.image(660, 520, 'bush2')
        this.add.image(680, 450, 'bush2')

        //add instruction
        this.instruction.setVisible(true)

        
        this.start.on('pointerdown', () => this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex));
        this.editInput(this.userInput, this.noteX, this.noteY, this.noteGroup, this.noteLeft, this.noteRight,
          this.noteUp, this.noteDown);
	}

}