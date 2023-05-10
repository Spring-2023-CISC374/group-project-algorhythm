// import Phaser from 'phaser'

// export default class TestScene extends Phaser.Scene {
//     private instruction?: any
//     private path?: any
//     private question?: any
//     private soundC!: Phaser.Sound.BaseSound
//     private soundG!: Phaser.Sound.BaseSound
//     private soundA!: Phaser.Sound.BaseSound
//     private soundD!: Phaser.Sound.BaseSound
//     //施工中
//     private goals?: Phaser.Physics.Arcade.Group
//     private goalsLeft!: number
//     //施工中
//     private player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
//     private userInput!: Array<string>
//     private left?: any
//     private right?: any
//     private up?: any
//     private down?: any
//     private start?:any
//     private delete?: any
//     private deleteAll?: any
//     private inputIndex?: number = 0
//     private noteX = 400
//     private noteY = 620 
//     private noteGroup?: Phaser.GameObjects.Group
//     private message?: any

//     constructor() {
//       super({ key: 'TestScene' });
//     }
  
//     create() {
//         //add menu?
//         this.path = this.add.image(1220, 50, 'arrow')
//         .setInteractive()
//         .on('pointerdown', ()=>this.goToTitle());
//         this.path.setScale(0.8);

//         this.question = this.add.image(1100, 50, 'mark')
//         .setInteractive()
//         .on('pointerdown', ()=>this.instruction.setVisible(true));
//         this.question.setScale(0.8);


//         //add staff paper images
//         this.add.image(675, 625, 'staffpaper')


//         //add map
//         this.add.image(650, 320, 'map')

        


        

//         //add sounds
//         //need to fix
//         this.soundC = this.sound.add("c1_sound")
//         this.soundG = this.sound.add("g5_sound")
//         this.soundA = this.sound.add("a6_sound")
//         this.soundD = this.sound.add("d2_sound")

//         /* this.goal = this.add.image(655,320,'star')
//         .setInteractive()
//         .on('pointerdown', ()=>this.goToEnd());
//         this.path.setScale(0.8); */
        
//         //施工中
//         this.player = this.physics.add.sprite(340,320,'guy_right');
//         this.goals = this.physics.add.group();
//         this.goalsLeft = 0;
//         const goal1 = this.physics.add.sprite(655, 320, 'star');
//         this.goals.add(goal1);
//         this.goalsLeft++

//         this.physics.add.collider(this.player, this.goals, this.onCollision, undefined, this)



//         //施工中
        
//         // Animations
// 		this.anims.create({
// 			key: 'up',
// 			frames: this.anims.generateFrameNumbers('guy_up', {start:0, end:3}), frameRate: 13, repeat: -1
// 		});
// 		this.anims.create({
// 			key: 'down',
// 			frames: this.anims.generateFrameNumbers('guy_down', {start:0, end:3}), frameRate: 13, repeat: -1
// 		});
// 		this.anims.create({
// 			key: 'left',
// 			frames: this.anims.generateFrameNumbers('guy_left', {start:0, end:3}), frameRate: 13, repeat: -1
// 		});
// 		this.anims.create({
// 			key: 'right',
// 			frames: this.anims.generateFrameNumbers('guy_right', {start:0, end:3}), frameRate: 13, repeat: -1
// 		});
		

//         //add buttons
//         this.left = this.add.circle(400, 750, 20, 0xFF0000);
// 		this.left.setInteractive();

//         this.right = this.add.circle(500, 750, 20, 0xFF0000);
// 		this.right.setInteractive();

//         this.up = this.add.circle(600, 750, 20, 0xFF0000);
// 		this.up.setInteractive();

//         this.down = this.add.circle(700, 750, 20, 0xFF0000);
// 		this.down.setInteractive();

//         this.start = this.add.circle(800, 750, 20, 0xFF0000);
//         this.start.setInteractive()
//         .on('pointerdown', ()=>this.movePlayer(this.player, this.soundA, this.soundC, this.soundD, this.soundG, this.userInput, this.inputIndex))

//         this.delete = this.add.circle(900, 750, 20, 0xFF0000);
//         this.delete.setInteractive();

//         this.deleteAll = this.add.circle(1000, 750, 20, 0xFF0000);
//         this.deleteAll.setInteractive();
        
//         //add group to notes
//         this.noteGroup = this.add.group();

//         this.userInput = []
//         this.editInput(this.userInput, this.noteX, this.noteY, this.noteGroup);
        
//         //add instruction
//         //this.instruction = this.add.image(650, 400, 'instruction').setInteractive()
//         //.on('pointerdown', ()=>this.instruction.setVisible(false));
        
