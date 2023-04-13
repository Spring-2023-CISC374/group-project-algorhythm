import Phaser from 'phaser'

export default class TutorialScene extends Phaser.Scene {
    private levelText?: Phaser.GameObjects.Text
    private instruction?: any
    private path?: any
    private question?: any

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
        this.add.image(85, 220, 'note')

        //add map
        this.add.image(650, 320, 'map')

        //add instruction
        /* this.creatInstuction();

        this.input.once('pointerdown', () => {
            this.instruction.destroy();
            this.instruction = null;
        });

        this.instruction.setInteractive(); */

        
	}

    goToTitle(){
        this.scene.start('TitleScene');
    }

    creatInstuction(){
        this.instruction = this.add.image(650, 400, 'instruction');
    }

    removeInstruction(){
        this.instruction.destroy();
        this.instruction = null;
    }
}