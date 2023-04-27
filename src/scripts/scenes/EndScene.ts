import Phaser from 'phaser'

export default class EndScene extends Phaser.Scene {
    constructor() {
      super({ key: 'EndScene' });
    }
  
    create() {
      // code from Spanish Shopping Expedition
      this.add.image(600, 400, "end")
      .setInteractive()
      .on('pointerdown', ()=>this.goToTitle());
  
	}
    goToTitle(){
      this.scene.start('TitleScene');
}
}