import Phaser from 'phaser'
import LevelScene from './LevelScence'

export default class TutorialScene extends LevelScene {
    private soundC?: Phaser.Sound.BaseSound
    private soundG?: Phaser.Sound.BaseSound
    private soundA?: Phaser.Sound.BaseSound
    private soundD?: Phaser.Sound.BaseSound

    constructor() {
      super('TutorialScene');
    }
  
    create() {
        super.create('mountain', 'Tutorial');

        const player = this.physics.add.sprite(340,320,'guy_right');

        //add sounds
        //need to fix
        this.soundC = this.sound.add("c1_sound")
        this.soundG = this.sound.add("g5_sound")
        this.soundA = this.sound.add("a6_sound")
        this.soundD = this.sound.add("d2_sound")

        const goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8);

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
		
		this.movePlayer(player, this.soundA, this.soundC, this.soundD, this.soundG);

        

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
        
	}
    
	movePlayer(player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, soundC: Phaser.Sound.BaseSound,
        soundG: Phaser.Sound.BaseSound, soundA: Phaser.Sound.BaseSound, soundD: Phaser.Sound.BaseSound) {
		const Left = this.add.circle(400, 750, 20, 0xFF0000);
		Left.setInteractive();
		Left.on('pointerup', function() {
			player.x -= 105
			player.play('left')
            soundA.play()
		});

		const Right = this.add.circle(500, 750, 20, 0xFF0000);
		Right.setInteractive();
		Right.on('pointerup', function() {
			player.x += 105
			player.play('right')
            soundD.play()
		});

		const Up = this.add.circle(600, 750, 20, 0xFF0000);
		Up.setInteractive();
		Up.on('pointerup', function() {
			player.y -= 105
			player.play('up')
            soundC.play()
		});

		const Down = this.add.circle(700, 750, 20, 0xFF0000);
		Down.setInteractive();
		Down.on('pointerup', function() {
			player.y += 105
			player.play('down')
            soundG.play()
		});

		this.add.text(380, 742, 'Left');
		this.add.text(478, 742, 'Right');
		this.add.text(590, 742, 'Up');
		this.add.text(680, 742, 'Down');

		
	}

    createInstuction(){
        this.instruction = this.add.image(650, 400, 'instruction').setInteractive();
    }

    removeInstruction(){
        this.instruction.destroy();
        this.instruction = null;
    }
}