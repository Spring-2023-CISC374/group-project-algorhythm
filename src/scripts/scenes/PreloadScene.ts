import Phaser from 'phaser'
import city from '/assets/images/city.png'
import title from '/assets/images/title.jpg'
import levelselect from '/assets/images/levelselect.jpg'
import mountain from '/assets/images/mountain.png'
import end from '/assets/images/end.png'
import endScreen from '/assets/images/endscreen.jpg'

import arrow from '/assets/images/arrow.png'
import mark from '/assets/images/mark.png'
import right from '/assets/images/right.png'
import left from '/assets/images/left.png'
import up from '/assets/images/up.png'
import down from '/assets/images/down.png'

import deleteB from '/assets/images/delete.png'
import deleteAll from  '/assets/images/deleteAll.png'
import paper from '/assets/images/paper.png'
import note from '/assets/images/note.png'
import map from '/assets/images/map.png'
import start from '/assets/images/start.png'
import reset from '/assets/images/reset.png'


export default class PreloadScene extends Phaser.Scene {
  
    constructor() {
      super({ key: 'PreloadScene' });
    }
  
    preload() {
      // background
        this.load.image('city', city);
        this.load.image('title', title);
        this.load.image('levelselect', levelselect);
        this.load.image('mountain', mountain);        
        this.load.image('end', end); 
        this.load.image('endscreen', endScreen);


      // layout
        this.load.image('arrow', arrow);
        this.load.image('mark', mark);
        this.load.image('right', right);
        this.load.image('left', left);
        this.load.image('up', up);
        this.load.image('down', down);

        this.load.image('delete', deleteB);
        this.load.image('deleteAll', deleteAll);
        this.load.image('paper', paper);
        this.load.image('note', note);
        this.load.image('map', map);
        this.load.image('start', start);
        this.load.image('reset', reset);
      
      // sprite
        this.load.spritesheet('guy_up', "assets/sprites/sprite_up.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_down', "assets/sprites/sprite_down.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_left', "assets/sprites/sprite_left.png", {frameWidth: 64, frameHeight: 51});
        this.load.spritesheet('guy_right', "assets/sprites/sprite_right.png", {frameWidth: 64, frameHeight: 51});

      //images 
        this.load.image('bush1','assets/images/bush1.png');
        this.load.image('bush2','assets/images/bush2.png');
        this.load.image('tree1','assets/images/tree1.png');
        this.load.image('tree2','assets/images/tree2.png');
        this.load.image('tree3','assets/images/tree3.png');
        this.load.image('rock1','assets/images/rock1.png');
        this.load.image('rock2','assets/images/rock2.png');
        this.load.image('rock3','assets/images/rock3.png');
        this.load.image('stump1','assets/images/stump1.png');
        this.load.image('stump2','assets/images/stump2.png');
        this.load.image('instruction','assets/images/instructions.png');
        this.load.image('star','assets/images/star.png');

      //note images 
        this.load.image('1','assets/notes/1.png');
        this.load.image('2','assets/notes/2.png');
        this.load.image('3','assets/notes/3.png');
        this.load.image('4','assets/notes/4.png');
        this.load.image('5','assets/notes/5.png');
        this.load.image('6','assets/notes/6.png');
        this.load.image('7','assets/notes/7.png');
        this.load.image('8','assets/notes/8.png');
        this.load.image('9','assets/notes/9.png');
        this.load.image('10','assets/notes/10.png');
        this.load.image('11','assets/notes/11.png');
        this.load.image('12','assets/notes/12.png');
        this.load.image('13','assets/notes/13.png');

      //music
        this.load.audio('genericMusic', "assets/musics/genericmusic.mp3");

      //sound effects
      //chaos
        this.load.audio("c1_sound", "assets/sounds/c.mp3");
        this.load.audio("d2_sound", "assets/sounds/d.mp3");
        this.load.audio("e3_sound", "assets/sounds/e.mp3");
        this.load.audio("f4_sound", "assets/sounds/f.mp3");
        this.load.audio("g5_sound", "assets/sounds/g.mp3");
        this.load.audio("a6_sound", "assets/sounds/a.mp3");
        this.load.audio("b7_sound", "assets/sounds/b.mp3");
        this.load.audio("c8_sound", "assets/sounds/c2.mp3");
        this.load.audio("gLow_sound", "assets/sounds/lowerG.mp3");
        this.load.audio("levelAPreview", "assets/sounds/levelApreview.mp3");
        this.load.audio("levelBPreview", "assets/sounds/levelBpreview.mp3");
        this.load.audio("levelCPreview", "assets/sounds/levelCpreview.mp3");
        this.load.audio("tutorialPreview", "assets/sounds/tutorialPreview.mp3");
    }

    create() {
      this.scene.start('TitleScene');
      
      //Shortcut
      //this.scene.start('LevelC');
      //this.scene.start('TutorialScene');
    }
}