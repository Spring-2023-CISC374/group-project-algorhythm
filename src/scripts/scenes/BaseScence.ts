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
    protected inputIndex!: number
    protected noteX = 400
    protected noteY = 620 
    protected noteGroup?: Phaser.GameObjects.Group
    protected message?: any

    protected soundLeft!: Phaser.Sound.BaseSound
    protected soundRight!: Phaser.Sound.BaseSound
    protected soundUp!: Phaser.Sound.BaseSound
    protected soundDown!: Phaser.Sound.BaseSound


    constructor(KeyName: string) {
      super(KeyName);
    }
  
    create(imageName: string, levelName: string, playerX: number, playerY: number, playerState: string) {
        this.add.image(400, 300, imageName)

        this.inputIndex = 0;

        //add buttons images
        this.add.image(400, 755, 'button')
        this.add.image(500, 755, 'button')
        this.add.image(600, 755, 'button')
		this.add.image(700, 755, 'button')
        this.add.image(800, 755, 'button')
        this.add.image(900, 755, 'button')
        this.add.image(1000, 755, 'button')
        
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
        this.add.image(655, 625, 'paper')

        //add level text
        this.add.text(16, 16, levelName, {
			fontSize: '32px', 
			color: '#222222'
		})

        //add note
        this.add.image(85, 320, 'note')

        //add map
        this.add.image(650, 320, 'map')

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
        //.on('pointerdown', ()=>this.movePlayer(this.player, this.soundLeft, this.soundRight, this.soundUp, this.soundDown, this.userInput, this.inputIndex))

        this.delete = this.add.circle(900, 750, 20, 0xFF0000);
        this.delete.setInteractive();

        this.deleteAll = this.add.circle(1000, 750, 20, 0xFF0000);
        this.deleteAll.setInteractive();
        
        //add group to notes
        this.noteGroup = this.add.group();

        this.userInput = []
        this.editInput(this.userInput, this.noteX, this.noteY, this.noteGroup);
        
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

        this.player = this.physics.add.sprite(playerX, playerY, playerState);
        this.player.setDepth(1)
        this.goals = this.physics.add.group();
        this.goalsLeft = 0;

        this.physics.add.collider(this.player, this.goals, this.onCollision, undefined, this)

        this.physics.world.setBounds(300, 20, 700, 520);

        this.player.setCollideWorldBounds(true)


        //add instruction
        this.instruction = this.add.image(650, 400, 'instruction').setInteractive().setVisible(false)
        .on('pointerdown', ()=>this.instruction.setVisible(false));
        this.instruction.setDepth(2)
        
        this.add.text(380, 742, 'Left');
		this.add.text(478, 742, 'Right');
		this.add.text(590, 742, 'Up');
		this.add.text(680, 742, 'Down');
        this.add.text(775, 742, 'Start');
        this.add.text(875, 742, 'Delete');
        this.add.text(975, 742, 'Delete\n All');
	}

    onCollision(_playerObj: Phaser.GameObjects.GameObject, goalObj: Phaser.GameObjects.GameObject) {
        //const player = playerObj as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
        const goal = goalObj as Phaser.Physics.Arcade.Sprite;
    
        goal.destroy();
    
        this.goalsLeft--;
    
        if (this.goalsLeft === 0) {
            this.scene.start('EndScene');
        }
    }

    private destroyLast(noteGroup: Phaser.GameObjects.Group) {
        const last = noteGroup.getChildren()[noteGroup.getChildren().length - 1] as Phaser.GameObjects.Text;

        if (last !== null) {
            last.destroy();
        }
    }

    protected editInput(userInput:Array<string>, noteX: number, noteY:number, noteGroup:Phaser.GameObjects.Group){
        if (userInput.length <= 15){
            this.left.on('pointerdown', () => {
                userInput.push("left")
                noteGroup.add(this.add.text(noteX, noteY, "←", { color: "#FF0000", font: "20px Times New Roman"}))
                noteX += 25
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.right.on('pointerdown', () => {
                userInput.push("right")
                noteGroup.add(this.add.text(noteX, noteY, "→", { color: "#FF0000", font: "20px Times New Roman"}))
                noteX += 25
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.up.on('pointerdown', () => {
                userInput.push("up")
                noteGroup.add(this.add.text(noteX, noteY, "↑", { color: "#FF0000", font: "20px Times New Roman"}))
                noteX += 25
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.down.on('pointerdown', () => {
                userInput.push("down")
                noteGroup.add(this.add.text(noteX, noteY, "↓", { color: "#FF0000", font: "20px Times New Roman"}))
                noteX += 25
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.delete.on('pointerdown', () => {
                userInput.pop()
                if(noteX > 400){
                    noteX -= 25
                }
                this.destroyLast(noteGroup)
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
            this.deleteAll.on('pointerdown', () => {
                userInput.length = 0;
                noteX = 400
                noteGroup.clear(true, true);
                console.log(userInput)
                console.log("noteX = ",noteX)
            });
        }
        /* else{
            this.message = this.add.text(500, 250, 'Too many notes!', 
            { font: '20px Monospace', 
            color: '#ffffff', backgroundColor: 'pink',
            padding: {x:20, y:20} });
            this.message.setInteractive().on('pointerdown', () => this.message.destroy());
        } */
    }
    
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
                userInput.length = 0;
                inputIndex = 0;
            }
        }

    goToTitle(){
        this.scene.start('TitleScene');
    }

    goToEnd(){
        this.scene.start('EndScene');
    }
    
}