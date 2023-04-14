import Phaser from 'phaser'

export default class PreloadScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'PreloadScene' });
    }
  
    preload() {
      //test images
        this.load.image("ada", "assets/images/ada.png");

        this.load.image('dude', 'assets/sprites/placerDude.jpg');

      // background
        this.load.image('city', 'assets/images/city.png');
        this.load.image('mountain', 'assets/images/mountain.png');        
        this.load.image('end', 'assets/images/end.png'); 

      // layout
        this.load.image('arrow', 'assets/images/arrow.jpg');
        this.load.image('mark', 'assets/images/mark.jpg');
        this.load.image('button', 'assets/images/tmpButton.jpg');
        this.load.image('staffpaper', 'assets/images/staffpaper.png');
        this.load.image('extrapaper', 'assets/images/extrapaper.jpg');
        this.load.image('note', 'assets/images/note.png');
        this.load.image('map', 'assets/images/map.png');
      
      // sprite
        this.load.spritesheet('guy_up', "assets/sprites/sprite_up.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_down', "assets/sprites/sprite_down.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_left', "assets/sprites/sprite_left.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_right', "assets/sprites/sprite_right.png", {frameWidth: 64, frameHeight: 51});


      //images 
        this.load.image('bush1','assets/images/bush1.png');
        this.load.image('bush2','assets/images/bush2.png');
        this.load.image('tree1','assets/images/tree1.png');
        this.load.image('tree2','assets/images/tree2.png');
        this.load.image('tree3','assets/images/tree3.png');
        this.load.image('rock1','assets/images/rock1.png');
        this.load.image('rock2','assets/images/rock2.png');
        this.load.image('rock3','assets/images/rock3.png');
        this.load.image('stump1','assets/images/stump1.png');
        this.load.image('stump2','assets/images/stump2.png');
        this.load.image('instruction','assets/images/instruction.png');
        this.load.image('star','assets/images/star.png');

      //music
        this.load.audio('genericMusic', "assets/musics/genericmusic.mp3");

      //sound effects
      //chaos
        this.load.audio("c1_sound", "assets/sounds/c.mp3");
        this.load.audio("d2_sound", "assets/sounds/d.mp3");
        this.load.audio("e3_sound", "assets/sounds/e.mp3");
        this.load.audio("f4_sound", "assets/sounds/f.mp3");
        this.load.audio("g5_sound", "assets/sounds/g.mp3");
        this.load.audio("a6_sound", "assets/sounds/a.mp3");
        this.load.audio("b7_sound", "assets/sounds/b.mp3");
        this.load.audio("c8_sound", "assets/sounds/c2.mp3");
    }

    create() {
      this.scene.start('TitleScene');
	}
}