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

        const goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8);

<<<<<<< HEAD
        console.log('precollider');

        this.physics.add.collider(goal, player, this.goToEnd,undefined,this)
		//this.physics.add.overlap(goal, player, this.goToEnd, undefined, this) 

        console.log('postcollider');

		// Animations
		this.anims.create({
			key: 'up',
			frames: this.anims.generateFrameNumbers('guy_up', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'down',
			frames: this.anims.generateFrameNumbers('guy_down', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('guy_left', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('guy_right', {start:0, end:3}), frameRate: 13, repeat: -1
		});
=======
        /* this.physics.add.collider(this.player, this.goal)
		this.physics.add.overlap(this.player, this.goal, this.handleArrive, undefined, this)  */
>>>>>>> d369557eb37be8e5f71c19ea0f23a4d4b0e98ba0
		
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