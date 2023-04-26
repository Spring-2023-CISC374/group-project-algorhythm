import Phaser from 'phaser'

export default class LevelScene extends Phaser.Scene {
    protected path?: any
    protected instruction?: any
    protected question?: any
    protected goal?: any
    protected player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    constructor(KeyName: string) {
      super(KeyName);
    }
  
    create(imageName: string, levelName: string) {
        this.add.image(400, 300, imageName)

        //add buttons images
        this.add.image(600, 755, 'button')
		this.add.image(500, 755, 'button')
        this.add.image(400, 755, 'button')
        this.add.image(900, 755, 'button')
        this.add.image(800, 755, 'button')
        this.add.image(700, 755, 'button')

        //add menu?
        this.path = this.add.image(1220, 50, 'arrow')
        .setInteractive()
        .on('pointerdown', ()=>this.goToTitle());
        this.path.setScale(0.8);

        this.question = this.add.image(1100, 50, 'mark')
        .setInteractive()
        .on('pointerdown', ()=>this.instruction.setVisible(true));
        this.question.setScale(0.8);

        //add staff paper images
        this.add.image(675, 625, 'staffpaper')

        //add level text
        this.add.text(16, 16, levelName, {
			fontSize: '32px', 
			color: '#FFFFFF'
		})

        //add note
        this.add.image(85, 320, 'note')

        //add map
        this.add.image(650, 320, 'map')
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

    private handleArrive(){
        this.scene.start('EndScene');
    }

    goToTitle(){
        this.scene.start('TitleScene');
    }

    goToEnd(){
        this.scene.start('EndScene');
    }
    
}