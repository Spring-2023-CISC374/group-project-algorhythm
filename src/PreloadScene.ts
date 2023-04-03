import Phaser from 'phaser'

export default class PreloadScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'PreloadScene' });
    }
  
    preload() {
        this.load.image('button', 'assets/images/tmpButton.jpg');
        this.load.image('staffpaper', 'assets/images/staffpaper.png');
        this.load.image('extrapaper', 'assets/images/extrapaper.jpg');
        this.load.image('note', 'assets/images/note.png');
        this.load.image('map', 'assets/images/map.png');

        this.load.image('city', 'assets/images/city.png');
        this.load.image('mountain', 'assets/images/mountain.png');


    }

    create() {
		this.scene.start('TitleScene');
	}
}