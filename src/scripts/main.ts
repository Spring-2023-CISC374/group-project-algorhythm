import Phaser from 'phaser'

import TitleScene from './scenes/TitleScene'
import PreloadScene from './scenes/PreloadScene'
import BaseScene from './scenes/BaseScence'
import TutorialScene from './scenes/TutorialScene'
import TestScene from './scenes/TestScene'
import EndScene from './scenes/EndScene'
import Level1 from './scenes/Level1'
import LevelA from './scenes/LevelA'
import LevelB from './scenes/LevelB'
import LevelC from './scenes/LevelC'
import LevelMenu from './scenes/LevelMenu'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1280,
	height: 800,
	backgroundColor: 0xD1EFDF,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		},
	},
	scene: [PreloadScene, BaseScene, TitleScene, TutorialScene, TestScene, EndScene, 
		Level1, LevelA, LevelB, LevelC, LevelMenu],
	
}

export default new Phaser.Game(config)