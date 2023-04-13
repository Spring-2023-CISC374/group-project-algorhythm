import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
	private bgm?: Phaser.Sound.BaseSound

	constructor() {
		super({key: 'GameScene'})
	}
	
	create() {
		const player = this.physics.add.sprite(100,100,'guy_up');

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
		
		this.movePlayer(player);
	}
	movePlayer(player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody) {
		const Left = this.add.circle(50, 50, 20, 0xFF0000);
		Left.setInteractive();
		Left.on('pointerup', function() {
			player.x -= 30
			player.play('left')
		});

		const Right = this.add.circle(100, 50, 20, 0xFF0000);
		Right.setInteractive();
		Right.on('pointerup', function() {
			player.x += 30
			player.play('right')
		});

		const Up = this.add.circle(150, 50, 20, 0xFF0000);
		Up.setInteractive();
		Up.on('pointerup', function() {
			player.y -= 30
			player.play('up')
		});

		const Down = this.add.circle(200, 50, 20, 0xFF0000);
		Down.setInteractive();
		Down.on('pointerup', function() {
			player.y += 30
			player.play('down')
		});

		this.add.text(30, 42, 'Left');
		this.add.text(78, 42, 'Right');
		this.add.text(133, 42, 'Up');
		this.add.text(180, 42, 'Down');

		this.bgm = this.sound.add('genericMusic', {loop: true});
		this.bgm.play()
	}

	update() {
//
	}
}
