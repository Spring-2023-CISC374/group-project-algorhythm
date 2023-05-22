import Phaser from 'phaser'

export default class BaseScene extends Phaser.Scene {
    protected instruction?: any
    protected path?: any
    protected question?: any
    protected goals!: Phaser.Physics.Arcade.Group
    protected goalsLeft!: number
    protected player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    protected userInput!: Array<string>
    protected left?: any
    protected right?: any
    protected up?: any
    protected down?: any
    protected start?:any
    protected delete?: any
    protected deleteAll?: any
    protected reset?: any
    protected inputIndex!: number
    protected noteX = 375
    protected noteY = 655
    protected noteLeft!: any
    protected noteRight!: any
    protected noteUp!: any 
    protected noteDown!: any
    protected noteGroup!: Phaser.GameObjects.Group
    protected message?: any
    protected initialPlayerX!: number;
    protected initialPlayerY!: number;

    protected soundLeft!: Phaser.Sound.BaseSound
    protected soundRight!: Phaser.Sound.BaseSound
    protected soundUp!: Phaser.Sound.BaseSound
    protected soundDown!: Phaser.Sound.BaseSound

    protected levelSound!: Phaser.Sound.BaseSound
    protected levelName?: string


    constructor(KeyName: string) {
      super(KeyName);
    }
  
    create(imageName: string, levelName: string, playerX: number, playerY: number, playerState: string, levelPrview: string) {
        // add background
        this.add.image(400, 300, imageName)

        this.levelSound = this.sound.add(levelPrview); 
        const song_instructions = this.add.image(100, 320, 'note');
        song_instructions.setInteractive();
        song_instructions.on('pointerdown', () => this.levelSound.play())

        // Record the initial position of the sprite for the reset button
        this.initialPlayerX = playerX;
        this.initialPlayerY = playerY;
        
        // Set user input to initial value
        this.inputIndex = 0;
        
        //add button to show instruction and make player able to return to the previous page
        this.path = this.add.image(1220, 50, 'arrow')
        .setInteractive()
        .on('pointerdown', ()=>this.scene.start('LevelMenu'));
        this.path.setScale(0.8);

        this.question = this.add.image(1100, 50, 'mark')
        .setInteractive()
        .on('pointerdown', ()=>this.instruction.setVisible(true));
        this.question.setScale(0.8);

        //add staff paper images
        this.add.image(630, 655, 'paper')

        //add level text
        this.add.text(16, 16, levelName, {
			fontSize: '32px', 
			color: '#222222'
		})

        //add board
        this.add.image(650, 320, 'map')

        //add buttons
        this.left = this.add.image(400, 757, "left");
		this.left.setInteractive();

        this.right = this.add.image(500, 757, "right");
		this.right.setInteractive();

        this.up = this.add.image(600, 757, "up");
		this.up.setInteractive();

        this.down = this.add.image(700, 757, "down");
		this.down.setInteractive();

        this.start = this.add.image(1000, 655, "start");
        this.start.setInteractive()

        this.delete = this.add.image(855, 750, "delete");
        this.delete.setInteractive();

        this.deleteAll = this.add.image(970, 750, "deleteAll");
        this.deleteAll.setInteractive();

        this.reset = this.add.image(1070, 750, "reset");
        this.reset.setInteractive();
        
        
        //add group to notes
        this.noteGroup = this.add.group();

        this.userInput = []
        //this.editInput(this.userInput, this.noteX, this.noteY, this.noteGroup, this.noteLeft, this.noteRight,
            //this.noteUp, this.noteDown);
        
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

        // draw player
        this.player = this.physics.add.sprite(playerX, playerY, playerState);
        this.player.setDepth(1)
        this.goals = this.physics.add.group();
        this.goalsLeft = 0;
        
        // make player collide with goal 
        this.physics.add.collider(this.player, this.goals);
        this.physics.add.overlap(
            this.player,
            this.goals,
            this.handleCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
            undefined,
            this
          );

        // set boundary for game board, make sprite unable to move outside the board
        this.physics.world.setBounds(300, 20, 700, 520);
        this.player.setCollideWorldBounds(true);

        //add instruction
        this.instruction = this.add.image(650, 400, 'instruction').setInteractive().setVisible(false)
        .on('pointerdown', ()=>this.instruction.setVisible(false));
        this.instruction.setDepth(2)
    }
    
