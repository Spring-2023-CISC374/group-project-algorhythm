import Phaser from 'phaser'

export default class LevelMenu extends Phaser.Scene{
    private button1: any;
    private button2: any;
    private button3: any;
    private path?: any

    constructor(){
        super({key: 'LevelMenu'});
    }
    
    create(){
        this.add.image(500, 450, 'levelselect')

        this.path = this.add.image(1220, 50, 'arrow')
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('TitleScene'));
        this.path.setScale(0.8);

        this.button1 = this.add.rectangle(600, 500, 300, 100, 0xdadaaa)
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelB'));
        this.button1.setScale(0.8); 

        this.button2 = this.add.rectangle(200, 500, 300, 100, 0xaadada)
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelA'));
        this.button2.setScale(0.8);

        this.button3 = this.add.rectangle(1000, 500, 300, 100, 0xdadadaa)
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelC'));
        this.button3.setScale(0.8); 


        //add texts on buttons
        this.add.text(100, 485, "Mary had a Little Lamb", { color: "#222222", font: "20px Times New Roman"})
        this.add.text(560, 485, "Old McDonald", { color: "#222222", font: "20px Times New Roman"})
        this.add.text(950, 485, "Itsy Bitsy Spider", { color: "#222222", font: "20px Times New Roman"})
        
    }
}