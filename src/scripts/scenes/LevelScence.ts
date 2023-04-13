import Phaser from 'phaser'

export default class LevelScene extends Phaser.Scene {
    private levelText?: Phaser.GameObjects.Text

    constructor() {
      super({ key: 'LevelScene' });
    }
  
    create() {
        this.add.image(400, 300, 'city')

        //add buttons images
        this.add.image(600, 555, 'button')
		this.add.image(500, 555, 'button')
        this.add.image(400, 555, 'button')
        this.add.image(300, 555, 'button')
        this.add.image(200, 555, 'button')
        this.add.image(100, 555, 'button')

        //add staff paper images
        this.add.image(375, 455, 'staffpaper')

        //add level text
        this.levelText = this.add.text(16, 16, 'Level 1', {
			fontSize: '32px', 
			fill: '#FFFFFF'
		})

        //add note
        this.add.image(85, 220, 'note')

        //add map
        this.add.image(450, 220, 'map')
	}
}