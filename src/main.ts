import Phaser from 'phaser'

import HelloWorldScene from './GameScene'
import TitleScene from './TitleScene'
import PreloadScene from './PreloadScene'
import LevelScene from './LevelScence'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	backgroundColor: 0xD1EFDF,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		},
	},
	scene: [PreloadScene, TitleScene, HelloWorldScene, LevelScene],
}

export default new Phaser.Game(config)
