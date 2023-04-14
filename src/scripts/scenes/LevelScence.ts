import Phaser from 'phaser'

export default class LevelScene extends Phaser.Scene {
    private levelText?: Phaser.GameObjects.Text

    constructor() {
      super({ key: 'LevelScene' });
    }
  
    create() {
        this.add.image(400, 300, 'city')

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
        this.levelText = this.add.text(16, 16, 'Level 1', {
			fontSize: '32px', 
			fill: '#FFFFFF'
		})

        //add note
        this.add.image(85, 320, 'note')

        //add map
        this.add.image(650, 320, 'map')

        const player = this.physics.add.sprite(340,320,'guy_right');
	}
}