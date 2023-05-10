import Phaser from 'phaser'

export default class EndScene extends Phaser.Scene {
    constructor() {
      super({ key: 'EndScene' });
    }
  
    create() {
      // code from Spanish Shopping Expedition
      this.add.image(700, 400, "endscreen")
      .setInteractive()
      .on('pointerdown', ()=>this.goToTitle());
  
	}
    goToTitle(){
      this.scene.start('TitleScene');
}
}