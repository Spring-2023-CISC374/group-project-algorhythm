import Phaser from 'phaser'

export default class TutorialScene extends Phaser.Scene {
    private levelText?: Phaser.GameObjects.Text
    private instruction?: any
    private path?: any
    private question?: any
    private bgm?: Phaser.Sound.BaseSound
    private soundC?: Phaser.Sound.BaseSound
    private soundG?: Phaser.Sound.BaseSound
    private soundA?: Phaser.Sound.BaseSound
    private soundD?: Phaser.Sound.BaseSound
    private goal?: any
    private player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

    constructor() {
      super({ key: 'TutorialScene' });
    }
  
    create() {
        this.add.image(400, 300, 'city')

        //add menu?
        this.path = this.add.image(1220, 50, 'arrow')
        .setInteractive()
        .on('pointerdown', ()=>this.goToTitle());
        this.path.setScale(0.8);

        this.question = this.add.image(1100, 50, 'mark')
        .setInteractive()
        .on('pointerdown', ()=>this.creatInstuction());
        this.question.setScale(0.8);

        //add buttons images
        this.add.image(600, 755, 'button')
		this.add.image(500, 755, 'button')
        this.add.image(400, 755, 'button')
        this.add.image(900, 755, 'button')
        this.add.image(800, 755, 'button')
        this.add.image(700, 755, 'button')

        //add staff paper images
        this.add.image(675, 625, 'staffpaper')

        //add level text
        this.levelText = this.add.text(16, 16, 'Tutorial', {
			fontSize: '32px', 
			fill: '#FFFFFF'
		})

        //add note
        this.add.image(85, 320, 'note')

        //add map
        this.add.image(650, 320, 'map')

        


        const player = this.physics.add.sprite(340,320,'guy_up');

        //add sounds
        //need to fix
        this.soundC = this.sound.add("c1_sound")
        this.soundG = this.sound.add("g5_sound")
        this.soundA = this.sound.add("a6_sound")
        this.soundD = this.sound.add("d2_sound")

        this.goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8);

        /* this.physics.add.collider(this.player, this.goal)
		this.physics.add.overlap(this.player, this.goal, this.handleArrive, undefined, this)  */

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

        //add instruction
        this.creatInstuction();

        this.input.once('pointerdown', () => {
            this.instruction.destroy();
            this.instruction = null;
        });

        this.instruction.setInteractive();
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

		//this.bgm = this.sound.add('genericMusic', {loop: true});
		//this.bgm.play()
	}

    private handleArrive(){
        this.scene.start('EndScene');
    }

    goToTitle(){
        this.scene.start('TitleScene');
    }

    goToEnd(){
        this.scene.start('EndScene');
    }

    creatInstuction(){
        this.instruction = this.add.image(650, 400, 'instruction');
    }

    removeInstruction(){
        this.instruction.destroy();
        this.instruction = null;
    }
}