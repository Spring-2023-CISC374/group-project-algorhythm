import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import TitleScene from './scenes/TitleScene'
import PreloadScene from './scenes/PreloadScene'
import LevelScene from './scenes/LevelScence'
import TutorialScene from './scenes/TutorialScene'
import TestScene from './scenes/TestScene'
import EndScene from './scenes/EndScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1280,
	height: 800,
	backgroundColor: 0xD1EFDF,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		},
	},
	scene: [PreloadScene, GameScene, LevelScene, TitleScene, TutorialScene, TestScene, EndScene],
	
}

export default new Phaser.Game(config)
