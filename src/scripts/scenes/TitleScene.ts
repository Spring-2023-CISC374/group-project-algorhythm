import Phaser from 'phaser'

export default class TitleScene extends Phaser.Scene{
    private button1: any;
    private button2: any;
    private bgm?: Phaser.Sound.BaseSound

    constructor(){
        super({key: 'TitleScene'});
    }
    
    create(){
        this.add.image(400, 300, 'city')
        this.add.text(70, 100, "Algorhythm", { color: "#222222", font: "120px Times New Roman"})

        this.button1 = this.add.rectangle(600, 500, 200, 100, 0xdadaaa)
        .setInteractive()
        .on('pointerdown', ()=>this.goToLevel());
        this.button1.setScale(0.8); 

        this.button2 = this.add.rectangle(200, 500, 200, 100, 0xaadada)
        .setInteractive()
        .on('pointerdown', ()=>this.goToTutorial());
        this.button2.setScale(0.8);

        //play bgm
        this.bgm = this.sound.add('genericMusic', {loop: true});
		this.bgm.play()

        //add texts on buttons
        this.add.text(575, 485, "Level", { color: "#222222", font: "20px Times New Roman"})
        this.add.text(170, 485, "Tutorial", { color: "#222222", font: "20px Times New Roman"})
    }

    goToTutorial(){
        this.scene.start('TutorialScene');
        this.bgm?.stop()
    }

    goToLevel(){
        this.scene.start('LevelScene');
    }
}