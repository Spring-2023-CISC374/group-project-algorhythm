import Phaser from 'phaser'

export default class TestScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'TestScene' });
    }
  
    create() {
		this.add.image(400, 300, "ada")
	}
}