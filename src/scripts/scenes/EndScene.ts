import Phaser from 'phaser'

export default class EndScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'EndScene' });
    }
  
    create() {
		this.add.image(600, 400, "end")
	}
}