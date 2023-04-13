import Phaser from 'phaser'

export default class EndScene extends Phaser.Scene {
    private message?: any

    constructor() {
      super({ key: 'EndScene' });
    }
  
    create() {
      // code from Spanish Shopping Expedition
      this.message= this.add.image(600, 400, "end")
      .setInteractive()
      .on('pointerdown', ()=>this.goToTitle());
      this.message.setScale(0.8); 
	}
    goToTitle(){
      this.scene.start('TitleScene');
}
}