import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}


	preload() {
		this.load.image('dude', 'assets/sprites/placerDude.jpg');
	}

	create() {
		const player = this.physics.add.image(400,300,'dude');
		
		const Left = this.add.circle(50, 50, 20, 0xFF0000);
		Left.setInteractive();
		Left.on('pointerup', function() {
			player.x -= 30
		});

		const Right = this.add.circle(100, 50, 20, 0xFF0000);
		Right.setInteractive();
		Right.on('pointerup', function() {
			player.x += 30
		});

		const Up = this.add.circle(150, 50, 20, 0xFF0000);
		Up.setInteractive();
		Up.on('pointerup', function() {
			player.y -= 30
		});

		const Down = this.add.circle(200, 50, 20, 0xFF0000);
		Down.setInteractive();
		Down.on('pointerup', function() {
			player.y += 30
		});

		this.add.text(30, 42, 'Left');
		this.add.text(78, 42, 'Right');
		this.add.text(133, 42, 'Up');
		this.add.text(180, 42, 'Down');

		
	}

	left(){
		this.player.setX(30);
	}

	update() {

	}
}
