import Phaser from 'phaser'

export default class TestScene extends Phaser.Scene {
    private instruction?: any
    private path?: any
    private question?: any
    private soundC?: Phaser.Sound.BaseSound
    private soundG?: Phaser.Sound.BaseSound
    private soundA?: Phaser.Sound.BaseSound
    private soundD?: Phaser.Sound.BaseSound
    private goal?: any
    private player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    private userInput?: Array<string> = []
    private left?: any
    private right?: any
    private up?: any
    private down?: any
    private start?:any

    constructor() {
      super({ key: 'TestScene' });
    }
  
    create() {
    

        //add menu?
        this.path = this.add.image(1220, 50, 'arrow')
        .setInteractive()
        .on('pointerdown', ()=>this.goToTitle());
        this.path.setScale(0.8);

        this.question = this.add.image(1100, 50, 'mark')
        .setInteractive()
        .on('pointerdown', ()=>this.instruction.setVisible(true));
        this.question.setScale(0.8);


        //add staff paper images
        this.add.image(675, 625, 'staffpaper')


        //add map
        this.add.image(650, 320, 'map')

        


        const player = this.physics.add.sprite(340,320,'guy_right');

        //add sounds
        //need to fix
        this.soundC = this.sound.add("c1_sound")
        this.soundG = this.sound.add("g5_sound")
        this.soundA = this.sound.add("a6_sound")
        this.soundD = this.sound.add("d2_sound")

        this.goal = this.add.image(655,320,'star')
        .setInteractive()
        .on('pointerdown', ()=>this.goToEnd());
        this.path.setScale(0.8);

        /* this.physics.add.collider(this.player, this.goal)
		this.physics.add.overlap(this.player, this.goal, this.handleArrive, undefined, this)  */

		// Animations
		this.anims.create({
			key: 'up',
			frames: this.anims.generateFrameNumbers('guy_up', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'down',
			frames: this.anims.generateFrameNumbers('guy_down', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('guy_left', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('guy_right', {start:0, end:3}), frameRate: 13, repeat: -1
		});
		

        //add buttons
        this.left = this.add.circle(400, 750, 20, 0xFF0000);
		this.left.setInteractive();

        this.right = this.add.circle(500, 750, 20, 0xFF0000);
		this.right.setInteractive();

        this.up = this.add.circle(600, 750, 20, 0xFF0000);
		this.up.setInteractive();

        this.down = this.add.circle(700, 750, 20, 0xFF0000);
		this.down.setInteractive();

        this.start = this.add.circle(800, 750, 20, 0xFF0000);
        this.start.setInteractive()
        .on('pointerdown', ()=>this.movePlayer(player, this.soundA, this.soundC, this.soundD, this.soundG, this.userInput))


        this.editInput(this.userInput);

        
        //add instruction
        //this.instruction = this.add.image(650, 400, 'instruction').setInteractive()
        //.on('pointerdown', ()=>this.instruction.setVisible(false));
        
        this.add.text(380, 742, 'Left');
		this.add.text(478, 742, 'Right');
		this.add.text(590, 742, 'Up');
		this.add.text(680, 742, 'Down');
        this.add.text(775, 742, 'Start');

		//this.movePlayer(player, this.soundA, this.soundC, this.soundD, this.soundG, this.userInput);

	}

    editInput(userInput:Array<string>){
        this.left.on('pointerdown', function() {
            userInput.push("left")
            console.log(userInput)
        });
        this.right.on('pointerdown', function() {
            userInput.push("right")
            console.log(userInput)
        });
        this.up.on('pointerdown', function() {
            userInput.push("up")
            console.log(userInput)
        });
        this.down.on('pointerdown', function() {
            userInput.push("down")
            console.log(userInput)
        });
    }
    
	movePlayer(player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, soundC: Phaser.Sound.BaseSound,
        soundG: Phaser.Sound.BaseSound, soundA: Phaser.Sound.BaseSound, soundD: Phaser.Sound.BaseSound, userInput:Array<string>) {
            userInput.forEach((input) => {
                if (input === "left"){
                    player.x -= 105
                    player.play('left')
                    soundA.play()
                    console.log(input)
                }
                else if(input === "right"){
                    player.x += 105
                    player.play('right')
                    soundD.play()
                    console.log(input)
                }
                else if(input === "up"){
                    player.y -= 105
                    player.play('up')
                    soundC.play()
                    console.log(input)
                }
                else{
                    player.y += 105
                    player.play('down')
                    soundG.play()
                    console.log(input)
                }
            })
        }

    private handleArrive(){
        this.scene.start('EndScene');
    }

    goToTitle(){
        this.scene.start('TitleScene');
    }

    goToEnd(){
        this.scene.start('EndScene');
    }

    creatInstuction(){
        this.instruction = this.add.image(650, 400, 'instruction').setInteractive();
    }

    removeInstruction(){
        this.instruction.destroy();
        this.instruction = null;
    }
}