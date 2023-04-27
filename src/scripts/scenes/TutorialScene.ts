import Phaser from 'phaser'
import BaseScene from './BaseScence'

export default class TutorialScene extends BaseScene {
    declare protected player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    constructor() {
      super('TutorialScene');
    }
  
    create() {
        super.create('mountain', 'Tutorial');

        this.player = this.physics.add.sprite(340, 320, 'guy_right');

        //add sounds
        //need to fix
        this.soundUp = this.sound.add("c1_sound")
        this.soundDown = this.sound.add("g5_sound")
        this.soundLeft = this.sound.add("a6_sound")
        this.soundRight = this.sound.add("d2_sound")

        this.goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8);

        /* this.physics.add.collider(this.player, this.goal)
		this.physics.add.overlap(this.player, this.goal, this.handleArrive, undefined, this)  */
		
        //add trees 
        this.add.image(660, 200, 'tree1')
        this.add.image(760, 455, 'tree2')
        this.add.image(800, 255, 'tree3')
        this.add.image(550, 255, 'bush1')
        this.add.image(450, 200, 'tree3')
        this.add.image(480, 350, 'rock2')
        this.add.image(430, 420, 'stump2')
        this.add.image(630, 420, 'bush2')
        this.add.image(660, 520, 'bush2')
        this.add.image(680, 450, 'bush2')

        //add instruction
        this.instruction = this.add.image(650, 400, 'instruction').setInteractive()
        .on('pointerdown', ()=>this.instruction.setVisible(false));
        
		this.start.on('pointerdown', () => this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex));
	}

}