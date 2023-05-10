import Phaser from 'phaser'

export default class LevelMenu extends Phaser.Scene{
    private button1: any;
    private button2: any;

    constructor(){
        super({key: 'LevelMenu'});
    }
    
    create(){
        this.button1 = this.add.rectangle(600, 500, 200, 100, 0xdadaaa)
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelB'));
        this.button1.setScale(0.8); 

        this.button2 = this.add.rectangle(200, 500, 200, 100, 0xaadada)
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelA'));
        this.button2.setScale(0.8);


        //add texts on buttons
        this.add.text(170, 485, "LevelA", { color: "#222222", font: "20px Times New Roman"})
        this.add.text(575, 485, "LevelB", { color: "#222222", font: "20px Times New Roman"})
        
    }
}