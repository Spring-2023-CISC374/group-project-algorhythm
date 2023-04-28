import Phaser from 'phaser'

import TitleScene from './scenes/TitleScene'
import PreloadScene from './scenes/PreloadScene'
import BaseScene from './scenes/BaseScence'
import TutorialScene from './scenes/TutorialScene'
import TestScene from './scenes/TestScene'
import EndScene from './scenes/EndScene'
import GameScene from './scenes/GameScene'

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
	scene: [PreloadScene, BaseScene, TitleScene, TutorialScene, TestScene, EndScene, GameScene],
	
}

export default new Phaser.Game(config)