//         this.add.text(380, 742, 'Left');
// 		this.add.text(478, 742, 'Right');
// 		this.add.text(590, 742, 'Up');
// 		this.add.text(680, 742, 'Down');
//         this.add.text(775, 742, 'Start');
//         this.add.text(875, 742, 'Delete');
//         this.add.text(975, 742, 'Delete\n All');


        
// 		//this.movePlayer(player, this.soundA, this.soundC, this.soundD, this.soundG, this.userInput);

        
//         this.inputIndex = 0;
// 	}

//     onCollision(playerObj: Phaser.GameObjects.GameObject, goalObj: Phaser.GameObjects.GameObject) {
//         const player = playerObj as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
//         const goal = goalObj as Phaser.Physics.Arcade.Sprite;
    
//         goal.destroy();
//         this.goalsLeft--;
    
//         if (this.goalsLeft === 0) {
//             this.scene.start('EndScene');
//         }
//       }
        

//     private destroyLast(noteGroup: Phaser.GameObjects.Group) {
//         const last = noteGroup.getChildren()[noteGroup.getChildren().length - 1] as Phaser.GameObjects.Text;

//         if (last !== null) {
//             last.destroy();
//         }
//     }

//     editInput(userInput:Array<string>, noteX: number, noteY:number, noteGroup:Phaser.GameObjects.Group){
//         if (userInput.length <= 15){
//             this.left.on('pointerdown', () => {
//                 userInput.push("left")
//                 noteGroup.add(this.add.text(noteX, noteY, "←", { color: "#FF0000", font: "20px Times New Roman"}))
//                 noteX += 25
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//             this.right.on('pointerdown', () => {
//                 userInput.push("right")
//                 noteGroup.add(this.add.text(noteX, noteY, "→", { color: "#FF0000", font: "20px Times New Roman"}))
//                 noteX += 25
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//             this.up.on('pointerdown', () => {
//                 userInput.push("up")
//                 noteGroup.add(this.add.text(noteX, noteY, "↑", { color: "#FF0000", font: "20px Times New Roman"}))
//                 noteX += 25
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//             this.down.on('pointerdown', () => {
//                 userInput.push("down")
//                 noteGroup.add(this.add.text(noteX, noteY, "↓", { color: "#FF0000", font: "20px Times New Roman"}))
//                 noteX += 25
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//             this.delete.on('pointerdown', () => {
//                 userInput.pop()
//                 if(noteX > 400){
//                     noteX -= 25
//                 }
//                 this.destroyLast(noteGroup)
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//             this.deleteAll.on('pointerdown', () => {
//                 userInput.length = 0;
//                 noteX = 400
//                 noteGroup.clear(true, true);
//                 console.log(userInput)
//                 console.log("noteX = ",noteX)
//             });
//         }
//         /* else{
//             this.message = this.add.text(500, 250, 'Too many notes!', 
//             { font: '20px Monospace', 
//             color: '#ffffff', backgroundColor: 'pink',
//             padding: {x:20, y:20} });
//             this.message.setInteractive().on('pointerdown', () => this.message.destroy());
//         } */
//     }
    
// 	movePlayer(player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, soundC: Phaser.Sound.BaseSound,
//         soundG: Phaser.Sound.BaseSound, soundA: Phaser.Sound.BaseSound, soundD: Phaser.Sound.BaseSound, 
//         userInput:Array<string>, inputIndex: number) {
//             if (inputIndex < userInput.length) {
//                 if (userInput[inputIndex] === "left"){
//                     player.x -= 105
//                     player.play('left')
//                     soundA.play()
//                     inputIndex++
//                 }
//                 else if(userInput[inputIndex] === "right"){
//                     player.x += 105
//                     player.play('right')
//                     soundD.play()
//                     inputIndex++
//                 }
//                 else if(userInput[inputIndex] === "up"){
//                     player.y -= 105
//                     player.play('up')
//                     soundC.play()
//                     inputIndex++
//                 }
//                 else{
//                     player.y += 105
//                     player.play('down')
//                     soundG.play()
//                     inputIndex++
//                 }
//                 setTimeout(() => this.movePlayer(player, soundC, soundG, soundA, soundD, userInput, inputIndex), 500);

//             }
//             else{
//                 userInput.length = 0;
//                 inputIndex = 0;
//             }
//         }

//     private handleArrive(){
//         this.scene.start('EndScene');
//     }

//     goToTitle(){
//         this.scene.start('TitleScene');
//     }

//     goToEnd(){
//         this.scene.start('EndScene');
//     }

//     creatInstuction(){
//         this.instruction = this.add.image(650, 400, 'instruction').setInteractive();
//     }

//     removeInstruction(){
//         this.instruction.destroy();
//         this.instruction = null;
//     }
// }