    // collision for player and goal
    private handleCollision(
        playerObj: Phaser.Physics.Arcade.Sprite,
        goalObj: Phaser.Physics.Arcade.Sprite
      ) {
        const player = playerObj;
        const goal = goalObj;
      
        goal.destroy();
        player.setAlpha(0.5);
        this.goalsLeft--;
      
        if (this.goalsLeft === 0) {
          this.scene.start('EndScene');
        }
    }

    // For delete button, delete last note in the group
    private destroyLast(noteGroup: Phaser.GameObjects.Group) {
        const last = noteGroup.getChildren()[noteGroup.getChildren().length - 1] as Phaser.GameObjects.Text;

        if (last !== null) {
            last.destroy();
        }
    }

    // Handling user input
    protected editInput(userInput:Array<string>, noteX: number, noteY:number, noteGroup:Phaser.GameObjects.Group,
        noteLeft: string, noteRight: string, noteUp: string, noteDown: string, LevelName: string){
            this.left.on('pointerdown', () => {
                userInput.push("left")
                //const image = this.add.image(noteX, noteY, noteLeft);
                noteGroup.add(this.add.image(noteX, noteY, noteLeft));
                //text(noteX, noteY, "←", { color: "#FF0000", font: "20px Times New Roman"}))
                noteX += 20
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.right.on('pointerdown', () => {
                userInput.push("right")
                //noteGroup.add(this.add.text(noteX, noteY, "→", { color: "#FF0000", font: "20px Times New Roman"}))
                noteGroup.add(this.add.image(noteX, noteY, noteRight));
                noteX += 20
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.up.on('pointerdown', () => {
                userInput.push("up")
                //noteGroup.add(this.add.text(noteX, noteY, "↑", { color: "#FF0000", font: "20px Times New Roman"}))
                noteGroup.add(this.add.image(noteX, noteY, noteUp));
                noteX += 20
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.down.on('pointerdown', () => {
                userInput.push("down")
                //noteGroup.add(this.add.text(noteX, noteY, "↓", { color: "#FF0000", font: "20px Times New Roman"}))
                noteGroup.add(this.add.image(noteX, noteY, noteDown));
                noteX += 20
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.delete.on('pointerdown', () => {
                userInput.pop()
                if(noteX > 375){
                    noteX -= 20
                }
                this.destroyLast(noteGroup)
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.deleteAll.on('pointerdown', () => {
                userInput.length = 0;
                noteX = 375
                noteGroup.clear(true, true);
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.reset.on('pointerdown', () => {
                this.scene.start(LevelName);
            });
        /* else{
            this.message = this.add.text(500, 250, 'Too many notes!', 
            { font: '20px Monospace', 
            color: '#ffffff', backgroundColor: 'pink',
            padding: {x:20, y:20} });
            this.message.setInteractive().on('pointerdown', () => this.message.destroy());
        } */
    }
    
    // Make sprite move
	protected movePlayer(player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, soundLeft: Phaser.Sound.BaseSound,
        soundRight: Phaser.Sound.BaseSound, soundUp: Phaser.Sound.BaseSound, soundDown: Phaser.Sound.BaseSound, 
        userInput:Array<string>, inputIndex: number) {
            if (inputIndex < userInput.length) {
                if (userInput[inputIndex] === "left"){
                    player.x -= 105
                    player.play('left')
                    soundLeft.play()
                    inputIndex++
                }
                else if(userInput[inputIndex] === "right"){
                    player.x += 105
                    player.play('right')
                    soundRight.play()
                    inputIndex++
                }
                else if(userInput[inputIndex] === "up"){
                    player.y -= 105
                    player.play('up')
                    soundUp.play()
                    inputIndex++
                }
                else{
                    player.y += 105
                    player.play('down')
                    soundDown.play()
                    inputIndex++
                }
                setTimeout(() => this.movePlayer(player, soundLeft, soundRight, soundUp, soundDown, userInput, inputIndex), 700);
            }
            else{
                /* userInput.length = 0;
                inputIndex = 0; */
            }
        }

    goToTitle(){
        this.scene.start('TitleScene');
    }

    goToEnd(){
        this.scene.start('EndScene');
    }
    
}