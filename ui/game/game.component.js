import { Player } from '../../sound/player.js';
import { Scores } from './scores/scores.component.js';
import { Grid } from './grid/grid.component.js';

export function Game() {
	Player();

	const container = document.createElement('div');
	container.classList.add('game-wrapper');

	const scoresElement = Scores();
	container.append(scoresElement);

	const gridElement = Grid();
	container.append(gridElement);

	return container;
}




