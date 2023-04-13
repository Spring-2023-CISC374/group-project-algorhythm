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
        this.load.image('instruction','assets/images/instruction.png');

      //music
        this.load.audio('genericMusic', "assets/musics/genericmusic.mp3");

      //sound effects

    }

    create() {
      this.scene.start('TutorialScene');
	}
}